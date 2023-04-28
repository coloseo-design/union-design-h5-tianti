import React from 'react';
import { Toast, Button } from '../index';
import './styles/index';
import '../button/styles/index';

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
  <div>
    <Button onClick={() => Toast.info({ icon: 'success' })}>自定义提示</Button>
    <Button onClick={() => Toast.info({ content: '最多展示两行最多展示两行最多展示两行最多展示两行' })}>自定义提示</Button>

    <Button onClick={() => Toast.info({ icon: 'success', content: '最多展示两行最多展示两行最多展示两行最多展示两行' })}>自定义提示</Button>
    <Button onClick={() => Toast.info({ icon: 'success', content: '最多展示两行最多展示两行最多展示两行最多展示两行', vertical: false })}>自定义提示</Button>

    <Button onClick={() => Toast.loading({ content: 'loading' })}>加载提示</Button>
    <Button onClick={() => Toast.hide()}>关闭</Button>
  </div>
);

export default ToastDemo;
