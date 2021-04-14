import React, { useState } from 'react';
import Button from '../button';
import Overlay from './index';

const Demo = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div style={{ padding: 40 }}>
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
