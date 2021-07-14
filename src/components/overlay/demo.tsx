import React, { useState } from 'react';
import { Button, Overlay } from '../index';
import './styles/index';
import '../button/styles/index';

const containerStyle = {
  width: 377,
  height: 548,
  backgroundColor: '#fafafa',
  padding: 10,
  overflow: 'scroll',
  borderRadius: 12,
  boxShadow: '#ebedf0 0 4px 12px',
};
const Demo = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div style={containerStyle}>
      <Button onClick={() => setVisible(true)}>打开 遮罩</Button>
      <Overlay visible={visible} onClick={() => setVisible(false)}>
        <div style={{
          width: 200, height: 200, backgroundColor: 'lightcoral',
        }}
        >
          children
        </div>
      </Overlay>
    </div>
  );
};

export default Demo;
