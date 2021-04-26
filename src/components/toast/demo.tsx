import React from 'react';
import Toast from './index';
import Button from '../button';

const ToastDemo = () => (
  <>
    <Button onClick={() => Toast.success({ content: 'success' })}>成功提示</Button>
    <Button onClick={() => Toast.fail({ content: 'fail' })}>错误提示</Button>
    <Button onClick={() => Toast.info({ content: 'info', mask: false })}>文字提示 允许穿透</Button>
    <Button onClick={() => Toast.loading({ content: 'loading' })}>加载提示</Button>
    <Button onClick={() => Toast.hide()}>关闭</Button>
  </>
);

export default ToastDemo;
