import React from 'react';
import Uploader from './index';

const Demo = () => (
  <div
    style={{
      margin: 40,
      width: 414,
      height: 250,
      border: '1px solid black',
      position: 'relative',
    }}
  >
    <Uploader.List
      style={{ margin: '20px 15px' }}
      action="http://10.13.5.99:3000/upload"
    />
  </div>
);

export default Demo;
