---
category: Components
type: 导航
title: Tabbar
subtitle: 标签栏
---

## API

### Tabbar

| 参数             | 说明                   | 类型              | 默认值   |
| :--------------- | :--------------------- | :---------------- | :------- |
| position         | tabbar 位置            | 'top' \| 'bottom' | 'bottom' |
| style            | 样式                   | CSSProperties     | -        |
| className        | 样式                   | string            | -        |
| contentStyle     | 图标对应内容的样式     | CSSProperties     | -        |
| contentClassName | 图标对应内容的样式     | string            | -        |
| itemStyle        | 图标对应内容的内容样式 | CSSProperties     | -        |
| itemClassName    | 图标对应内容的内容样式 | string            | -        |
| activeKey          | 选择页面的Key          | string            | -        |
|onChange          |key改变的事件          | (key: string) => void      | -        |

### Tabbar.Item

| 参数                  | 说明                                              | 类型             | 默认值 |
| :-------------------- | :------------------------------------------------ | :--------------- | :----- |
| key                   | 唯一标识                                          | string           | -      |
| badge                 | 徽标数                                            | number \| string | -      |
| dot                   | 是否在右上角显示小红点（在设置badge的情况下失效） | boolean          | -      |
| icon                  | 默认展示图片                                      | ReactNode        | -      |
| selectedIcon          | 选中后的展示图片                                  | ReactNode        | -      |
| title                 | 标题文字                                          | string           | -      |
| style                 | 样式                                              | CSSProperties    | -      |
| className             | 样式                                              | string           | -      |
| titleStyle            | 标题样式                                          | CSSProperties    | -      |
| titleClassName        | 标题样式                                          | string           | -      |
| iconStyle             | 图标样式                                          | CSSProperties    | -      |
| iconClassName         | 图标样式                                          | string           | -      |
| selectedStyle         | 选中样式                                          | CSSProperties    | -      |
| selectedClassName     | 选中样式                                          | string           | -      |
| selectedTitleStyle    | 选中标题样式                                      | CSSProperties    | -      |
| selectedClassName     | 选中标题样式                                      | string           | -      |
| selectedIconStyle     | 选中图标样式                                      | CSSProperties    | -      |
| selectedIconClassName | 选中图标样式                                      | string           | -      |

