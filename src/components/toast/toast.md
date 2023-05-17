---
category: Components
type: 通用
title: Toast
subtitle: 轻提示
---

在页面中间弹出黑色半透明提示，用于消息通知、加载提示、操作结果提示等场景。

## API

Toast.info(icon, content, duration, mask)

Toast.loading(icon, content, duration, mask)

Toast.hide()

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| content | 提示内容 | string | - |  |
| duration | 自动关闭的延时，单位秒 | number | 3 |  |
| icon | 自定义图标 | string \| ReactNode | - |  |
| mask | 是否显示透明蒙层，防止触摸穿透 | Boolean | false |  |
| loadingType | loading图标类型 | 'spinner' \| 'circular' | spinner |  |
| vertical | 是否垂直排列图标和文字内容 | boolean | true |  |
| maskStyle | 遮罩层样式 | CSSProperties | - | - |
