import React from 'react';
import Tabbar from './index';
import Icon from '../icon';

const Demo = () => (
  <div
    style={{
      margin: 40,
      width: 414,
      height: 600,
      border: '1px solid black',
      position: 'relative',
    }}
  >
    <Tabbar position="bottom">
      <Tabbar.Item
        dot
        key="选项1"
        title="选项1"
        icon="approval"
        selectedStyle={{ color: 'rgb(81, 159, 240)' }}
      >
        <div
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'yellow',
          }}
        >
          选项1 页面
        </div>
      </Tabbar.Item>
      <Tabbar.Item
        badge={36}
        key="选项2"
        title="选项2"
        icon={<Icon type="calendar" />}
        selectedStyle={{ color: 'rgb(81, 159, 240)' }}
      >
        <div
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'grey',
          }}
        >
          选项2 页面
        </div>
      </Tabbar.Item>
      <Tabbar.Item
        key="选项3"
        title="选项3"
        icon="service"
        selectedStyle={{ color: 'rgb(81, 159, 240)' }}
      >
        <div
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'green',
          }}
        >
          选项3 页面
        </div>
      </Tabbar.Item>
    </Tabbar>
  </div>
);

export default Demo;
