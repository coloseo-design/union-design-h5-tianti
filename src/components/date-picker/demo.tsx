import dayjs from 'dayjs';
import React, { useState } from 'react';
import { Button, DatePicker } from '../index';
import './styles/index';

const TimePickerDemo = () => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState(dayjs());
  const onChange = (v: dayjs.Dayjs) => {
    setValue(v);
  };

  return (
    <div>
      <Button onClick={() => setVisible(true)}>选择日期</Button>
      <DatePicker
        visible={visible}
        title="请选择"
        onCancel={() => setVisible(false)}
        onOk={() => {
          setVisible(false);
        }}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default TimePickerDemo;
