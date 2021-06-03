import React from 'react';
import { ImagePreview } from '../index';

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
  <div style={containerStyle}>
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
