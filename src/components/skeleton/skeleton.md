---
category: Components
type: 数据展示
title: Skeleton
subtitle: 骨架屏
---

用于在内容加载过程中展示一组占位图形。

## API

| 参数              | 说明                                         | 类型                  | 默认值   |
| :---------------- | :------------------------------------------- | :-------------------- | :------- |
| loading           | 为 true 时，显示占位图。反之则直接展示子组件 | boolean               | false    |
| avatar            | 是否显示头像占位图                           | boolean               | false    |
| avatarSize        | 头像占位图大小                               | number \| string      | 48       |
| avatarShape       | 头像占位图形状                               | 'circle' \| 'square'  | 'circle' |
| paragraph         | 是否显示段落占位图                           | boolean               | false    |
| paragraphRow      | 段落占位图行数                               | number                | 1        |
| paragraphRowWidth | 段落占位图宽度，可传数组来设置每一行的宽度   | Array<number\|string> | \[100%\] |
| title             | 是否显示标题占位图                           | boolean               | false    |
| titleWidth        | 标题占位图宽度                               | number \| string      | 40%      |
| round             | 为 true 时，段落和标题显示圆角               | boolean               | false    |
