---
category: Components
type: 通用
title: Calendar
subtitle: 日历
---
## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 日历选中日期 | string,Dayjs | dayjs() |
| mode| 日历模式（周模式， 月模式）|'week', 'month'|'month'|
|onChange|日历日期变化回调(左右滑动切换上一周下一周，上个月，下个月)|(date: Dayjs) => void|--|
|onSelect|点击日期回调|(date: Dayjs) => void|--|
|actionRightHeader|日历header右上角自定义|string,ReactNode|--|
|actionLeftHeader|日历header左上角自定义|string,ReactNode|--|
|selectedBgColor|选中日期背景色|string|#646566|
|dateCellRender|在每个单元格里面加内容|(date: Dayjs) => ReactNode|--|
|dateFullCellRender|自定义渲染日期单元格，返回内容覆盖单元格|(date: Dayjs) => ReactNode|--|