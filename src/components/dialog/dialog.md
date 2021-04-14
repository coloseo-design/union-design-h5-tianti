# 对话框组件

## API

* Dialog.open(conf: DialogConf);
* Dialog.close(id?: string); 当打开多个dialog的时候，可以通过id来关闭指定的dialog，如果不传就关闭所有的dialog

## DialogConf 

| 参数          | 说明                   | 类型             | 默认值 |
| :------------ | :--------------------- | :--------------- | :----- |
| id            | 唯一标识，可以用来关闭 | string           | -      |
| title         | 标题                   | string           | -      |
| content       | 内容                   | ReactNode        | -      |
| actions       | 底部的btns             | DialogAction\[\] | -      |
| notice        | 通知类型按钮           | DialogAction     | -      |
| mask          | 是否显示蒙层           | boolean          | true   |
| maskClosable  | 点击蒙层是否允许关闭   | boolean          | true   |
| style         | 弹窗样式               | CSSProperties    | -      |
| className     | 弹窗样式               | string           | -      |
| maskStyle     | 蒙层样式               | CSSProperties    | -      |
| maskClassName | 蒙层样式               | string           | -      |

## DialogAction 

| 参数      | 说明             | 类型          | 默认值 |
| :-------- | :--------------- | :------------ | :----- |
| name      | 按钮上的文字     | string        | -      |
| style     | 样式             | CSSProperties | -      |
| className | 样式             | string        | -      |
| onClick   | 按钮的 点击 事件 | () => void    | -      |
