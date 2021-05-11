---
category: Components
type: 数据展示
title: ImagePreview
subtitle: 图片预览组件
---

## API

| 参数             | 说明                                                  | 类型           | 默认值 |
| :--------------- | :---------------------------------------------------- | :------------- | :----- |
| imgSrc           | 图片src                                               | string         | -      |
| imgOriginalSrc   | 图片原图src 有这个属性 全屏 的时候 显示 查看原图 按钮 | string         | -      |
| imgAlt           | 图片alt                                               | string         | -      |
| imgStyle         | 图片样式                                              | CSSProperties  | -      |
| imgClassName     | 图片样式                                              | string         | -      |
| style            | 样式                                                  | CSSProperties  | -      |
| className        | 样式                                                  | string         |        |
| enableFullScreen | 是否开启点击图片 全屏 预览                            | boolean        | false  |
| fullScreenFooter | 全屏 预览 底部                                        | ReactNode      | -      |
| onClick          | 容器点击事件                                          | (event)=> void | -      |
