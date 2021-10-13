---
category: Components
type: 通用
title: ActionSheet
subtitle: 上拉菜单
---


底部弹起的模态面板，包含与当前情境相关的多个选项,或是分享面板

## API
| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
|visible|是否显示上拉菜单|boolean|false|  |
|closeOnClickOverlay|点击遮罩层是否关闭|boolean|true|  |
|type|上拉菜单类型|string: `basic`, `upload`, `share` |`basic`|  |
|options|展示的数据源|Option[]| --|  |
|title|顶部标题|string | --|  |
|cancelText|取消按钮文字|string｜ReactNode | 取消|  |
|overlay|是否显示遮罩层|boolean | true|  |
|multiple|是否多行展示(图片默认超出三个换行， 图标默认超出四个是否换行)|boolean|false|  |
|currentCol|指定图片，图标默认每行几个换行(在multiple为true时有效)|{image: 3, icon: 4}|  |  |
|onCancel|点击取消 或者蒙层时触发,选项时触发|(e) => void;|--|  |
|onSelect|点击选项时触发|(option) => void;|--|  |


### Option结构

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
|name|操作名称或者图片，分享名称|string|  |  |
|src|分享图标或者图片url|string｜ReactNode|  |  |
|type|展示样式,type为`img`展示图片样式(在ActionSheet type = `upload`时有效)，不传展示图标样式|string|  |  |
|mainOperation|是否是主要操作（(在ActionSheet type = `basic`时有效）|bollean|  |  |
|color|自定义选项颜色(在ActionSheet type = `basic`时有效)|string|  |  |
