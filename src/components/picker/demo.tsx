import React, { useRef } from 'react';
import Picker from './index';
import ModalPicker from './modal-picker';

const PickerDemo = () => {
  const ref = useRef();
  console.log('ref', ref);
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
      <Picker
        options={options}
        itemHeight={44}
        visibleItemCount={6}
        renderItem={(item) => item.value}
        title="请选择出生地"
        defaultValue={['宁波', '金华', 'B']}
      />
      <h1>多列</h1>
      <ModalPicker />
    </div>
  );
};

export default PickerDemo;
