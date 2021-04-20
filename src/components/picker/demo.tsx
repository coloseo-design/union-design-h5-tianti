import React, { useEffect, useState } from 'react';
import { Button, Picker, Popup } from '../index';

const PickerDemo = () => {
  useEffect(() => {
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
    setTimeout(() => {
      setOptions(options);
      setValue(['宁波', '金华', 'B']);
    }, 300);
  }, []);

  const cascaderOptions = [
    {
      title: '0',
      key: '0',
      value: '0',
      children: [
        {
          title: '0-0',
          key: '0-0',
          value: '0-0',
        },
        {
          title: '0-1',
          key: '0-1',
          value: '0-1',
        },
        {
          title: '0-2',
          key: '0-2',
          value: '0-2',
        },
      ],
    },
    {
      title: '1',
      key: '1',
      value: '1',
      children: [
        {
          title: '1-0',
          key: '1-0',
          value: '1-0',
        },
        {
          title: '1-1',
          key: '1-1',
          value: '1-1',
        },
        {
          title: '1-2',
          key: '1-2',
          value: '1-2',
        },
      ],
    },
    {
      title: '2',
      key: '2',
      value: '2',
      children: [
        {
          title: '2-0',
          key: '2-0',
          value: '2-0',
        },
        {
          title: '2-1',
          key: '2-1',
          value: '2-1',
        },
        {
          title: '2-2',
          key: '2-2',
          value: '2-2',
        },
      ],
    },
  ];
  const [options, setOptions] = useState([]);
  const [value, setValue] = useState([]);
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  return (
    <div>
      <Button onClick={() => setVisible1(true)}>多列</Button>
      <Button onClick={() => setVisible2(true)}>级联</Button>
      <Button onClick={() => setVisible3(true)}>单列</Button>
      <Popup
        header="请选择"
        visible={visible3}
        position="bottom"
        onCancel={() => setVisible3(false)}
      >
        <Picker
          options={[
            [{
              title: 'A',
              key: 'A',
              value: 'A',
            },
            {
              title: 'B',
              key: 'B',
              value: 'B',
            }],
          ]}
          itemHeight={44}
          visibleItemCount={6}
          renderItem={(item) => item.value}
          onChange={(v) => {
            console.log('v', v);
          }}
          value={value}
        />
      </Popup>
      <Popup
        header="请选择"
        visible={visible1}
        position="bottom"
        onCancel={() => setVisible1(false)}
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
          value={value}
        />
      </Popup>
      <h1>多列</h1>
      <Popup
        header="请选择"
        visible={visible2}
        position="bottom"
        onCancel={() => setVisible2(false)}
      >
        <Picker.Cascader
          options={cascaderOptions}
          itemHeight={44}
          visibleItemCount={6}
          renderItem={(item) => item.value}
          defaultValue={['1', '1-1']}
          onChange={(v) => {
            console.log('v', v);
          }}
          // value={value}
        />
      </Popup>
    </div>
  );
};

export default PickerDemo;
