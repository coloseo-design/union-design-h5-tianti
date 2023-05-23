import React from 'react';
import { SwipeCell, Icon } from '../index';
import './styles/index';

const Demo = () => (
  <div>
    <SwipeCell
      onOpen={() => console.log('open')}
      onClose={() => console.log('close')}
      left={[
        { content: 'Option1', style: { backgroundColor: 'green' } },
        { content: <div>Option2</div>, style: { backgroundColor: 'pink' }, onPress: () => {
          console.log('===presss');
        } },
        { content: 'Option3', style: { backgroundColor: 'green' } },
        { content: 'Option4', style: { backgroundColor: 'green' } },
      ]}
    >
      <div style={{ height: 100, backgroundColor: '#fff', border: '1px solid #e5e5e5' }}>
        只有左边
      </div>
    </SwipeCell>
    <div style={{ height: 30 }} />
    <SwipeCell
      right={[
        // { content: 'Option1', style: { backgroundColor: 'orange' } },
        // { content: <div>Option2</div>, style: { backgroundColor: 'blue' } },
        {
          content: (
            <div
              style={{ backgroundColor: 'pink', width: '100px' }}
              
            >
              <Icon type="delete" />
            </div>
          ),
          onPress: (e) => {
            console.log('==pink click', e)
          }
        }
      ]}
    >
      <div style={{ height: 100, backgroundColor: '#fff', border: '1px solid #e5e5e5' }}>
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
      <div style={{ height: 100, backgroundColor: '#fff', border: '1px solid #e5e5e5' }}>
        两边都有
      </div>
    </SwipeCell>
  </div>
);

export default Demo;
