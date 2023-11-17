---
category: Components
type: 通用
title: Tree
subtitle: 树形结构
---


| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultSelectedKeys | 默认选中的值 | string[] | - |
| selectedKeys | 选中的值 | string[] | - |
| defaultOpenKeys | 默认展示的值 | string[] | - |
| openKeys | 展示开的值 | string[] | - |
| data | 展示的数据 | DataItem[] | - |
|multiple | 是否多选| boolean| true |
| onSelect | 选中时的回调 | (key: string, current: DataItem) => void | - |
| onChange | 改变时的回调 |  (keys: string[], currents: DataItem[]) => void | - |
| onOpenChange | 展开收起时的回调 |  (keys: string[], { isOpen: boolean, key: string}) => void | - |
| onTitleClick|点击title的回调|(current: DataItem, e: Event) => void|-|
| onIconClick|点击右侧icon的回调|(current: DataItem, e: Event) => void|-|

### DataItem
```
{
  key: string; // 唯一值
  title: string | ReactNode; // 文案
  icon?: string | ReactNode; // title前面的icon
  children?: DataItem[]; // 子级
  rightIcon?: string; // 右侧箭头icon 
}
```