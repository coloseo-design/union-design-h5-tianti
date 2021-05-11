---
category: Components
type: 导航
title: Tabbar
subtitle: 标签栏组件
---

## Tabbar

| 参数             | 说明                   | 类型              | 默认值   |
| :--------------- | :--------------------- | :---------------- | :------- |
| position         | tabbar 位置            | 'top' \| 'bottom' | 'bottom' |
| style            | 样式                   | CSSProperties     | -        |
| className        | 样式                   | string            | -        |
| contentStyle     | 图标对应内容的样式     | CSSProperties     | -        |
| contentClassName | 图标对应内容的样式     | string            | -        |
| itemStyle        | 图标对应内容的内容样式 | CSSProperties     | -        |
| itemClassName    | 图标对应内容的内容样式 | string            | -        |
| initKey          | 默认选择的Key          | string            | -        |

## Tabbar.Item

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

## Example

```javascript
const Demo = () => (
  <div
    style={{
      margin: 40,
      width: 414,
      height: 600,
      border: '1px solid black',
      position: 'relative',
    }}
  >
    <Tabbar position="bottom">
      <Tabbar.Item
        dot
        key="选项1"
        title="选项1"
        icon="approval"
        selectedStyle={{ color: 'rgb(81, 159, 240)' }}
      >
        <div
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'yellow',
          }}
        >
          选项1 页面
        </div>
      </Tabbar.Item>
      <Tabbar.Item
        badge={122}
        key="选项2"
        title="选项2"
        icon={<Icon type="calendar" />}
        selectedStyle={{ color: 'rgb(81, 159, 240)' }}
      >
        <div
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'grey',
          }}
        >
          选项2 页面
        </div>
      </Tabbar.Item>
      <Tabbar.Item
        key="选项3"
        title="选项3"
        icon="service"
        selectedStyle={{ color: 'rgb(81, 159, 240)' }}
      >
        <div
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'green',
          }}
        >
          选项3 页面
        </div>
      </Tabbar.Item>
    </Tabbar>
  </div>
);
 ```
