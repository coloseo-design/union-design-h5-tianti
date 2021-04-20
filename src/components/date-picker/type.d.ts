import React from 'react';
import { BasePickerProps } from '../picker/type';

export type TimePickerProps = Omit<BasePickerProps, 'options' | 'value' | 'defaultValue' | 'onChange' | 'renderItem'> & {
  /* 取消按钮文字 */
  cancelText?: React.ReactNode | string;
  /* 点击取消，X 事件 */
  onCancel?: (e: React.MouseEvent<HTMLElement>) => void;
  /* 点击确认按钮 */
  onOk?: (e: React.MouseEvent<HTMLElement>) => void;
  /* 点击确认按钮 */
  title?: React.ReactNode | string;
  /* 是否显示弹出层 */
  visible?: boolean;
  value?: dayjs.Dayjs | string | number;
  defaultValue?: Date | dayjs.Dayjs | string | number;
  onChange: (time: dayjs.Dayjs) => void;
  /** 年份的区间（默认50） */
  rangeOfYear?: number
}
