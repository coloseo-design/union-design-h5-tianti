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
  const containerStyle = {
    width: 377,
    height: 548,
    backgroundColor: '#fafafa',
    padding: 10,
    overflow: 'scroll',
    borderRadius: 12,
    boxShadow: '#ebedf0 0 4px 12px',
  };
  return (
    <div style={containerStyle}>
      <Button onClick={() => setVisible(true)}>选择日期</Button>
      <DatePicker
        visible={visible}
        title="请选择"
        onCancel={() => setVisible(false)}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default TimePickerDemo;
