---
category: Components
type: 通用
title: Picker
subtitle: 选择器
---

## Cascader API

| 参数      | 说明           | 类型          | 默认值 |
| :-------- | :------------- | :------------ | :----- |
| style     | 样式   | CSSProperties | -      |
| titles     | 样式   | string[] | React.ReactNode[] | -      |
| className | 样式   | string        | -      |
| options | 样式     | Option[](多列依赖children属性)       | -      |
| value | 选中的值   | string[]        | -      |
| defaultValue | 默认选中的值  | string[]        | -      |
| onChange   | 选择回调函数 | (value: string[])=>void      | -      |
| renderItem   | 选项渲染函数 | (value: Option)=> string ｜ React.RactNode | -  |
| itemHeight   | 渲染元素高度 | ｜ number | 52  |
| visibleItemCount   | 默认渲染多少可见对象 ｜ number | 6  |
