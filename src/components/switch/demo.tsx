import React from 'react';
import { Switch } from '../index';

const switchDemo = () => (
  <div style={{ padding: 100 }}>
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
