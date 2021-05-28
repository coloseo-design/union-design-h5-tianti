import React from 'react';
import { SwipeCell } from '../index';

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
      onOpen={() => console.log('open')}
      onClose={() => console.log('close')}
      left={[
        { content: 'Option1', style: { backgroundColor: 'green' } },
        { content: <div>Option2</div>, style: { backgroundColor: 'pink' } },
        { content: 'Option3', style: { backgroundColor: 'green' } },
        { content: 'Option4', style: { backgroundColor: 'green' } },
      ]}
    >
      <div style={{ height: 100, backgroundColor: 'red' }}>
        只有左边
      </div>
    </SwipeCell>
    <div style={{ height: 30 }} />
    <SwipeCell
      right={[
        { content: 'Option1', style: { backgroundColor: 'orange' } },
        { content: <div>Option2</div>, style: { backgroundColor: 'blue' } },
      ]}
    >
      <div style={{ height: 100, backgroundColor: 'red' }}>
        只有右边
      </div>
    </SwipeCell>
    <div style={{ height: 30 }} />
    <SwipeCell
      left={[
        { content: 'Option1', style: { backgroundColor: 'green' }, onPress: () => console.log('left') },
        { content: <div>Option2</div>, style: { backgroundColor: 'pink' } },
        { content: 'Option3', style: { backgroundColor: 'green' } },
        { content: 'Option4', style: { backgroundColor: 'green' } },
      ]}
      right={[
        { content: 'Option1', style: { backgroundColor: 'orange' } },
        { content: <div>Option2</div>, style: { backgroundColor: 'blue' }, onPress: () => console.log('right') },
      ]}
    >
      <div style={{ height: 100, backgroundColor: 'red' }}>
        两边都有
      </div>
    </SwipeCell>
  </div>
);

export default Demo;
