import React from 'react';
import { GridLayout, Icon } from '../index';

const Demo = () => {
  const data = [
    {
      icon: 'add',
      text: <div style={{ margin: '12px 0px' }}>输入</div>,
    },
    {
      icon: 'apps',
      text: <div style={{ margin: '12px 0px' }}>输入</div>,
    },
    {
      icon: 'award',
      text: <div style={{ margin: '12px 0px' }}>输入</div>,
    },
    {
      icon: 'bell',
      text: <div style={{ margin: '12px 0px' }}>输入</div>,
    },
    {
      icon: 'camera',
      text: <div style={{ margin: '12px 0px' }}>输入</div>,
    },
    {
      icon: 'checkout',
      text: <div style={{ margin: '12px 0px' }}>输入</div>,
    },
    {
      icon: 'add',
      text: <div style={{ margin: '12px 0px' }}>输入</div>,
    },
    {
      icon: 'apps',
      text: <div style={{ margin: '12px 0px' }}>输入</div>,
    },
    {
      icon: 'award',
      text: <div style={{ margin: '12px 0px' }}>输入</div>,
    },
    {
      icon: 'bell',
      text: <div style={{ margin: '12px 0px' }}>输入</div>,
    },
  ];
  const renderItem = (item: unknown, idx: number) => (
    <div style={{ textAlign: 'center', marginBottom: 12 }}>
      <div
        style={{
          height: 46, width: 46, backgroundColor: 'gray', color: '#fff', fontSize: 24,
        }}
      >
        <Icon type={item.icon} />
      </div>
      {idx}
    </div>
  );

  return (
    <div>
      <h2>自定义展示样式</h2>
      <GridLayout
        data={data}
        columnNum={6}
        renderItem={renderItem}
      />
      <br />
      <h2>默认展示样式</h2>
      <GridLayout data={data} />
    </div>
  );
};

export default Demo;
