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

const getTimeValue = (input: Date) => {
  const time = dayjs(input);
  const hour = time.hour();
  const minute = time.minute();
  const second = time.second();
  const result = [`${hour}`.padStart(2, '0'), `${minute}`.padStart(2, '0'), `${second}`.padStart(2, '0')];
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
    position,
    renderItem,
    footerStyle,
  } = props;

  const [value, setValue] = useState<string[]>(getTimeValue(defaultValue || valueFromProps));
  const [showValue, setShowValue] = useState<string[]>(getTimeValue(defaultValue || valueFromProps));

  const [title, setTitle] = useState(propsTitle);
  const options = [getRange(0, 24), getRange(0, 60), getRange(0, 60)];
  const onChange = (item: Option, index: number) => {
    const tem = [...showValue];
    tem[index] = item.value;
    const newValue = options.map((v, idx) => {
      if (!tem[idx]) {
        return v[0] ? v[0].value : '';
      }
      return tem[idx];
    });
    const time = dayjs()
      .hour(parseInt(newValue[0], 10))
      .minute(parseInt(newValue[1], 10))
      .second(parseInt(newValue[2], 10));
    _onChange && _onChange(time);
    setShowValue(newValue);
    setTitle(time.format('HH时mm分ss秒'));
  };

  /**
   * 当value变化的时候，重新渲染值选择
   */

  useEffect(() => {
    if (valueFromProps) {
      const v = getTimeValue(valueFromProps);
      setValue(v);
      setTitle(dayjs(valueFromProps).format('HH时mm分ss秒'));
    }
  }, [valueFromProps]);

  useEffect(() => {
    setTitle(propsTitle);
  }, [propsTitle]);

  const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
    if (typeof valueFromProps === 'undefined') {
      setValue(value);
      setShowValue(value);
      value && setTitle(dayjs(value.join(':'), 'HH:mm:ss').format('HH时mm分ss秒'));
    } else {
      setTitle(dayjs(valueFromProps)?.format('HH时mm分ss秒'));
    }
    onCancel?.(e);
  };

  const handleOk = (e: React.MouseEvent<HTMLElement>) => {
    if (typeof valueFromProps === 'undefined') {
      setValue(showValue);
      setTitle(title);
    } else {
      setShowValue(getTimeValue(valueFromProps));
      setTitle(dayjs(valueFromProps)?.format('HH时mm分ss秒'));
    }
    onOk?.(e);
  };

  return (
    <Popup
      header={title}
      visible={visible}
      position={position || 'bottom'}
      onCancel={handleCancel}
      onOk={handleOk}
      footerStyle={footerStyle}
      parentScrollHidden
    >
      <Picker
        options={options}
        itemHeight={itemHeight || 52}
        visibleItemCount={visibleItemCount || 6}
        renderItem={renderItem || ((item) => item.value)}
        value={value}
        onChange={onChange}
      />
    </Popup>
  );
};

export default TimePicker;
