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

### Collapse

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| activeKey | 当前激活 tab 面板的 key | number | - |
| defaultActiveKey | 初始化选中面板的 key | number | - |
| onChange | 切换面板的回调 | (value:number \| undefined, show:boolean) => void | - |
| accordion | 手风琴模式 | boolean | false |
| expandIcon | 自定义图标 | (value: { isActive: boolean, key, header }) => React.ReactNode | Icon |
| size | 折叠面板 大小类型 | 'default'\|'md' | 'default' |

### Collapse.Panel

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| key | 当前面板的 key | number | - |
| header | 当前面板的头内容 | React.ReactNode | - |
| extra | 当前面板的头右侧额外内容 | (value: { isActive: boolean }) => React.ReactNode | - |
| expandIcon | 自定义图标 | (value: { isActive: boolean, key, header }) => React.ReactNode | Icon |
