---
category: Components
type: 通用
title: NavBar
subtitle: 导航栏
---

## API
| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
|leftText|左侧文案|string ｜ React.ReactNode |--|  |
|rightText|右侧文案 | string ｜ React.ReactNode|--|
|leftArrow|是否显示左侧箭头|bollean|--|   |
|title|标题|string|--|  |
|home|是否展示home样式| boolean| false|  |
|icon|用户头像或者标题前的图标| ReactNode |--|  |
|onLeftClick|点击左侧按钮触发|(e) => void|--|  |
|onRightClick|点击右侧按钮触发|(e) => void | --|   |
|showBackTitle|是否展示后置标题|boolean | false|   |
|typeSize|标题大小 |'lg', 'md', 'sm', 'xs'| 'md'|   |
|rightTextColor|右侧按钮颜色| string|--|   |