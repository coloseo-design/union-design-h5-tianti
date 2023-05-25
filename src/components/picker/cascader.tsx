/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import React, { useEffect, useState } from 'react';
import Picker from './picker-base';
import { CascaderProps, Option } from './type';
import {
  getChildren, getParent, getValue, getOptions, getCascaderSelections,
} from './utils';

const Cascader: React.FC<CascaderProps> = (props: CascaderProps) => {
  const {
    options,
    value,
    defaultValue,
    onChange: onchangeOfProps,
  } = props;
  const [_value, setValue] = useState<string[]>(defaultValue || []);
  useEffect(() => {
    if (value) {
      setValue(value);
    }
  }, [value]);

  const optionData: Option[][] = [];
  getOptions(options, [..._value], optionData);
  const onChange = (item: Option) => {
    const currentValue = item.value;
    const v = getValue(options, currentValue);
    const left = getParent(v);
    const right = getChildren(v);
    const newValue: string[] = [...left, v?.value, ...right] as string[];
    setValue(newValue);
    const extra = getCascaderSelections(newValue, options);
    onchangeOfProps && onchangeOfProps(newValue, extra);
  };
  return (
    <Picker
      {...props}
      value={_value}
      onChange={onChange}
      options={optionData}
    />
  );
};

export default Cascader;
