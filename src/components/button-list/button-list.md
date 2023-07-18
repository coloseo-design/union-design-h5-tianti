---
category: Components
type: 通用
title: ButtonList
subtitle: 按钮列表
---

## API

### Props

| 参数           | 说明             | 类型                           | 默认值 |
| :------------- | :--------------- | :----------------------------- | :----- |
| style          | 样式对象         | CSSProperties                  |        |
| className      | 样式类           | string                         |        |
| iconButtonList | 图标按钮数据列表 | ( Icon \| React.ReactNode)[]   |        |
| buttonList     | 右侧按钮列表     | ( Button \| React.ReactNode)[] |        |
|type|buttonList类型|'default'\|'text'|'default'|
|leftText|当type='text'时左侧文案|string\|ReactNode|--|

### Icon

| 参数    | 说明         | 类型       | 默认值 |
| :------ | :----------- | :--------- | :----- |
| type    | 图标 type    | string     | -      |
| name    | 图标下方文字 | string     | -      |
| onClick | 图标点击事件 | () => void | -      |

### Button

| 参数    | 说明         | 类型       | 默认值 |
| :------ | :----------- | :--------- | :----- |
| type    | 按钮 type    | string     | -      |
| name    | 按钮文字     | string     | -      |
| onClick | 按钮点击事件 | () => void | -      |


### ButtonList.Actions 
| 参数    | 说明         | 类型       | 默认值 |
| :------ | :----------- | :--------- | :----- |
| list    | 图标文字列表    | {name: string \| ReactNode, icon: string\| ReactNode, onClick?: () => void}[]     | -      |
