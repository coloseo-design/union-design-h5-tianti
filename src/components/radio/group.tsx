import React, {
  useCallback, useContext, useEffect, useState,
} from 'react';
import omit from 'omit.js';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/context';
import Radio from './radio';
import {
  RadioGroupContextProps, RadioGroupOption, RadioGroupOptions, RadioGroupProps,
} from './type';

export const Context = React.createContext<RadioGroupContextProps>({});

const RadioGroup: React.FC<RadioGroupProps> = (props: RadioGroupProps) => {
  const {
    options = [], disabled = false,
    onChange,
    defaultValue,
    value: valueFromProps,
    prefixCls: customizedPrefixCls,
    className: customizedClassName,
    ...rest
  } = props;
  let { children } = props;
  const [value, setValue] = useState(valueFromProps || defaultValue || '');
  const { getPrefixCls } = useContext(ConfigContext);
  const onGroupChange = useCallback((_value: string) => {
    if (valueFromProps && valueFromProps === value) {
      onChange && onChange(_value);
      return;
    }
    setValue(_value);
  }, [onChange, value]);

  const contextValue = {
    onChange: onGroupChange,
    disabled,
    value,
  };

  useEffect(() => {
    if (valueFromProps) {
      setValue(valueFromProps);
    }
  }, [valueFromProps]);

  const formateOptions = (_options: RadioGroupOptions) => _options.map(
    (item: string | RadioGroupOption) => {
      if (typeof (item) === 'string') {
        return {
          label: item,
          value: item,
          disabled,
        };
      }
      return {
        ...item,
        disabled: disabled || item.disabled,
      };
    },
  );
  if (options.length > 0) {
    children = formateOptions(options).map((item) => (
      <Radio
        key={item.value}
        checked={value === item.value}
        disabled={item.disabled}
        value={item.value}
      >
        {item.label}
      </Radio>
    ));
  }
  const prefix = getPrefixCls('radio-group', customizedPrefixCls);
  const classnames = classNames(prefix, customizedClassName);
  const otherProps = omit(rest, ['children']);
  return (
    <Context.Provider value={contextValue}>
      <div {...otherProps} className={classnames}>
        {
          children
        }
      </div>
    </Context.Provider>
  );
};

export default RadioGroup;
