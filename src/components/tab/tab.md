---
category: Components
type: 导航
title: Tab
subtitle: 标签页
---
去掉 Tab.Item 上的 dot 属性
## API

### Tab

| 参数               | 说明             | 类型                                 | 默认值   |
| :----------------- | :--------------- | :----------------------------------- | :------- |
| style              | 整体样式         | CSSProperties                        | -        |
| className          | 整体样式         | string                               | -        |
| contentDirection   | 内容方向         | "normal" \| "vertical"               | "normal" |
| mode               | 模式             | 'scroll' \| 'fixed'                  | 'scroll' |
| type               | 风格             | 'normal'\|'card'\|'label' \|'task'\|'task-mode'   | 'normal' |
| defaultSelectedKey | 处始选择哪个     | string                               | -        |
| selectedKey        | 双向绑定选择哪个 | string                               | -        |
| tabNum             | 标签个数         | number                               | -        |
| tabStyle           | 标签栏样式       | CSSProperties                        | -        |
| tabClassName       | 标签栏样式       | string                               | -        |
| onTabChange        | 标签变化的回调   | (key: string, index: number) => void | -        |
| lineStyle          | 底部条样式       | CSSProperties                        | -        |
| lineClassName      | 底部条样式       | string                               | -        |
|contentType| children内容全部展示还是只展示当前这一个|-|



### Tab.Item

| 参数       | 说明                                                         | 类型    | 默认值 |
| :--------- | :----------------------------------------------------------- | :------ | :----- |
| key        | 唯一标识                                                     | string  | -      |
| title      | 标题                                                         | string  | -      |
| titleNum   | 标题最大长度                                                 | number  | -      |
| taskNum    | TabProps type为task 时候的数字                               | number  | -      |
| taskWeight | TabProps type为task 时候的数字颜色 不重要内容：1 重要内容：2 | 1\|2    | 1      |

### Tab.Config 全局配置

```javascript
Tab.Config = {
  normal: {
    /** mode:'fixed' 标签个数 */
    tabNum: 4,
    /** 标签文字个数 */
    textNum: 4,
  },
  card: {
    tabNum: 4,
    /** arr index-》value 对应几个标签的 文字个数 null 不限 文字长度 */
    textNum: [null, 9, 6, 4],
  },
  label: {
    tabNum: 4,
    textNum: 5,
  },
  task: {
    tabNum: 4,
    textNum: 5,
  },
  'task-mode': {
    tabNum: 4,
    textNum: 4,
  },
};
```
