import React from 'react';
import Skeleton from './index';

const Demo = () => (
  <div
    style={{
      width: 414,
      margin: 40,
      padding: 10,
      backgroundColor: '#F5F6F6',
      border: '1px solid black',
    }}
  >
    <Skeleton
      loading
      round
      avatar
      title
      paragraph
      paragraphRow={4}
    >
      <div style={{ height: 100 }}>
        test
      </div>
    </Skeleton>
  </div>
);

export default Demo;
