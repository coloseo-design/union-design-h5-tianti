---
category: Components
type: 通用
title: ButtonList
subtitle: 按钮列表
---

## API

### Props

| 参数           | 说明             | 类型                         | 默认值 |
| :------------- | :--------------- | :--------------------------- | :----- |
| style          | 样式对象         | CSSProperties                |        |
| className      | 样式类           | string                       |        |
| iconButtonList | 图标按钮数据列表 | ( Icon \| React.ReactNode)[] |        |
| buttonText     | 右侧按钮文字     | string                       |        |
| onButtonClick  | 右侧按钮点击事件 | () => void                   |        |

### Icon

| 参数    | 说明         | 类型       | 默认值 |
| :------ | :----------- | :--------- | :----- |
| type    | 图标 type    | string     | -      |
| name    | 图标下方文字 | string     | -      |
| onClick | 图标点击事件 | () => void | -      |
