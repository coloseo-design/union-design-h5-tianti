import React from 'react';
import SwipeCell from './index';

const Demo = () => (
  <div
    style={{
      width: 414,
      height: 600,
      margin: 40,
      padding: 10,
      backgroundColor: '#F5F6F6',
      border: '1px solid black',
    }}
  >
    <SwipeCell
      left={[
        { content: 'Option1' },
        { content: <div>Option2</div> },
      ]}
      right={[
        { content: 'Option1' },
        { content: <div>Option2</div> },
      ]}
    >
      <div style={{ height: 100, backgroundColor: 'red' }}>
        test
      </div>
    </SwipeCell>
  </div>
);

export default Demo;
