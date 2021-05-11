import React from 'react';
import { RuleItem } from 'async-validator';

export type FormProps = {
  onSubmit: (values: Values) => void;
  onSubmitFailed: (errors: Errors) => void;
  initialValues?: Values;
  forwardRef: React.LegacyRef<HTMLFormElement>
  name: string;
} & Omit<React.HTMLAttributes<HTMLFormElement>, 'onSubmit'>;

export type FormInstance = {
  reset: () => void;
  setFieldsValue: (value: Values) => void;
  submit: () => void;
};

export type Errors = { [key: string]: (string|React.ReactNode)[] };
export type Values = { [key: string]: unknown };
export type FormContenxtProps = {
  values: Values;
  errors: Errors;
  name: string;
  isValidating: boolean;
  onError: (error: Errors) => void;
  onCollect: (value: Values) => void;
  onSubmit: (evt: React.MouseEvent<HTMLDivElement>) => void;
};

export type FormItemProps = {
  name?: string;
  valuePropName?: string;
  trigger?: string;
  required?: boolean;
  label?: string | React.ReactNode,
  rules?: RuleItem[];
  getValueFromEvent?: (evt: unknown) => unknown;
} & React.HTMLAttributes<HTMLDivElement>;
