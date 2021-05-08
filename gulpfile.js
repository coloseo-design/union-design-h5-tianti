const MT = require('mark-twain');
const through2 = require('through2');
const path = require('path');
const concat = require('gulp-concat');
const del = require('del');
const { src, dest, series } = require('gulp');

function rename(name, sparator = '-') {
  const arr = name.split(sparator).map((item) => {
    let [first, ...reset] = item;
    const codepoint = first.codePointAt(0);
    if (codepoint > 96 && codepoint < 123) {
      const upper = codepoint - 32;
      first = String.fromCodePoint(upper);
    }
    reset.unshift(first);
    return reset.join('');
  }).join('');
  return arr;
}

function transform(data) {
  let [tag, ..._children] = data;
  const result = {
    tag,
  };
  if (_children.length && (typeof _children[0] !== 'string' && !Array.isArray(_children[0]))) {
    Object.assign(result, {
      attrs: _children[0],
    });
    _children = _children.slice(1);
  }
  if (_children.length === 1 && typeof _children[0] === 'string') {
    Object.assign(result, { children: _children[0] });
  } else {
    const children = _children.map((item) => (Array.isArray(item) ? transform(item) : item));
    Object.assign(result, { children });
  }
  return result;
}

function handleChildren(item, title) {
  return {
    ...item,
    attrs: {
      ...item.attrs,
      id: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(item.tag) && typeof item.children === 'string' ? `${title.replace(/\s|\./g, '')}-${item.children.replace(/\s|\./g, '')}` : undefined,
    },
    children: item.children && Array.isArray(item.children)
      ? item.children.map((element) => (element.tag ? handleChildren(element, title) : element))
      : item.children,
  };
}

function addId(params, title) {
  const { content } = params;
  return {
    ...params,
    content: handleChildren(content, title),
  };
}

function markdown() {
  return src(path.resolve('src/components', '**/*.md'))
    // TODO: 可以配置
    .pipe(through2.obj((chunk, encoding, callback) => {
      if (chunk.isBuffer()) {
        const content = `${chunk.contents.toString(encoding)}# 代码演示`;
        const data = MT(content);
        Object.assign(data, {
          content: transform(['div', data.content]),
        });
        const _data = addId(data, chunk.stem);
        const jsonstring = JSON.stringify(_data);
        const formatted = `/* eslint-disable */
export default ${jsonstring}
        `;
        chunk.contents = Buffer.from(formatted);
      }
      chunk.path = chunk.path.replace(/\.md$/, '.ts');
      callback(null, chunk);
    }))
    // TODO: 可以配置
    .pipe(dest(path.resolve('src', 'site/docs')));
}

const clean = (directories) => () => del(directories);

function entry() {
  return src([path.resolve('src', 'site/docs/**/*.ts'), path.resolve('src', 'site/docs/**/*.tsx')])
    .pipe(through2.obj((file, encoding, callback) => {
      const content = '/* eslint-disable */\nexport { default as #{ComponentTitle} } from \'./#{title}/#{title}\';';
      const result = content.replace(/#{title}/g, file.stem).replace(/#{ComponentTitle}/g, rename(file.stem));
      file.contents = Buffer.from(result);
      callback(null, file);
    }))
    .pipe(concat('index.ts'))
    .pipe(dest(path.resolve('src', 'site/docs')));
}

function demoEntry() {
  return src('src/components/**/demo.tsx')
    .pipe(through2.obj((file, encoding, callback) => {
      const splited = file.path.split(path.sep);
      const current = splited[splited.length - 2];
      const ComponentName = rename(current);
      const content = '/* eslint-disable */export { default as #{ComponentName} } from \'../../components/#{title}/demo\';';
      const result = content.replace(/#{title}/g, current)
        .replace(/#{ComponentName}/g, ComponentName);
      file.contents = Buffer.from(result);
      callback(null, file);
    }))
    .pipe(concat('index.ts'))
    .pipe(dest(path.resolve('src', 'site/demos')));
}

exports.md = series([clean('src/site/docs'), clean('src/site/demos'), markdown, entry, demoEntry]);
