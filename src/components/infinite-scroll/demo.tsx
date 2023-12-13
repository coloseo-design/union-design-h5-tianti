import React from "react";
import { InfiniteScroll, Popup, Dialog } from "../index";
import "./styles/index";
import "../icon/styles/index";

let count = 0;
let uid = 0;

const sleep = (num: number) =>
  new Promise((ok) => {
    setTimeout(() => ok(null), num);
  });

export async function mockRequest() {
  if (count >= 5) {
    return [];
  }

  await sleep(1000);

  const res = [];
  for (let i = "a"; i < "z"; i = String.fromCharCode(i.charCodeAt(0) + 1)) {
    res.push(`${i}+${uid++}`);
  }
  count++;
  return res;
}

let errNum = 0;

const Demo = () => {
  const [data, setData] = React.useState<string[]>([]);
  const [hasMore, setHasMore] = React.useState(true);
  const [visible, setVisible] = React.useState(false);

  async function loadMore() {
    if (errNum === 2) {
      errNum += 1;
      throw new Error("aaa");
    }
    const append = await mockRequest();
    setData((val) => [...val, ...append]);
    setHasMore(append.length > 0);
    errNum += 1;
  }

  const click = () => {
    setVisible(true);
    setHasMore(true);;
  };

  return (
    <div>
      <button onClick={click}>
        全屏
      </button>
      {/* <Popup header="标题" fullScreen closeable visible={visible} footer={null} bodyStyle={{ padding: 24 }}> */}
        <div style={{ height: 300, border: '1px solid red', overflow: 'auto' }}>
          {data.map((i) => (
            <div key={i} style={{ height: 30, borderTop: "1px solid black" }}>
              {i}
            </div>
          ))}
          <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
        </div>


      {/* </Popup> */}
    </div>

  );
};

export default Demo;
