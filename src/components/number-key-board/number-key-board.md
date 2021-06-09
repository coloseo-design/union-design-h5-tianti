---
category: Components
type: 通用
title: NumberKeyBoard
subtitle: 输入框
---

虚拟数字键盘，可以配合密码输入框组件或自定义的输入框组件使用。

## API
| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
|show|是否展示键盘|bollean|false|--|
|title|键盘标题|string|--||
|complete|是否展示完成按钮（有title的时候complete为true）| boolean|--| |
|deleteButtonText|删除按钮文字|string｜ReactNode| 默认键盘删除图标 |--|
|value|输入的值|string|--|--|
|hideOnClickOutside|点击外部的时候是否收起键盘|boolean|true|--|
|extraKey|额外按键处理|string ｜reactNode | 默认键盘图标|--|
|onInput|点击按键时候的回调|（value） => void | | --|
|onDelete|点击删除按键时候的回调| (value) => void | | --|
|onKeyBoard| 点击键盘按钮时候的回调| () => void||--|
|onBlur|键盘失去焦点触发|() => void | --| --|