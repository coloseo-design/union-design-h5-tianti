---
category: Components
subtitle: 下拉菜单
type: 通用
title: DropdownMenu
toc: false
---
向下弹出的菜单列表。
## API

### DropdownMenu

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
|direction| 菜单展开方向| 'up'｜'down' | 'down'| |
|overlay|是否显示遮罩层| boolean | true| |
|closeOnClickOverlay|是否在点击遮罩层后关闭菜单|true| | |
|closeOnClickOutside| 是否在点击外部元素后关闭菜单| true| | |
|style| dropmenu样式｜object|--|| |
|activeColor|菜单标题颜色 和选项选中颜色| string | --||

### DropdownItem

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
|value |当前选中项对应的 value| string | --| |
|options| 选项数组| Option[]| --||
|disabled|是否禁用菜单|boolean|false| |
|dropContentStyle| 下拉列表样式| object| --|  |
|onChange|点击选项导致 value 变化时触发| (value) => void| --|  |


### Option 数据结构

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| value| 标识符 | string|  |  |
|text| 文字 | string|   |   |