import React, { useState } from 'react';
import { Switch, Toast } from '../index';
import './styles/index';

const containerStyle = {
  width: 377,
  height: 548,
  backgroundColor: '#fafafa',
  padding: 10,
  overflow: 'scroll',
  borderRadius: 12,
  boxShadow: '#ebedf0 0 4px 12px',
};
const SwitchDemo = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <h3>默认不选中</h3>
      <Switch
        checked={checked}
        onChange={(v) => {
          Toast.info({
            content: `您${v ? '选中' : '取消'}了`,
          });
          setChecked(v);
        }}
      />
      <h3>选中状态 自定义颜色为红色</h3>
      <Switch defaultChecked color="red" />
      <h3>选中状态 自定义颜色为绿色</h3>
      <Switch checked color="green" />
      <h3>默认样式</h3>
      <Switch />
    </div>
  )
};

export default SwitchDemo;
