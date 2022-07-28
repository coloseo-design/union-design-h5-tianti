/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { FormContenxtProps } from '../type';

const FormContext = React.createContext<FormContenxtProps>({
  name: '',
  onCollect: () => {},
  onError: () => {},
  onSubmit: () => {},
  errors: {},
  values: {},
  status: {},
  onStatus: () => {},
});

export default FormContext;
