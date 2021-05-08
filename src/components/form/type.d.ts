import React from 'react';
import { RuleItem } from 'async-validator';

export type FormProps = {
  onSubmit: (errors, values) => (evt: React.MouseEvent<unknown>) => void;
  initialValues?: Values;
  name: string;
} & Omit<React.HTMLAttributes<HTMLFormElement>, 'onSubmit'>;

export type Errors = { [key: string]: (string|React.ReactNode)[] };
export type Values = { [key: string]: unknown };
export type FormContenxtProps = {
  values: Values;
  errors: Errors;
  name: string;
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
