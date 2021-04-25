---
category: Components
subtitle: 下拉刷新
type: 通用
title: PullRefresh
toc: false
---

## PullRefresh

## API

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
|loading|是否在加载中|false|--|
|pullingText|下拉过程的文案| string｜reactNode| 下拉即可刷新...|
|loadingText|加载过程提示文案| string｜reactNode | --|
|loosingText|释放过程提示文案|string｜reactNode| 释放即可刷新...|
|successText|刷新成功提示文案|string｜reactNode|刷新成功|
|headHeight|顶部内容高度|number|96|
|successDuration|成功提示时长|number|300|
|onRefresh|下拉刷新时触发|() => void|--|