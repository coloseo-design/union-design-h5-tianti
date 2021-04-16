import React, { CSSProperties } from 'react';
import { ConfigConsumerProps } from '../config-provider/context';

export interface BasePickerProps extends ConfigConsumerProps {
  // 顶部栏标题
  title?: string;
  // 确认按钮文字
  confirmButtonText?: React.ReactNode;
  // 取消按钮文字
  cancelButtonText?: React.ReactNode;
  // 是否显示加载状态
  loading?: boolean;
  // 单列选择时，选中项的索引
  value?: string[];
  // 默认选中项的索引
  defaultValue?: string[];
  // 选项高度，默认 px
  itemHeight?: number;
  // 可见的选项个数
  visibleItemCount: number;
  // 快速滑动时惯性滚动的时长，单位 ms
  swipeDuration?: number;
  // 点击完成按钮时触发
  onConfirm?: () => void;
  // 点击取消按钮时触发
  onCancel?: () => void;
  // 选项改变时触发
  onChange?: () => void;
  /* 用户自定义类前缀，默认uni-picker */
  prefixCls?: string;
  style?: CSSProperties;
  /** 选项 */
  options: Option[][];
  renderItem: (item: Option, position: Position) => React.ReactNode;
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
}

export interface PickerState {
  value: string[];
}

export interface PickerColumnState {
  offsetY: number;
  duration: number;
}

export interface PickerColumnProps extends ConfigConsumerProps {
  index: number;
  data: Option[];
  onChange?: (item: Option) => void;
  itemHeight: number;
  valueKey?: string;
  visibleItemCount: number;
  prefixCls?: string;
  renderItem: (item: Option, position: Position) => React.ReactNode;
  sectionIndex: number;
}
