---
category: Components
type: 数据录入
title: Radio
subtitle: 单选框
---

按钮用于开始一个即时操作。

## 何时使用

用于在多个备选项中选中单个状态，和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。
## API

### Radio

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| disabled | 禁用 Radio | boolean | false |
| value | 根据 value 进行比较，判断是否选中 | string | - |
| defaultChecked | 默认选中 | boolean | false |
| checked | 是否选中 | boolean | false |

### RadioGroup

单选框组合，用于包裹一组 `Radio`。

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| defaultValue | 默认选中的值 | any | - |  |
| disabled | 禁选所有子单选器 | boolean | false |  |
| name | RadioGroup 下所有 `input[type="radio"]` 的 `name` 属性 | string | - |  |
| options | 以配置形式设置子元素 | string\[] \| Option\[] | - |  |
| value | 用于设置当前选中的值 | string | - |  |
| onChange | 选项变化时的回调函数 | function(e:Event) | - |  |

### Option
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| label | 标签 | string|React.ReactNode[] |  |
| value | 值 | string | false |  |
| disabled | 是否禁用 | boolean | - |  |
