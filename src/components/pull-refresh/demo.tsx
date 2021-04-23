import React from 'react';
import PullRefresh from './index';

const Demo = () => {
  const [loading, setLoading] = React.useState(false);
  const [count, setCount] = React.useState(0);
  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setCount(1);
    }, 1000);
  };
  return (
    <div>
      <PullRefresh
        onRefresh={handleRefresh}
        loading={loading}
      >
        <p>
          刷新次数
          {count}
        </p>
      </PullRefresh>
    </div>
  );
};

export default Demo;
