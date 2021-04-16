import React from 'react';
import { Picker, Popup } from '../index';

const PickerDemo = () => {
  const options = [
    [
      {
        title: '杭州',
        key: '杭州',
        value: '杭州',
      },
      {
        title: '宁波',
        key: '宁波',
        value: '宁波',
      },
      {
        title: '温州',
        key: '温州',
        value: '温州',
      },
    ],
    [
      {
        title: '绍兴',
        key: '绍兴',
        value: '绍兴',
      },
      {
        title: '湖州',
        key: '湖州',
        value: '湖州',
      },
      {
        title: '嘉兴',
        key: '嘉兴',
        value: '嘉兴',
      },
      {
        title: '金华',
        key: '金华',
        value: '金华',
      },
      {
        title: '衢州',
        key: '衢州',
        value: '衢州',
      },
    ],
    [
      {
        title: 'A',
        key: 'A',
        value: 'A',
      },
      {
        title: 'B',
        key: 'B',
        value: 'B',
      },
      {
        title: 'C',
        key: 'C',
        value: 'C',
      },
    ],
  ];
  return (
    <div>
      <h1>单列</h1>
      <Popup
        header="请选择"
        visible
        position="bottom"
      >
        <Picker
          options={options}
          itemHeight={44}
          visibleItemCount={6}
          renderItem={(item) => item.value}
          defaultValue={['宁波', '金华', 'B']}
          onChange={(v) => {
            console.log('v', v);
          }}
        />
      </Popup>
      <h1>多列</h1>
    </div>
  );
};

export default PickerDemo;
