import React from 'react';
import { Tabbar, Icon } from '../index';

const containerStyle = {
  width: 377,
  height: 548,
  backgroundColor: '#fafafa',
  padding: 10,
  overflow: 'scroll',
  borderRadius: 12,
  boxShadow: '#ebedf0 0 4px 12px',
};
const Demo = () => (
  <div
    style={containerStyle}
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
