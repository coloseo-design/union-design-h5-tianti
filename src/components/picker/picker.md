---
category: Components
type: 通用
title: Picker
subtitle: 基础选择器
---
## API

| 参数      | 说明           | 类型          | 默认值 |
| :-------- | :------------- | :------------ | :----- |
| style     | 样式   | CSSProperties | -      |
| className | 样式   | string        | -      |
| options | 样式     | Option[][]       | -      |
| value | 选中的值   | string[]        | -      |
| defaultValue | 默认选中的值  | string[]        | -      |
| onChange   | 选择回调函数 | (value: string[], selections: Option[])=>void      | -      |
| renderItem   | 选项渲染函数 | (value: Option)=> string ｜ React.RactNode | -  |
| visibleItemCount | 默认渲染多少可见对象 | number | 6  |
| itemHeight   | 渲染元素高度 | number | 44  |


### Picker.Cascader

| 参数      | 说明           | 类型          | 默认值 |
| :-------- | :------------- | :------------ | :----- |
| style     | 样式   | CSSProperties | -      |
| className | 样式   | string        | -      |
| options | 样式     | Option[](多列依赖children属性)       | -      |
| value | 选中的值   | string[]        | -      |
| defaultValue | 默认选中的值  | string[]        | -      |
| onChange   | 选择回调函数 | (value: string[], selections: Option[])=>void      | -      |
| renderItem   | 选项渲染函数 | (value: Option)=> string ｜ React.RactNode | -  |
