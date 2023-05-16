import dayjs from 'dayjs';
import React, { useState } from 'react';
import { Button, TimePicker } from '../index';

const TimePickerDemo = () => {
  const [visible, setVisible] = useState(false);
  // const [value, setValue] = useState(dayjs());
  const onChange = (v: dayjs.Dayjs) => {
    // setValue(v);
  };
  return (
    <div>
      <Button onClick={() => setVisible(true)}>选择时间</Button>
      <TimePicker
        visible={visible}
        title="请选择"
        onCancel={() => {
          console.log('cancel');
          setVisible(false);
        }}
        onChange={onChange}
        // value={value}
        defaultValue={dayjs('21:02:02', 'HH:mm:ss')}
        renderItem={(val: any) => {
          return <span>{val.value}</span>;
        }}
        onOk={() => {
          console.log('ok');
          setVisible(false);
        }}
      />
    </div>
  );
};

export default TimePickerDemo;
