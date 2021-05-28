import React, { useState } from 'react';
import { Skeleton, Switch } from '../index';

const Demo = () => {
  const [loading, setLoading] = useState(true);
  return (
    <div
      style={{
        width: 414,
        margin: 40,
        padding: 10,
        backgroundColor: '#F5F6F6',
        border: '1px solid black',
      }}
    >
      <Switch checked={loading} onChange={(e) => setLoading(e)} />
      <div style={{ height: 20 }} />
      <Skeleton
        loading={loading}
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
};

export default Demo;
