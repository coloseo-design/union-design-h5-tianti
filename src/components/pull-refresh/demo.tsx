import React from 'react';
import { PullRefresh } from '../index';

const containerStyle = {
  width: 377,
  height: 548,
  backgroundColor: '#fafafa',
  padding: 10,
  overflow: 'scroll',
  borderRadius: 12,
  boxShadow: '#ebedf0 0 4px 12px',
};
const Demo = () => {
  const [loading, setLoading] = React.useState(false);
  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };
  const [style1, setStyle1] = React.useState({ display: 'block' });
  const [style2, setStyle2] = React.useState({ display: 'none' });
  const [style3, setStyle3] = React.useState({ display: 'none' });

  const click1 = () => {
    setStyle1({
      display: 'block',
    });
    setStyle2({
      display: 'none',
    });
    setStyle3({
      display: 'none',
    });
  };
  const click2 = () => {
    setStyle2({
      display: 'block',
    });
    setStyle1({
      display: 'none',
    });
    setStyle3({
      display: 'none',
    });
  };
  const click3 = () => {
    setStyle3({
      display: 'block',
    });
    setStyle2({
      display: 'none',
    });
    setStyle1({
      display: 'none',
    });
  };
  return (
    <div style={containerStyle}>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
        <div>
          <div onClick={click1}>基础用法</div>
        </div>
        <div>
          <div onClick={click2}>成功提示</div>
        </div>
        <div>
          <div onClick={click3}>自定义提示</div>
        </div>
      </div>
      <div style={style1}>
        <PullRefresh
          onRefresh={handleRefresh}
          loading={loading}
        >
          <p>
            刷新次数1
          </p>
        </PullRefresh>
      </div>
      <div style={style2}>
        <PullRefresh
          onRefresh={handleRefresh}
          loading={loading}
          successText={<div>哈哈哈哈我成功刷新了</div>}
        >
          <p>
            刷新次数2
          </p>
        </PullRefresh>
      </div>
      <div style={style3}>
        <PullRefresh
          onRefresh={handleRefresh}
          loading={loading}
          pullingText={<div>下拉中</div>}
          headHeight={120}
          successDuration={1000}
          loadingText={(
            <div style={{ display: 'flex', width: '100%' }}>
              <p>我在加载</p>
              <img src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" style={{ height: 120 }} alt="lo" />
            </div>
          )}
          successText={(
            <div style={{ display: 'flex' }}>
              <p>成功啦</p>
              <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" style={{ height: 120 }} alt="success" />
            </div>
          )}
        >
          <p>
            刷新次数3
          </p>
        </PullRefresh>
      </div>
    </div>
  );
};

export default Demo;
