/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import Popup from '../popup';
import { TimePickerProps } from './type';
import Picker from '../picker/picker-base';
import { Option } from '../picker/type';

const getRange = (from: number, to: number) => {
  const result: Option[] = [];
  // eslint-disable-next-line no-plusplus
  for (; from < to; from++) {
    const fromString = from >= 10 ? `${from}` : `0${from}`;
    result.push({
      title: fromString,
      key: fromString,
      value: fromString,
    } as Option);
  }
  return result;
};

const monthCount = 12;

const getTimeValue = (input: Date) => {
  const time = dayjs(input);
  const year = time.year();
  const month = time.month() + 1;
  const day = time.date();
  const result = [`${year}`, `${month > 10 ? month : `0${month}`}`, `${day > 10 ? day : `0${day}`}`];
  return result;
};

const TimePicker: React.FC<TimePickerProps> = (props: TimePickerProps) => {
  const {
    title: propsTitle,
    visible,
    onChange: _onChange,
    defaultValue,
    value: valueFromProps,
    visibleItemCount,
    itemHeight,
    onCancel,
    onOk,
    rangeOfYear = 50,
    footerStyle,
  } = props;

  const [value, setValue] = useState<string[]>(getTimeValue(defaultValue || valueFromProps)); // 实际的值
  const [showValue, setShowValue] = useState<string[]>(getTimeValue(defaultValue || valueFromProps)); // 列表展示的值

  const [title, setTitle] = useState(propsTitle); // 展示的title

  const yearStart = dayjs().year() - rangeOfYear;
  const yearEnd = dayjs().year() + rangeOfYear;
  // 获取对应的月份有多少天
  const currentYear = parseInt(showValue[0], 10);
  const currentMonth = parseInt(showValue[1], 10) - 1;
  const dayInMonth = dayjs().year(currentYear).month(currentMonth).daysInMonth();
  // 显示列的范围
  const options = [
    getRange(yearStart, yearEnd),
    getRange(1, 1 + monthCount),
    getRange(1, 1 + dayInMonth),
  ];

  const onChange = (item: Option, index: number) => {
    const temp = [...showValue];
    temp[index] = item.value;
    const newValue = options.map((v, idx) => {
      if (!temp[idx]) {
        return v[0] ? v[0].value : '';
      }
      return temp[idx];
    });
    const time = dayjs()
      .year(parseInt(newValue[0], 10))
      .month(parseInt(newValue[1], 10) - 1)
      .date(parseInt(newValue[2], 10));
    _onChange && _onChange(time);
    setShowValue(newValue);
    setTitle(time.format('YYYY年MM月DD日'));
  };

  /**
   * 当value变化的时候，重新渲染值选择
   */

  useEffect(() => {
    const v = getTimeValue(valueFromProps);
    setValue(v);
    setShowValue(v);
    if (valueFromProps) setTitle(valueFromProps?.format('YYYY年MM月DD日'));
  }, [valueFromProps]);

  useEffect(() => {
    setTitle(propsTitle);
  }, [propsTitle]);

  const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
    if (typeof valueFromProps === 'undefined') {
      setValue(value);
      setShowValue(value);
      value && value.length > 0 && setTitle(`${value[0]}年${value[1]}月${value[2]}日`);
    } else {
      setTitle(valueFromProps?.format('YYYY年MM月DD日'));
    }
    onCancel?.(e);
  };

  const handleOk = (e: React.MouseEvent<HTMLElement>) => {
    if (typeof valueFromProps === 'undefined') {
      setValue(showValue);
      setTitle(title);
    } else {
      setShowValue(getTimeValue(valueFromProps));
      setTitle(valueFromProps?.format('YYYY年MM月DD日'));
    }
    onOk?.(e);
  };

  return (
    <Popup
      header={title}
      visible={visible}
      position="bottom"
      onCancel={handleCancel}
      onOk={handleOk}
      footerStyle={footerStyle}
      parentScrollHidden
    >
      <Picker
        options={options}
        itemHeight={itemHeight || 52}
        visibleItemCount={visibleItemCount || 6}
        renderItem={(item) => item.value}
        value={value}
        onChange={onChange}
      />
    </Popup>
  );
};

export default TimePicker;
