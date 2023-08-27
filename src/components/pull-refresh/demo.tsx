import React, { useState } from 'react';
import { PullRefresh, Tab, Skeleton } from '../index';
import './styles/index';

const Demo = () => {
  const [loading, setLoading] = useState(false);
  const sleep = (timer: number) => {
    return new Promise((resolve) => setTimeout(resolve, timer));
  }
  const handleRefresh = async () => {
    console.log('====触发');
    setLoading(true);
    await sleep(1000);
    setLoading(false);
  };
  return (
    <div>
      <Tab>
        <Tab.Item key="1" title='基础用法'>
          <PullRefresh
            onRefresh={handleRefresh}
            headStyle={{ background: 'red' }}
            style={{ height: 'calc(100vh - 124px)', border: '1px solid red', overflow: 'auto', overscrollBehavior: 'none' }}
          >
            <p>
              刷新次数1
              <div style={{ height: 400, background: 'green', color: '#fff' }}>滚动1</div>
              <div style={{ height: 400, background: 'blue', color: '#fff' }}>滚动12</div>
              <div style={{ height: 400, background: 'blue', color: '#fff' }}>滚动12</div>
              <div style={{ height: 400, background: 'blue', color: '#fff' }}>滚动12</div>
              <div style={{ height: 400, background: 'blue', color: '#fff' }}>滚动12</div>
              <div style={{ height: 700, background: 'blue', color: '#fff' }}>滚动12</div>
            </p>
          </PullRefresh>
        </Tab.Item>
        <Tab.Item key="2" title='成功提示'>
          <PullRefresh
            onRefresh={handleRefresh}
            successDuration={2000}
            successText={<div>哈哈哈哈我成功刷新了</div>}
          >
            <div style={{ minHeight: '100vh' }}>
              刷新次数2

            </div>
          </PullRefresh>
        </Tab.Item>
        <Tab.Item key="3" title='自定义提示'>
          <PullRefresh
            onRefresh={handleRefresh}
            pullingText={<div>下拉中</div>}
            headHeight={120}
            successDuration={10000}
            loadingText={(
              <Skeleton
              loading={true}
              round
              avatar
              title
              paragraph
              paragraphRow={6}
            />
            )}
            successText={(
              <div style={{ display: 'flex', width: '100%', background: 'red' }}>
                <p>成功啦</p>
                <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" style={{ height: 120 }} alt="success" />
              </div>
            )}
          >
            {!loading && <div style={{ minHeight: '100vh', background: 'pink' }}>
              刷新次数3
            </div>}
          </PullRefresh>
        </Tab.Item>
      </Tab>
    </div>
  );
};

export default Demo;
