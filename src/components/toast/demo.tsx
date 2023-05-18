import React from 'react';
import { Toast, Button } from '../index';
import './styles/index';
import '../button/styles/index';

const ToastDemo = () => (
  <div>
    <Button onClick={() => Toast.info({ icon: 'success', duration: true })}>自定义提示</Button>
    <Button onClick={() => Toast.info({ content: '最多展示两行最多展示两行最多展示两行最多展示两行' })}>自定义提示</Button>

    <Button onClick={() => Toast.info({ icon: 'success', content: '最多展示两行最多展示两行最多展示两行最多展示两行' })}>自定义提示</Button>
    <Button onClick={() => Toast.info({ icon: 'success', content: '最多展示两行最多展示两行最多展示两行最多展示两行', vertical: false })}>自定义提示</Button>

    <Button onClick={() => Toast.loading({ content: 'loading' })}>加载提示</Button>
    <Button onClick={() => Toast.hide()}>关闭</Button>
  </div>
);

export default ToastDemo;
