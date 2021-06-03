import React from 'react';
import { Toast, Button } from '../index';

const containerStyle = {
  width: 377,
  height: 548,
  backgroundColor: '#fafafa',
  padding: 10,
  overflow: 'scroll',
  borderRadius: 12,
  boxShadow: '#ebedf0 0 4px 12px',
};
const ToastDemo = () => (
  <div style={containerStyle}>
    <Button onClick={() => Toast.success({ content: 'success' })}>成功提示</Button>
    <Button onClick={() => Toast.fail({ content: 'fail' })}>错误提示</Button>
    <Button onClick={() => Toast.info({ content: 'info', mask: false })}>文字提示 允许穿透</Button>
    <Button onClick={() => Toast.loading({ content: 'loading' })}>加载提示</Button>
    <Button onClick={() => Toast.hide()}>关闭</Button>
  </div>
);

export default ToastDemo;
