---
category: Components
type: 通用
title: Popover
subtitle: 气泡卡片
---



## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| color | 弹出框颜色 white,red,black | string | white|
| content | 弹出框内容 | React.ReactNode | --|
| placement| 弹出框位置 top,topLeft,topRight, bottom,bottomLeft,bootomRight | string|top|
|getPopupContainer |	指定挂载的节点|	() => Element， 使用时挂载的节点需要使用position:'relative'|() => HTMLElement | null| () => document.body|
|visible|弹窗自定义控制展示|boolean|false|
|onVisibleChange|弹窗显隐改变时的调用|(visible: boolean) => void|--|
