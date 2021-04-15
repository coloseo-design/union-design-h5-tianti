import React from 'react';
import Swipe from './index';
import ImagePreview from '../image-preview';

const Demo = () => (
  <div
    style={{
      margin: 40,
      width: 414,
      height: 717,
      border: '1px solid black',
      display: 'flex',
      flexFlow: 'column',
      alignItems: 'center',
    }}
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
