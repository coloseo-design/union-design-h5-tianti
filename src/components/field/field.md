---
category: Components
type: 通用
title: Field
subtitle: 输入框
---

表单中的输入框组件。

## API

## Field

除以下属性外，Field 默认支持 Input 标签所有的原生属性、事件

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| defaultValue | 输入框默认内容 | string | - |  |
| disabled | 是否禁用状态 | boolean | false |  |
| maxlength | 最大长度 | number | - |  |
| type | 同原生 Input 标签的 type 属性 | string | text |  |
| value | 输入框内容 | string | - |  |
| onChange | 输入框内容变化时的回调 | function(e) | - |  |
| placeholder | 输入框占位提示文字 | string | - |  |
| readonly | 是否只读 | boolean | false |  |
| label | 输入框标题文本 | string | - |  |
| required | 是否显示表单必填星号 | boolean | false |  |
| rows | 元素的输入文本的行数（显示的高度）| number | 1 |  |
| cols | 文本域的可视宽度 | number | - |  |
| leftIcon | 左侧额外内容 | any | - |  |
| rightIcon | 右侧额外内容 | any | - |  |
| autosize | 是否自适应内容高度，只对 textarea 有效 | boolean | false |  |
| border | 是否显示边框 | boolean | false |  |
| fieldType | card  reply  normal | string | normal |  |
| status | error  warning | string | - |  |
| rules | 表单校验规则 | Rule[] | - |  |
