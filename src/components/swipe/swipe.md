---
category: Components
type: 数据展示
title: Swipe
subtitle: 轮播图
---

用于循环播放一组图片或内容。

## API


| 参数         | 说明                 | 类型             | 默认值 |
| :----------- | :------------------- | :--------------- | :----- |
| style        | 样式                 | CSSProperties    | -      |
| className    | 样式                 | string           | -      |
| autoplay     | 是否自动轮播 |     boolean      | true   |
| duration     | 动画时长，单位为     | number           | 600    |
| defaultIndex | 初始位置索引值       | number           | 0      |
| width        | 滑块宽度             | number \| string | '100%' |
| height       | 滑块高度             | number \| string | '100%' |
|onChange      |切换面板的回调,autoplay为false时左右滑动切换（idx为当前第几个，type为'prev','next' ） |(idx: number, type?: string) => void|--|
|autotiming|自动轮播间隔 单位为 ms|number|3000|
|isTips|是否展示右下角的当前位置和总数|boolean|true|

