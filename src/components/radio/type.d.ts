import React from 'react';
import { ConfigConsumerProps } from '../config-provider';

export interface RadioGroupState {
  /** 选中 */
  value?: string;
}

export interface RadioGroupContextProps {
  onChange?: (value: string) => void;
  disabled?: boolean;
  value?: string,
}

export type RadioGroupOption = {
  /* 选项名称 */
  label: React.ReactNode;
  /** 选项的值 */
  value: string;
  /** 是否禁止选择 */
  disabled?: boolean;
};
export type RadioGroupOptions = string[] | RadioGroupOption[];

export interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 自定义prefix */
  prefixCls?: string;
  /** 选项 */
  options?: RadioGroupOptions;
  /** 默认选中 */
  defaultValue?: string;
  /** 选中 */
  value?: string;
  /** 整组失效 */
  disabled?: boolean;
  /** 选项切换事件 */
  onChange?: (checkedValue: string) => void;
}

export interface RadioProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 自定义prefix */
  prefixCls?: string;
  /** 是否禁止选择 */
  disabled?: boolean;
  /** 是否选中 */
  checked?: boolean;
  /** 默认是否选中 */
  defaultChecked?: boolean;
  /** 选项选中的值 */
  value?: string;
  /** onchange */
  onChange?: (checked: boolean) => void;
  radioGroupContext?: CheckboxGroupContextProps;
}

export interface RadioState {
  /** 是否选中 */
  checked: boolean;
}
