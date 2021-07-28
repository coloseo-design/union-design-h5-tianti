---
category: Components
type: 通用
title: Popup
subtitle: 弹出层
---

弹出层容器，用于展示弹窗、信息提示等内容。

## API

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
|position	| 弹出位置	'top', 'left' , 'right' ,'bottom', 'center'	|string| center |--|
|vmodel	|是否显示弹出层| boolean	| false|
|getPopupContainer |	指定挂载的节点|	() => Element|--|	
|header	|弹出层header|	string｜ReactNode	|--|
|okText|	确认按钮文字|	string ｜ReactNode|	确认|
|cancelText	|取消按钮文字	|string ｜ReactNode	|取消|
|onCancel|	点击取消按钮， 关闭图标触发	|(e) => void|	--|
|onOk	|点击确认按钮 触发	|(e) => void	|--|
|overlay	|是否显示遮罩层	|booolean	|true|
|overlayStyle|	自定义遮罩层样式|	object|	--|
|overlayClass	|自定义遮罩层类名|	string|	--|
|closeable|	是否显示关闭图标|	boolean	|true|
|closeIcon|	关闭图标 或 图片链接	|string	,ReactNode|	--|
|round |	是否展示圆角 |	boolean	| true |
| closeOnClickOverlay |	是否点击遮罩层关闭 |	boolean	|true|
|style|	弹出层样式|	object|	--|
|bodyStyle|	弹出层内容body样式|	object|	--|
|clickCloseIcon |	点击关闭图标时触发	|() => void |	--|