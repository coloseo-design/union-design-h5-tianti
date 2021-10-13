---
category: Components
type: 通用
title: Search
subtitle: 搜索
---

用于搜索场景的输入框组件。

## API

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| defaultValue | 搜索框的默认值 | string | - |  |
| value | 搜索框的当前值 | string | - |  |
| placeholder | 搜索框占位提示文字 | string | - |  |
| onSubmit | submit 事件 (点击键盘的 enter) | (val: string) => void | - |  |
| onChange | 搜索框内容变化时的回调 | function(e) | - |  |
| onFocus | focus 事件的回调 | () => void | - |  |
| onBlur | blur 事件的回调 | () => void | - |  |
| onCancel | 点击取消按钮触发 | (val: string) => void | - |  |
| onClear | 点击 clear 图标触发 | (val: string) => void | - |  |
| maxlength | 最多允许输入的字符个数 | number | - |  |
| showBackIcon | 展示左上角返回图标 | boolean | - |  |
| cancelText | 定制取消按钮的文字 | string | 取消 |  |
| showCancelButton | 是否一直显示取消按钮 | boolean | - |  |
