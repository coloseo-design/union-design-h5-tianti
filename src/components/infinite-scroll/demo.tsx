import React from "react";
import { InfiniteScroll } from "../index";
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

  return (
    <div style={{ height: 300, overflow: "auto" }}>
      {data.map((i) => (
        <div key={i} style={{ height: 30, borderTop: "1px solid black" }}>
          {i}
        </div>
      ))}
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
    </div>
  );
};

export default Demo;
