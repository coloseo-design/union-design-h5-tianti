/* eslint-disable react/button-has-type */
/* eslint-disable react/state-in-constructor */
import React from 'react';
import Popover from './index';
import Button from '../button';

const popoverDemo = () => (
  <div style={{ padding: 100 }}>
    <Popover content="气泡弹出框内容" placement="topLeft" style={{ paddingLeft: 80 }} color="black">
      <Button>top Left black</Button>
    </Popover>
    <Popover content="气泡弹出框内容" placement="top" style={{ paddingLeft: 80 }}>
      <Button>top</Button>
    </Popover>
    <Popover content="气泡弹出框内容" placement="topRight" style={{ paddingLeft: 80 }} color="red">
      <Button>top Right red</Button>
    </Popover>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <Popover content="气泡弹出框内容" placement="bottomLeft" style={{ paddingLeft: 80 }} color="black">
      <Button>bottom Left black</Button>
    </Popover>
    <Popover content="气泡弹出框内容" placement="bottom" style={{ paddingLeft: 80 }}>
      <Button>bottom</Button>
    </Popover>
    <Popover content="气泡弹出框内容" placement="bottomRight" style={{ paddingLeft: 80 }} color="red">
      <Button>bottom Right red</Button>
    </Popover>
  </div>
);

export default popoverDemo;
