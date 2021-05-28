import React from 'react';
import { ImagePreview } from '../index';

const Demo = () => (
  <div style={{
    margin: 40,
    width: 414,
    height: 717,
    border: '1px solid black',
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
  }}
  >
    <div style={{ margin: 10, width: 313, height: 172 }}>
      <ImagePreview
        enableFullScreen
        imgSrc="https://t7.baidu.com/it/u=1297102096,3476971300&fm=193&f=GIF"
        imgOriginalSrc="https://t7.baidu.com/it/u=737555197,308540855&fm=193&f=GIF"
      />
    </div>
  </div>
);

export default Demo;
