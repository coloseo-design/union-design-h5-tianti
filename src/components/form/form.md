---
category: Components
subtitle: 表单
type: 数据录入
cols: 1
title: Form
---

具有数据收集、校验和提交功能的表单，包含复选框、单选框、输入框、下拉选择框等元素。

## 何时使用

用于创建一个实体或收集信息。
需要对输入的数据类型进行校验时。


## 表单域

表单一定会包含表单域，表单域可以是输入控件，标准表单域，标签，下拉菜单，文本域等。

这里我们封装了表单域 `<Form.Item />` 。

```jsx
<Form.Item {...props}>{children}</Form.Item>
```

## API

### Form

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| form | 经 `ref` 获取 | FormInstance | - |  |
| name | 表单名称 | string | - |  |
| onSubmit | 数据验证成功后回调事件 | Function(e:Event) |  |  |
| onSubmitFailed | 数据验证失败后回调事件 | Function(e:Event) |  |  |
| initialValues  | 表单初始化数据源      | object | - | |

### FormItem

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| name | 字段名称 | string | - |  |
| label | label 标签的文本 | ReactNode |  |  |
| valuePropName | 子节点的值的属性，如 Switch 的是 'checked'。该属性为 getValueProps 的封装，自定义 getValueProps 后会失效 | string | value |  |
| trigger | 设置收集字段值变更的时机 | string | onChange |  |
| required | 必填样式设置。如不设置，则会根据校验规则自动生成 | boolean | false |  |
| trigger | 设置收集字段值变更的时机 | string | onChange |  |
| rules | 校验规则，设置字段的校验逻辑 | Rules |  |  |
| getValueFromEvent | 设置如何将 event 的值转换成字段值 | (..args: any[]) => any |  |  |

### FormInstance

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| reset | 重置表单字段 | （...args: any[]) => void | - |  |
| setFieldsValue | 设置字段的值 | (value: Values) => void | - |  |
| submit | 提交表单 | () => void | - |  |
