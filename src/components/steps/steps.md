---
category: Components
type: 通用
title: Steps
subtitle: 步骤条
---


## Steps 步骤条

## API

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
|type| 步骤条类型| 'card' ｜ 'browse' | 'card'| |
|className|步骤条类名| string |--| |
|current|指定当前步骤|number| 0| |
|status|指定当前步骤的状态|'success' ｜ 'error' ｜ 'info' ｜ undefined|--| |
|onChange|点击切换步骤时触发|(current) => void| --| |


## Steps.Step 

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
|title|标题| string ｜ ReactNode|--| |
|subTitle|子标题| string ｜ ReactNode | --| |
|description|步骤的详情描述| ReactNode|--| |
|status| 指定当前步骤的状态|'success' ｜ 'error' ｜ 'info' ｜ undefined|--| |
|src| 人员头像链接 或者姓名 | string | --| | |