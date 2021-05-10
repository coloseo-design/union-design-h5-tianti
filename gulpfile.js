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

function handleChildren(item, title, meta) {
  if (item.tag === 'article' && Array.isArray(item.children)) {
    item.children.unshift({
      tag: 'h1',
      children: `${meta.title} ${meta.subtitle}`,
    });
  }
  return {
    ...item,
    attrs: {
      ...item.attrs,
      id: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(item.tag) && typeof item.children === 'string' ? `${title.replace(/\s|\./g, '')}-${item.children.replace(/\s|\./g, '')}` : undefined,
    },
    children: item.children && Array.isArray(item.children)
      ? item.children.map((element) => (element.tag ? handleChildren(element, title, meta) : element))
      : item.children,
  };
}

function addId(params, title, meta) {
  const { content } = params;
  return {
    ...params,
    content: handleChildren(content, title, meta),
  };
}

function markdown() {
  return src(path.resolve('src/components', '**/*.md'))
    // TODO: 可以配置
    .pipe(through2.obj((chunk, encoding, callback) => {
      if (chunk.isBuffer()) {
        const content = `${chunk.contents.toString(encoding)}## 代码演示`;
        const data = MT(content);
        Object.assign(data, {
          content: transform(['div', data.content]),
        });
        const _data = addId(data, chunk.stem, data.meta);
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

function apidoc() {
  return src(path.resolve('src/components', '**/*.md'))
    .pipe(through2.obj((chunk, encoding, callback) => {
      if (chunk.isBuffer()) {
        const content = `${chunk.contents.toString(encoding)}## 代码演示`;
        const data = MT(content);
        const { meta: { title, subtitle } } = data;
        const resultName = `${title} ${subtitle}`;
        const resultContent = {};
        data.content.splice(1, 0, ['h1', `${title} ${subtitle}`]);
        data.content.forEach(element => {
          if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(element[0]) && typeof element[1] === 'string') {
            Object.assign(resultContent, {
              [`${chunk.stem.replace(/\s|\./g, '')}-${element[1].replace(/\s|\./g, '')}`]: [element[1]]
            });
          }
        });
        const result = `module.exports = {\n\tname: ${JSON.stringify(resultName)},\n\tcontent: ${JSON.stringify(resultContent)}\n};\n`;
        chunk.contents = Buffer.from(result);
        chunk.stem = 'apidoc';
        chunk.extname = '.js';
        callback(null, chunk);
      }
    }))
  .pipe(dest('src/components'));
}

exports.md = series([clean('src/site/docs'), clean('src/site/demos'), markdown, entry, demoEntry, apidoc]);
