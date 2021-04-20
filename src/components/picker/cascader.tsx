/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import React, { useEffect, useState } from 'react';
import Picker from './picker-base';
import { CascaderProps, Option } from './type';

const getOptions = (
  options: Option[],
  keys: string[],
  result: Option[][],
) => {
  options.length > 0 && result.push(options);
  const key = keys.shift();
  for (let index = 0; index < options.length; index++) {
    const item = options[index];
    if (key && item.key === key) {
      getOptions(item.children || [], keys, result);
    }
    if (!key && index === 0) {
      getOptions(item.children || [], keys, result);
    }
  }
};

const getValue = (
  options: Option[],
  key: string,
  parent?: Option,
): Option | undefined => {
  for (let index = 0; index < options.length; index++) {
    const item = options[index];
    if (parent) {
      item.parent = parent;
    }
    if (item.value === key) {
      return item;
    }
    if (item.children) {
      const r: Option | undefined = getValue(item.children || [], key, item);
      if (r) {
        return r;
      }
    }
  }
  return undefined;
};

const getParent = (option: Option | undefined) => {
  const parents = [];
  while (option && option.parent) {
    parents.push(option.parent.value);
    option = option.parent;
  }
  return parents;
};

const getChildren = (option: Option | undefined) => {
  const children = [];
  while (option && option.children && option.children.length) {
    children.push(option.children[0].value);
    // eslint-disable-next-line prefer-destructuring
    option = option.children[0];
  }
  return children;
};

const Cascader: React.FC<CascaderProps> = (props: CascaderProps) => {
  const { options, value, defaultValue } = props;
  const [_value, setValue] = useState<string[]>(defaultValue || []);
  const onChange = (item: Option) => {
    const currentValue = item.value;
    const v = getValue(options, currentValue);
    const left = getParent(v);
    const right = getChildren(v);
    const newValue: string[] = [...left, v?.value, ...right] as string[];
    setValue(newValue);
    props.onChange && props.onChange(newValue);
  };

  useEffect(() => {
    if (value) {
      setValue(value);
    }
  }, [value]);

  const optionData: Option[][] = [];
  getOptions(options, [..._value], optionData);
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
