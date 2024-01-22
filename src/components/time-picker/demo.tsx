import dayjs from 'dayjs';
import React, { useState } from 'react';
import { Button, TimePicker } from '../index';

const TimePickerDemo = () => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState(dayjs('21:20:32', 'HH:mm:ss'));
  const onChange = (v: dayjs.Dayjs) => {
    console.log('==v', v);
    // setValue(v);
  };
  return (
    <div>
      <Button onClick={() => setVisible(true)}>选择时间</Button>
      <TimePicker
        visible={visible}
        title="请选择"
        onCancel={() => {
          setVisible(false);
        }}
        onChange={onChange}
        footerStyle={{ paddingBottom: 32 }}
        value={value}
        renderItem={(val: any) => {
          return <span>{val.value}</span>;
        }}
        onOk={() => {
          console.log('ok');
          setValue(dayjs('19:20:32', 'HH:mm:ss'))
          setVisible(false);
        }}
      />
    </div>
  );
};

export default TimePickerDemo;
