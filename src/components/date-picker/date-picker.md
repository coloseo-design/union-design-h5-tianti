---
category: Components
type: 通用
title: DatePicker
subtitle: 日期选择
---
## API

| 参数      | 说明           | 类型          | 默认值 |
| :-------- | :------------- | :------------ | :----- |
| style     | 样式   | CSSProperties | -   |
| className | 样式   | string        | -   |
| value | 选中的值   | dayjs.Dayjs        | -      |
| defaultValue | 默认选中的值  | dayjs.Dayjs        | -      |
| onChange   | 选择回调函数 | (value: string[])=>void      | -      |
| renderItem   | 选项渲染函数 | (value: Option)=> string ｜ React.RactNode | -  |
| visibleItemCount   | 默认渲染多少可见对象 ｜ number | 6  |  |
| itemHeight   | 渲染元素高度 ｜ number | 44  |  |
| title   | 默认标题 ｜ number | 44  |  |
| onOk   | 点击确认的回调 ｜ (evt) => void  | -  |  |
| onCancel   | 点击关闭的回调 ｜ (evt) => void  | -  |  |
| rangeOfYear   | 年份的范围（当前+/-rangeOfYear） ｜ number  | 50  |  |
