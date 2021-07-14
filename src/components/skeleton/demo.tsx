import React, { useState } from 'react';
import { Skeleton, Switch } from '../index';
import './styles/index';
import '../switch/styles/index';

const Demo = () => {
  const containerStyle = {
    width: 377,
    height: 548,
    backgroundColor: '#fafafa',
    padding: 10,
    overflow: 'scroll',
    borderRadius: 12,
    boxShadow: '#ebedf0 0 4px 12px',
  };
  const [loading, setLoading] = useState(true);
  return (
    <div
      style={containerStyle}
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
