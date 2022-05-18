import React from 'react';

export interface CheckboxGroupState {
  /** 选中 */
  value?: string[];
}

export interface CheckboxGroupContextProps {
  onChange?: (value: string) => void;
  disabled?: boolean;
  value?: string[],
}

export type CheckboxGroupOption = {
  /* 选项名称 */
  label: React.ReactNode;
  /** 选项的值 */
  value: string;
  /** 是否禁止选择 */
  disabled?: boolean;
};
export type CheckboxGroupOptions = string[] | CheckboxGroupOption[];

export interface CheckboxGroupProps extends React.AnchorHTMLAttributes<HTMLDivElement> {
  /** 选项 */
  options?: CheckboxGroupOptions;
  /** 默认选中 */
  defaultValue?: string[];
  /** 选中 */
  value?: string[];
  /** 整组失效 */
  disabled?: boolean;
  /** 选项切换事件 */
  onChange?: (checkedValues: string[]) => void;
  /** 自定义prefix */
  prefixCls?: string;
}

export interface CheckboxProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 自定义prefix */
  prefixCls?: string;
  /** 是否禁止选择 */
  disabled?: boolean;
  /** 是否选中 */
  checked?: boolean;
  /** 选项选中的值 */
  value?: string;
  /** onchange */
  onChange?: (checked: boolean) => void;
}

export interface CheckboxState {
  /** 是否选中 */
  checked: boolean;
}
