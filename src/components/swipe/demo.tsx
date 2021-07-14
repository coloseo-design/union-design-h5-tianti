import React from 'react';
import { Swipe, ImagePreview } from '../index';
import './styles/index';
import '../image-preview/styles/index';

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
    <Swipe width={343} height={152} style={{ marginTop: 20 }}>
      <ImagePreview imgSrc="https://t7.baidu.com/it/u=1819248061,230866778&fm=193&f=GIF" />
      <ImagePreview imgSrc="https://t7.baidu.com/it/u=963301259,1982396977&fm=193&f=GIF" />
      <ImagePreview imgSrc="https://t7.baidu.com/it/u=737555197,308540855&fm=193&f=GIF" />
      <ImagePreview imgSrc="https://t7.baidu.com/it/u=91673060,7145840&fm=193&f=GIF" />
      <ImagePreview imgSrc="https://t7.baidu.com/it/u=1297102096,3476971300&fm=193&f=GIF" />
    </Swipe>
  </div>
);

export default Demo;
