import React from 'react';

export type FormProps = {
  onSubmit: (evt: React.FormEvent<HTMLFormElement>) => void;
  initialValues?: Values;
  name: string;
} & React.HTMLAttributes<HTMLFormElement>;

type Errors = { [key: string]: (string|React.ReactNode)[] };
type Values = { [key: string]: unknown };
export type FormContenxtProps = {
  values: Values;
  errors: Errors;
  name: string;
  onChange: (value: Values, error: Errors) => void;
};

export type FormItemProps = {
  name: string;
  valuePropName: string;
  required: boolean;
} & React.HTMLAttributes<HTMLDivElement>;
