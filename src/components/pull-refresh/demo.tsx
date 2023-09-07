import React, { useEffect, useState } from 'react';
import { PullRefresh, Tab, Skeleton, InfiniteScroll } from '../index';
import './styles/index';



let count = 0;
let uid = 0;
let count1 = 0;
let uid1 = 0;

const sleep1 = (num: number) =>
  new Promise((ok) => {
    setTimeout(() => ok(null), num);
  });

export async function mockRequest() {
  if (count >= 5) {
    return [];
  }

  await sleep1(1000);

  const res = [];
  for (let i = "a"; i < "z"; i = String.fromCharCode(i.charCodeAt(0) + 1)) {
    res.push(`${i}+${uid++}-基础用法`);
  }
  count++;
  return res;
}

export async function mockRequest1() {
  if (count1 >= 5) {
    return [];
  }

  await sleep1(1000);

  const res = [];
  for (let i = "a"; i < "z"; i = String.fromCharCode(i.charCodeAt(0) + 1)) {
    res.push(`${i}+${uid1++}-成功提示`);
  }
  count1++;
  return res;
}

const Demo = () => {
  const [loading, setLoading] = useState(false);

  const [data, setData] = React.useState<string[]>([]);
  const [data1, setData1] = React.useState<string[]>([]);
  const [hasMore, setHasMore] = React.useState(true);
  const [hasMore1, setHasMore1] = React.useState(true);

  async function loadMore() {
    const append = await mockRequest();
    setData((val) => [...val, ...append]);
    setHasMore(append.length > 0);
  }

  async function loadMore1() {
    const append = await mockRequest1();
    setData1((val) => [...val, ...append]);
    setHasMore1(append.length > 0);
  }

  const sleep = (timer: number) => {
    return new Promise((resolve) => setTimeout(resolve, timer));
  }
  const handleRefresh = async () => {
    console.log('====触发');
    setLoading(true);
    await sleep(2000);
    setLoading(false);
  };

  return (
    <div>
      <Tab contentType="all">
        <Tab.Item key="1" title='基础用法'>
          <div
            id="tes3"
            style={{ width: '100%', height: 'calc(100vh - 166px)', overflow: 'auto', border: '1px solid red' }}
          >
            <PullRefresh onRefresh={handleRefresh}>
              {data.map((i) => (
                <div key={i} style={{ height: 30, borderTop: "1px solid black" }}>
                  {i}
                </div>
              ))}
            </PullRefresh>
            <InfiniteScroll hasMore={hasMore} loadMore={loadMore} />
          </div>
        </Tab.Item>
        <Tab.Item key="2" title='成功提示'>
          {/* <PullRefresh
            onRefresh={handleRefresh}
            successDuration={2000}
            successText={<div>哈哈哈哈我成功刷新了</div>}
          >
            <div style={{ minHeight: '100vh' }}>
              刷新次数2

            </div>
          </PullRefresh> */}
          <div id="tes2" style={{ width: '100%', position: 'absolute', height: 'calc(100vh - 166px)', overflow: 'auto', border: '1px solid blue' }}>
            <PullRefresh onRefresh={handleRefresh}>
              {data1.map((i) => (
                <div key={i} style={{ height: 30, borderTop: "1px solid black" }}>
                  {i}
                </div>
              ))}
            </PullRefresh>
            <InfiniteScroll hasMore={hasMore1} loadMore={loadMore1} />
          </div>
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
            {!loading && <div style={{ width: '100%', position: 'absolute', height: 'calc(100vh - 166px)', overflow: 'auto', background: 'pink' }}>
              刷新次数3
              {/* <div style={{ height: 800 }} /> */}
            </div>}
          </PullRefresh>
        </Tab.Item>
      </Tab>
      <div
        style={{ height: 52, position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1000, background: 'green', color: '#fff', lineHeight: '52px', textAlign: 'center' }}
        >
        底部适配
      </div>
    </div>
  );
};

export default Demo;
