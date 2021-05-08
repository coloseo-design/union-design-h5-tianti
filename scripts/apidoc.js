// 模版
// module.exports = {
//   /** 组件名称,全中文 或者 全英文 或者 中英文组合 但是 中英之间必须有空格 */
//   name: '',
//   /** 内容 key是锚点 value: {[key:string]: stirng[]} 索引的内容，层级，str[0]一般是标题 str[1]一般是描述 可以是空数组 */
//   content: { }
// };

const path = require('path');
const fs = require('fs');
const algoliasearch = require('algoliasearch');
const singlelinelog = require('single-line-log');

const [appId, apiKey, indexName] = [
  'PQHNASWN7G',
  '85039b179148db34f3f4d5da6353cc76',
  'union_design_h5',
];

const componentsPath = path.resolve(__dirname, "../", "src", "components");

const componentsDirs = fs.readdirSync(componentsPath)
  .filter(name => fs.statSync(path.join(componentsPath, name)).isDirectory());

const apidocs = componentsDirs.map(dirName => {
  const apidocPath = path.join(componentsPath, dirName, 'apidoc.js');

  if (fs.existsSync(apidocPath)) {
    const obj = require(apidocPath) || {};

    return Object.entries(obj.content || {}).map(([key, value]) => ({
      dirName,
      objectID: `${dirName}-${key}`,
      name: obj.name || '',
      anchor: key || '',
      data: (value || []).map((item, index) => ([`lvl${index}`, item])).reduce((a, b) => {
        a[b[0]] = b[1];
        return a;
      }, {})
    }));
  }

  return null;
}).filter(item => !!item).reduce((a, b) => [...a, ...b], []);

const uploadTask = async () => {
  const algoliaClient = await algoliasearch(appId, apiKey);
  const algoliaIndex = await algoliaClient.initIndex(indexName);

  await algoliaIndex.setSettings({
    searchableAttributes: [
      'name',
      'data',
    ]
  })

  console.log("清除旧文档");
  await algoliaIndex.clearObjects();

  const length = apidocs.length;
  let progress = 0;

  console.log("上传新文档");
  for await (let apidoc of apidocs) {
    await algoliaIndex.saveObject(apidoc);
    progress += 1;
    const a = Math.floor(progress / length * 50);
    const b = 50 - a;
    singlelinelog.stdout(`文档上传进度：${'█'.repeat(a)}${'░'.repeat(b)} [${progress}/${length}]`);
  }

  console.log("\n文档上传完毕");
};

uploadTask();
