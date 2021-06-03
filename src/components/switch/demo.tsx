import React from 'react';
import { Switch } from '../index';

const containerStyle = {
  width: 377,
  height: 548,
  backgroundColor: '#fafafa',
  padding: 10,
  overflow: 'scroll',
  borderRadius: 12,
  boxShadow: '#ebedf0 0 4px 12px',
};
const switchDemo = () => (
  <div style={containerStyle}>
    <h3>默认不选中</h3>
    <Switch checked={false} />
    <h3>选中状态 自定义颜色为红色</h3>
    <Switch checked color="red" />
    <h3>选中状态 自定义颜色为绿色</h3>
    <Switch checked color="green" />
    <h3>默认样式</h3>
    <Switch />
  </div>
);

export default switchDemo;
