import React from 'react';
import { Toast, Button, Popup } from '../index';
import './styles/index';
import '../button/styles/index';

const ToastDemo = () => {
  const [containerVisible, $visible] = React.useState(false);
  const handleCancel = () => {
    $visible(false);
  }
  return (
    <div>
      <Button onClick={() => $visible(true)}>ddd</Button>
      <Popup
        visible={containerVisible}
        position="right"
        header="标题"
        onCancel={handleCancel}
        bodyStyle={{ width: 400  }}
      >
        <Button onClick={() => Toast.info({ style:{ zIndex: 2200}, icon: 'success', mask: true })}>自定义提示</Button>
      </Popup>

      <Button onClick={() => Toast.info({ content: '最多展示两行最多展示两行最多展示两行最多展示两行' })}>自定义提示</Button>

      <Button onClick={() => Toast.info({ icon: 'success', content: '最多展示两行最多展示两行最多展示两行最多展示两行' })}>自定义提示</Button>
      <Button onClick={() => Toast.info({ icon: 'success', content: '最多展示两行最多展示两行最多展示两行最多展示两行', vertical: false })}>自定义提示</Button>

      <Button onClick={() => Toast.loading({ content: 'loading', loadingSize: 64, mask: true })}>加载提示</Button>
      <Button onClick={() => Toast.hide()}>关闭</Button>
    </div>
  )
};

export default ToastDemo;
