import React, { CSSProperties } from 'react';

export interface BasePickerProps extends React.HTMLAttributes<HTMLDivElement> {
  // 是否显示加载状态
  loading?: boolean;
  // 单列选择时，选中项的索引
  value?: string[];
  // 默认选中项的索引
  defaultValue?: string[];
  // 选项高度，默认 px
  itemHeight?: number;
  // 可见的选项个数
  visibleItemCount?: number;
  // 快速滑动时惯性滚动的时长，单位 ms
  swipeDuration?: number;
  // 选项改变时触发
  onChange?: (item: Option, sectionIndex: number) => void;
  /* 用户自定义类前缀，默认uni-picker */
  prefixCls?: string;
  style?: CSSProperties;
  /** 选项 */
  options: Option[][];
  renderItem: (item: Option, position: Position) => React.ReactNode;
  getStartOffset: () => number;
}

export type Position = {
  row: number;
  column: number;
};

export interface Option {
  key: string;
  title: string;
  value: string;
  children?: Option[];
  parent?: Option;
}

export interface PickerState {
  value: (string)[];
}

export interface PickerColumnState {
  offsetY: number;
  duration: number;
}

export interface PickerColumnProps {
  index: number;
  data: Option[];
  onChange?: (item: Option) => void;
  itemHeight: number;
  valueKey?: string;
  // visibleItemCount?: number;
  prefixCls?: string;
  renderItem: (item: Option, position: Position) => React.ReactNode;
  sectionIndex: number;
  // 自定义起始点位置
  getStartOffset: () => number;
}

export interface PickerProps extends Omit<BasePickerProps, 'onChange'> {
  onChange: (values: string[]) => void;
}

export interface CascaderProps extends Omit<BasePickerProps, 'onChange'> {
  options: Option[],
  onChange: (values: string[]) => void;
}
