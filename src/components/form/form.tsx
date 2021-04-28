import classNames from 'classnames';
import React, { useContext, useState } from 'react';
import { ConfigContext } from '../config-provider/context';
import { FormContenxtProps, FormProps } from './type';
import FormContext from './utils/form-context';

const Form: React.FC<FormProps> = (props: FormProps) => {
  const {
    onSubmit,
    className,
    children,
    name = '',
    initialValues = {},
  } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  const prefix = getPrefixCls('form');
  const formClassName = classNames(prefix, className);
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const contextValue: FormContenxtProps = {
    errors,
    values,
    name,
    onChange: (value, error) => {
      Object.assign(values, value);
      Object.assign(errors, error);
      setValues({ ...values });
      setErrors({ ...errors });
    },
  };

  return (
    <form onSubmit={onSubmit} className={formClassName}>
      <FormContext.Provider value={contextValue}>
        {children}
      </FormContext.Provider>
    </form>
  );
};

export default Form;
