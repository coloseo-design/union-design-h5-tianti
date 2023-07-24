import React from 'react';
import { PopOver, Button } from '../index';
import './styles/index';
import '../button/styles/index';


const popoverDemo = () => {
  const [visible, setVisible] = React.useState(false);
  const content = (
    <div onClick={() => setVisible(false)}>
      <div
        className="test"
        style={{ height: 44, display: 'flex', alignItems: 'center', borderBottom: '1px solid #EEF0F0', padding: '0px 36px' }}
        onClick={() => {
          console.log('=3333');
        }}
      >
        选择标题
      </div>
      <div
        className="test"
        style={{ height: 44, display: 'flex', alignItems: 'center', padding: '0px 36px' }}
      >
        选择标题
      </div>
    </div>
  );
  const onVisibleChange = (v: boolean) => {
    setVisible(v);
  };

  return (
    <div>
      <PopOver content="气泡弹出框内容" placement="topLeft">
        <Button style={{ margin: 36 }}>topLeft</Button>
      </PopOver>
      <PopOver content="气泡弹出框内容" placement="top">
        <Button style={{ margin: 36 }}>top</Button>
      </PopOver>
      <PopOver content="气泡弹出框内容" placement="topRight" color="red">
        <Button style={{ margin: 36 }}>top Right red</Button>
      </PopOver>
      <PopOver content="气泡弹出框内容" placement="bottomLeft" color="black">
        <Button style={{ margin: 36 }}>bottom Left black</Button>
      </PopOver>
      <PopOver content="气泡弹出框内容" placement="bottom">
        <Button style={{ margin: 36 }}>bottom</Button>
      </PopOver>
      <PopOver content="气泡弹出框内容" placement="bottomRight" color="red">
        <Button style={{ margin: 36 }}>bottom Right red</Button>
      </PopOver>

      <PopOver placement="top" content={content} style={{ padding: '0px' }}>
        <Button style={{ margin: 36 }}>示例</Button>
      </PopOver>
      <PopOver
        visible={visible}
        placement="bottom"
        content={content}
        onVisibleChange={onVisibleChange}
      >
        <Button>自己控制 visible</Button>
      </PopOver>
    </div>
  )
};

export default popoverDemo;
