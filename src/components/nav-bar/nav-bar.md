---
category: Components
type: 通用
title: NavBar
subtitle: 导航栏
---

去掉以前的size属性， size=lg 改成 NavBar.Header， size = 'sm' 改成Title组件

## API
| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
|leftText|左侧文案|string ｜ React.ReactNode |--|  |
|rightText|右侧文案 | string ｜ React.ReactNode|--|
|leftArrow|是否显示左侧箭头|bollean|--|   |
|title|标题|string|--|  |
|icon|用户头像或者标题前的图标| ReactNode |--|  |
|onLeftClick|点击左侧按钮触发|(e) => void|--|  |
|onRightClick|点击右侧按钮触发|(e) => void | --|   |
|rightTextColor|右侧按钮颜色| string|--|   |
|closeable|是否展示右侧关闭icon|boolean|true|
|titleStyle| title样式|CSSProperties|--|

### NavBar.Header
| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
|rightText|右侧文案 | string ｜ React.ReactNode|--|
|title|标题|string|--|  |
|icon|用户头像或者标题前的图标| ReactNode |--|  |
|onRightClick|点击右侧按钮触发|(e) => void | --|   |
|rightTextColor|右侧按钮颜色| string|--|   |
|titleStyle| title样式|CSSProperties|--|