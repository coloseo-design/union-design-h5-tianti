---
category: Components
type: 数据展示
title: File
subtitle: 文件
---

## API

### 文件后缀支持
  wps, doc, docx, tiff, ppt, pptx, pdf, jpg, jpeg, png, xls, xlsx, bmp, wav, mov, mp4, avi


### Props

| 参数        | 说明                | 类型          | 默认值 |
| :---------- | :------------------ | :------------ | :----- |
| style       | 样式对象            | CSSProperties |        |
| className   | 样式类              | string        |        |
| name        | 文件名              | string        |        |
| desc        | 描述                | string        |        |
| closeEnable | 是否显示 close 图标 | boolean       |        |
| onClose     | close 图标点击事件  | () => void    |        |
| btnList     | 按钮组              | Btn[]         |        |
| iconRender  | 自定义图标|(name:string,icon?:ReactNode)=>ReactNode|        |

### Btn

| 参数    | 说明         | 类型       | 默认值 |
| :------ | :----------- | :--------- | :----- |
| name    | 按钮名称     | string     |        |
| onClick | 按钮点击事件 | () => void |        |
