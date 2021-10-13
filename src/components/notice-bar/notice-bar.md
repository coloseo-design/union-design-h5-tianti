---
category: Components
type: 反馈
title: NoticeBar
subtitle: 通知栏
---

## API

 NoticeBar.open(conf: NoticeBarConf);
NoticeBar.success(conf: NoticeBarConf);
NoticeBar.error(conf: NoticeBarConf);
NoticeBar.warning(conf: NoticeBarConf);
NoticeBar.supplement(conf: NoticeBarConf);
NoticeBar.grey(conf: NoticeBarConf);
NoticeBar.close(id?: string); 当打开多个NoticeBar的时候，可以通过id来关闭指定的NoticeBar，如果不传就关闭所有的NoticeBar

### NoticeBarConf 

| 参数             | 说明                                | 类型                                                                  | 默认值 |
| :--------------- | :---------------------------------- | :-------------------------------------------------------------------- | :----- |
| id               | 通知栏唯一标识 用于关闭指定的通知栏 | string                                                                | -      |
| leftIcon         | 左边图标                            | ReactNode                                                             | -      |
| rightIcon        | 右边图标                            | ReactNode                                                             | -      |
| text             | 通知栏内容                          | string                                                                | -      |
| type             | 通知栏类型                          | 'base' \| 'grey' \| 'success' \| 'error' \| 'warning' \| 'supplement' | 'base' |
| multiline        | 是否显示多行文本                    | boolean                                                               | false  |
| style            | 样式                                | CSSProperties                                                         | -      |
| className        | 样式                                | string                                                                | -      |
| textOnClick      | 文本点击事件                        | () => void                                                            | -      |
| leftIconOnClick  | 左边图标点击事件                    | () => void                                                            | -      |
| rightIconOnClick | 右边图标点击事件                    | () => void                                                            | -      |
