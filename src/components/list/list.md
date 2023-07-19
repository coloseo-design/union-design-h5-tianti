---
category: Components
type: 通用
title: List
subtitle: 列表
---
## API

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
|dataSource|列表数据源|any[]|--|--|
|itemLayout|设置 List.Item 布局, 设置成 horizontal 则横排样式显示, 默认竖排 | string | vertical||
|renderItem|渲染列表项|(item, index) => ReactNode| --||
|style|list样式| object| --||
|className|list类名|string|--|--|
|size|list 大小|'default'\|'lg'|'default'|--|



### List.Item
| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
|arrow|右侧的Icon| 'arrow' \| ReactNode |-- |--|
|extra|额外内容, 通常用在 itemLayout 为 horizontal 的情况下, 展示右侧内容| ReactNode | --|--|
|onIconClick|点击右侧的箭头|(e) => void|--|--|
|style|listItem样式| object| --|--|
|className|listItem类名| string |--|--|

### List.Item.Avatar
| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
|size|头像大小|number| 32|--|
|src|头像图片的链接| string|--|--|
|text|头像的文字|string|--|--|
|shape| 头像的形状| 'circle' ｜'square' | circle|--|
|style|头像样式| object|--|--|

### List.Item.Content
list.item的内容 (可以传style， className)
### List.Item.Title
list.item的内容标题(可以传style， className)
### List.Item.SubTitle
list.item的内容小标题(可以传style， className)
### List.Item.CheckType
list.item的内容的radio或者checkbox位置(可以传style， className)



