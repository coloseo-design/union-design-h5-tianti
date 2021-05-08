module.exports = {
  /** 组件名称,全中文 或者 全英文 或者 中英文组合 但是 中英之间必须有空格 */
  name: 'Tab 标签页',
  /** 内容 key是锚点 value: {[key:string]: stirng[]} 索引的内容，层级，str[0]一般是标题 str[1]一般是描述 可以是空数组 */
  content: {
    '1': ['tab 1', 'tab 1 desc 1 tab 1 desc 1 tab 1 desc 1 tab 1 desc 1'],
    '2': ['问题', '不美丽', '个人审美不予以解释,个人审美不予以解释,个人审美不予以解释,个人审美不予以解释'],
    '3': ['API'],
  }
};
