import React from 'react';
import { PopOver, Button } from '../index';

const popoverDemo = () => (
  <div style={{ padding: 100 }}>
    <PopOver content="气泡弹出框内容" placement="topLeft" style={{ paddingLeft: 80 }} color="black">
      <Button>top Left black</Button>
    </PopOver>
    <PopOver content="气泡弹出框内容" placement="top" style={{ paddingLeft: 80 }}>
      <Button>top</Button>
    </PopOver>
    <PopOver content="气泡弹出框内容" placement="topRight" style={{ paddingLeft: 80 }} color="red">
      <Button>top Right red</Button>
    </PopOver>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <PopOver content="气泡弹出框内容" placement="bottomLeft" style={{ paddingLeft: 80 }} color="black">
      <Button>bottom Left black</Button>
    </PopOver>
    <PopOver content="气泡弹出框内容" placement="bottom" style={{ paddingLeft: 80 }}>
      <Button>bottom</Button>
    </PopOver>
    <PopOver content="气泡弹出框内容" placement="bottomRight" style={{ paddingLeft: 80 }} color="red">
      <Button>bottom Right red</Button>
    </PopOver>
  </div>
);

export default popoverDemo;
