---
category: Components
type: 通用
title: Field
subtitle: 输入框
---

表单中的输入框组件。

## API

除以下属性外，Field 默认支持 Input 标签所有的原生属性、事件。

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| border | 是否显示边框 | boolean | - |  |
| leftIcon | 左侧图标 | string \| ReactNode | - |  |
| fieldType | 普通输入框、密码输入框、多行输入框 | 'normal' \| 'password' \| 'textarea' | normal |  |
| leftStyle | 左边图标样式 | CSSProperties | - |  |
| placeholder | 输入框占位提示文字 | string | - |  |
| onChange | 输入框内容变化时的回调 | function(e) | - |  |
| autosize | 是否自适应内容高度，只对 textarea 有效 | boolean | false |  |
| status | error | string | - |  |
| value | 输入框内容 | string \| number | - |  |
| visibilityToggle | 是否显示切换的小眼睛，只对密码输入框有效 | boolean | true |  |
| showWordLimit | 是否显示字数统计，需要设置maxLength属性 | boolean | - |  |
