import classNames from 'classnames';
import React, { useCallback, useContext, useEffect } from 'react';
import { Icon } from '../index';
import { ConfigContext } from '../config-provider/context';
import { FormItemProps } from './type';
import FormContext from './utils/form-context';
import { defaultGetValueFromEvent } from './utils/name';
import { validateRules } from './utils/error';

const FormItem: React.FC<FormItemProps> = (props: FormItemProps) => {
  const { getPrefixCls } = useContext(ConfigContext);
  const prefix = getPrefixCls('form-item');
  const {
    name,
    valuePropName = 'value',
    trigger = 'onChange',
    required,
    className,
    children,
    label,
    rules = [],
    getValueFromEvent,
    ...rest
  } = props;
  const {
    values,
    errors,
    onCollect,
    onError,
    onSubmit,
    status,
    onStatus,
  } = useContext(FormContext);

  const isRequired = useCallback(() => {
    if (required !== undefined) {
      return required;
    }
    return rules?.some((rule) => rule.required);
  }, [required, rules]);

  const onFormItemChange = (...evts: unknown[]) => {
    let newValue;
    if (getValueFromEvent) {
      newValue = getValueFromEvent(evts);
    } else {
      newValue = defaultGetValueFromEvent(valuePropName, ...evts);
    }
    if (name) {
      const newValues = { ...values, [name]: newValue };
      validateRules(name, newValue, rules, true, {})
        .then((e) => {
          onStatus(name, false);
          onError({
            ...errors,
            [name]: e,
          });
        })
        .catch((e) => {
          // 更新错误信息
          onStatus(name, true);
          onError({
            ...errors,
            [name]: e,
          });
        });
      onCollect(newValues);
    }
  };

  useEffect(() => {
    if (name) {
      const newValue = values[name] as string;
      const newValues = { ...values, [name]: values[name] };
      onStatus(name, false);
      validateRules(name, newValue, rules, true, {})
        .then((e) => {
          onError({
            ...errors,
            [name]: e,
          });
        })
        .catch((e) => {
          // 更新错误信息
          onError({
            ...errors,
            [name]: e,
          });
        });
      onCollect(newValues);
    }
  }, []); // 组件mont收集错误信息

  useEffect(() => {
    if (name) {
      const newValue = values[name] as string;
      onStatus(name, false);
      validateRules(name, newValue, rules, true, {})
        .then((e) => {
          onError({
            ...errors,
            [name]: e,
          });
        })
        .catch((e) => {
          // 更新错误信息
          onError({
            ...errors,
            [name]: e,
          });
        });
    }
    return () => {
      if (name) {
        onError({
          [name]: [],
        });
      }
    };
  }, [name]); // 组件被卸载收集错误信息情况

  useEffect(() => {
    if (name) {
      const newValue = values[name] as string;
      validateRules(name, newValue, rules, true, {})
        .then((e) => {
          onError({
            ...errors,
            [name]: e,
          });
        })
        .catch((e) => {
          // 更新错误信息
          onError({
            ...errors,
            [name]: e,
          });
        });
    }
  }, [status]); // 组件错误状态更新

  let error: (string | React.ReactNode)[] = [];
  if (name && errors[name]) {
    error = errors[name];
  }

  const hasError = error && error.length > 0 && status[name || ''];

  const extProps = {
    status: hasError ? 'error' : undefined,
    [trigger]: onFormItemChange,
    [valuePropName]: name ? values[name] : '',
  };

  const transformedChildren = React.Children.map(
    children,
    (element) => {
      if (!React.isValidElement(element)) return element;
      if (element.props && element.props.htmlType) {
        Object.assign(extProps, {
          onClick: onSubmit,
        });
      }
      if (element.props && element.props[trigger]) {
        Object.assign(extProps, {
          [trigger]: (...args: unknown[]) => {
            element.props[trigger](...args);
            onFormItemChange(...args);
          },
        });
      }
      return React.cloneElement(element, extProps);
    },
  );
  const formItemClassName = classNames(prefix, {
    [`${prefix}-error`]: hasError,
  }, className);
  const labelClassName = classNames(`${prefix}-label`, {
    [`${prefix}-label-required`]: isRequired(),
  });
  const errorLabelClassName = classNames(`${prefix}-error`);
  return (
    <div {...rest} className={formItemClassName}>
      { label && <div className={labelClassName}>{label}</div> }
      {transformedChildren}
      {hasError ? (
        <div className={errorLabelClassName}>
          <Icon type="close1-surface" />
          {error}
        </div>
      ) : null}
    </div>
  );
};

export default FormItem;
