/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';

export type RowProps = {
  /** 对齐方式 */
  align?: 'top' | 'middle' | 'bottom';
  /** 间距 */
  gutter?: number | number[] | object;
  /** 水平排列方式 */
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between';
} & React.HTMLAttributes<HTMLDivElement>;

export interface BaseColProps {
  /* 内容所占的栅格数 */
  span: number;
  /** 栅格左右的占格数 */
  offset?: number;
  /** 栅格顺序 */
  order?: number;
}

export interface ResponsiveColProps extends BaseColProps {
  xs?: number | ColProps;
  /* 屏幕 ≥ 576px 响应式栅格 */
  sm?: number | ColProps;
  /* 屏幕 ≥ 768px 响应式栅格 */
  md?: number | ColProps;
  /* 屏幕 ≥ 992px 响应式栅格 */
  lg?: number | ColProps;
  /* 屏幕 ≥ 1200px 响应式栅格 */
  xl?: number | ColProps;
  /* 屏幕 ≥ 1600px 响应式栅格 */
  xxl?: number | ColProps;
}

export type ColProps = React.HTMLAttributes<HTMLDivElement> & ResponsiveColProps;
