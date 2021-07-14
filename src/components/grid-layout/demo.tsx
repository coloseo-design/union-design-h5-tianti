import React from 'react';
import { GridLayout, Icon } from '../index';
import './styles/index';
import '../icon/styles/index';

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
