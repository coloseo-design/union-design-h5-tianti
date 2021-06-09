---
category: Components
type: 通用
title: Collapse
subtitle: 折叠面板
---

可以折叠/展开的内容区域。

## 何时使用

对复杂区域进行分组和隐藏，保持页面的整洁。

手风琴 是一种特殊的折叠面板，只允许单个内容区域展开。

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| activeKey | 当前激活 tab 面板的 key | number | - |
| defaultActiveKey | 初始化选中面板的 key | number | - |
| onChange | 切换面板的回调 | (value:number \| undefined, show:boolean) => void | - |
| accordion | 手风琴模式 | boolean | false |
