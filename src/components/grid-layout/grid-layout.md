---
category: Components
type: 通用
title: GridLayout
subtitle: 宫格
---

## GridLayout 宫格

在水平和垂直方向，将布局切分成若干等大的区块。

## API

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| data | 传入的菜单数据 | Array<{icon, text}> | [] |  |
| onClick | 点击每个菜单的回调函数 | (el: Object, index: number): void | - |  |
| columnNum | 列数 | number | 4 |  |
| renderItem | 自定义每个 grid 条目的创建函数 | (el, index) => React.Node | - |  |
| itemStyle | 每个格子自定义样式 | CSSProperties | - |  |
