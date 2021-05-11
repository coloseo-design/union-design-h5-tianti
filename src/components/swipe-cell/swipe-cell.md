---
category: Components
type: 反馈
title: SwipeCell
subtitle: 滑动单元格组件
---

## SwipeCellProps

| 参数      | 说明                   | 类型                | 默认值 |
| :-------- | :--------------------- | :------------------ | :----- |
| left      | 左侧按钮组             | SwipeCellButton\[\] | -      |
| right     | 右侧按钮组             | SwipeCellButton\[\] | -      |
| autoClose | 点击按钮后自动隐藏按钮 | boolean             | true   |
| disabled  | 禁用                   | boolean             | false  |
| onOpen    | 打开时回调函数         | () => void          | -      |
| onClose   | 关闭时回调函数         | () => void          | -      |

## SwipeCellButton

| 参数      | 说明     | 类型          | 默认值 |
| :-------- | :------- | :------------ | :----- |
| content   | 按钮     | ReactNode     | -      |
| style     | 样式     | CSSProperties | -      |
| className | 样式     | string        | -      |
| onPress   | 点击事件 | () => void    | -      |
