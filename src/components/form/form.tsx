/* eslint-disable max-len */
import classNames from 'classnames';
import React, { useContext, useState } from 'react';
import { ConfigContext } from '../config-provider/context';
import FormItem from './form-item';
import {
  Errors, FormContenxtProps, FormInstance, FormProps, Values,
} from './type';
import FormContext from './utils/form-context';

const Form: React.FC<FormProps> = (props: FormProps) => {
  const {
    onSubmit,
    onSubmitFailed,
    className,
    children,
    name = '',
    initialValues = {},
    forwardRef,
    ...rest
  } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  const prefix = getPrefixCls('form');
  const formClassName = classNames(prefix, className);
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [isValidating, setIsValidating] = useState(false);

  const setFieldsValue = (value: Values) => {
    Object.assign(values, value);
    setValues({ ...values });
  };

  const reset = () => {
    setValues({ ...initialValues });
  };

  const submit = () => {
    setIsValidating(true);
    const hasError = Object.keys(errors).some((key) => errors[key].length > 0);
    if (hasError) {
      onSubmitFailed(errors);
    } else {
      onSubmit(values);
    }
  };

  const contextValue: FormContenxtProps = {
    errors,
    values,
    name,
    isValidating,
    onCollect: (value) => {
      Object.assign(values, value);
      setValues({ ...values });
    },
    onError: (error) => {
      Object.assign(errors, error);
      setErrors({ ...errors });
    },
    onSubmit: (evt) => {
      evt.preventDefault();
      submit();
    },
  };

  const current: FormInstance = {
    reset,
    setFieldsValue,
    submit,
  };

  return (
    <form
      {...rest}
      className={formClassName}
      ref={() => {
        if (forwardRef) {
          Object.assign(forwardRef, {
            current,
          });
        }
      }}
    >
      <FormContext.Provider value={contextValue}>
        {children}
      </FormContext.Provider>
    </form>
  );
};

const FormFC = React.forwardRef<FormInstance | undefined, Omit<FormProps, 'forwardRef'>>((props, ref) => <Form forwardRef={ref} {...props} />);
const ComposedFormFC = FormFC as typeof FormFC & {
  FormItem: typeof FormItem;
};

ComposedFormFC.FormItem = FormItem;
export default ComposedFormFC;
