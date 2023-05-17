import omit from 'omit.js';
import classnames from 'classnames';
import React, { useContext, useEffect, useState } from 'react';
import Checkbox from './checkbox';
import {
  CheckboxGroupProps,
  CheckboxGroupContextProps,
  CheckboxGroupOption,
  CheckboxGroupOptions,
} from './type';
import { ConfigContext } from '../config-provider/context';

export const Context = React.createContext<CheckboxGroupContextProps>({});

const CheckboxGroup: React.FC<CheckboxGroupProps> = (props: CheckboxGroupProps) => {
  const {
    options = [],
    disabled = false,
    onChange,
    value: valueFromProps,
    prefixCls: customizedPrefixCls,
    className,
    defaultValue,
    ...rest
  } = props;
  let { children } = props;
  const [value, setValue] = useState<Array<string>>(valueFromProps || defaultValue || []);

  useEffect(() => {
    if (valueFromProps) {
      setValue(valueFromProps);
    }
  }, [valueFromProps]);

  const { getPrefixCls } = useContext(ConfigContext);

  const onGroupChange = (input: string) => {
    const index = value.indexOf(input);
    if (index >= 0) {
      value.splice(index, 1);
    } else {
      value.push(input);
    }
    const newState = [...value];
    if (value && value === valueFromProps) {
      onChange && onChange(newState);
      return;
    }
    setValue(newState);
    onChange && onChange(newState);
  };

  const contextValue = {
    onChange: onGroupChange,
    disabled,
    value,
  };
  const formateOptions = (_options: CheckboxGroupOptions) => _options.map(
    (item: string | CheckboxGroupOption) => {
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
    children = formateOptions(options).map((item: CheckboxGroupOption) => (
      <Checkbox
        key={item.value}
        checked={value.indexOf(item.value) >= 0}
        disabled={item.disabled}
        value={item.value}
      >
        {item.label}
      </Checkbox>
    ));
  }
  const prefix = getPrefixCls('checkbox-group', customizedPrefixCls);
  const classNames = classnames(prefix, className);
  const otherProps = omit(rest, ['children']);
  return (
    <Context.Provider value={contextValue}>
      <div {...otherProps} className={classNames}>
        {
          children
        }
      </div>
    </Context.Provider>
  );
};

export default CheckboxGroup;
