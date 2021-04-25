/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PullRefresh from './index';

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
    <div>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
        <div>
          <h2 onClick={click1}>基础用法</h2>
        </div>
        <div>
          <h2 onClick={click2}>成功提示</h2>
        </div>
        <div>
          <h2 onClick={click3}>自定义提示</h2>
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
