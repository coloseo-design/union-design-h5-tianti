import classNames from 'classnames';
import React, { useContext } from 'react';
import { ConfigContext } from '../config-provider/context';
import { FormItemProps } from './type';
import FormContext from './utils/form-context';

const FormItem: React.FC<FormItemProps> = (props: FormItemProps) => {
  const { getPrefixCls } = useContext(ConfigContext);
  const prefix = getPrefixCls('form-item');
  const {
    name,
    valuePropName = 'onChange',
    required = false,
    className,
    children,
  } = props;
  const formItemClassName = classNames(prefix, {
    [`${prefix}-required`]: required,
  }, className);
  const { values, errors, onChange } = useContext(FormContext);
  const value = values[name];
  const error = errors[name];
  const transformedChildren = React.Children.map(children, (element) => {

  });
  return (
    <div className={formItemClassName}>
      {transformedChildren}
    </div>
  );
};

export default FormItem;
