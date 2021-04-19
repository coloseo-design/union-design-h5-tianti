/* eslint-disable no-plusplus */
import React, { useEffect, useState } from 'react';
import Picker from './picker';
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

const Cascader: React.FC<CascaderProps> = (props: CascaderProps) => {
  const { options, value } = props;
  const [data, setData] = useState<Option[][]>([]);
  const [_value, setValue] = useState<string[]>([]);
  const onChange = (values: string[]) => {
    setValue(values);
    props.onChange && props.onChange(values);
  };

  useEffect(() => {
    const optionData: Option[][] = [];
    getOptions(options, _value, optionData);
    setData(optionData);
  }, [options, _value]);

  useEffect(() => {
    if (value) {
      setValue(value);
    }
  }, [value]);

  return (
    <Picker
      {...props}
      value={_value}
      onChange={onChange}
      options={data}
    />
  );
};

export default Cascader;
