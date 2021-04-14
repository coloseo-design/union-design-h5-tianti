import React, { useState } from 'react';
import Popup from './index';
import Button from '../button';

const PopupDemo = () => {
  const [vmodel, setModal] = useState(false);
  const [vmodel1, setVmodel1] = useState(false);
  const [vmodel2, setVmodel2] = useState(false);
  const [vmodel3, setVmodel3] = useState(false);
  const [vmodel4, setVmodel4] = useState(false);
  const [vmodel5, setVmodel5] = useState(false);
  const [vmodel6, setVmodel6] = useState(false);
  const handleClick = () => {
    setModal(true);
  };
  const handleClick1 = () => {
    setVmodel1(true);
  };
  const handleClick2 = () => {
    setVmodel2(true);
  };
  const handleClick3 = () => {
    setVmodel3(true);
  };
  const handleClick4 = () => {
    setVmodel4(true);
  };
  const handleClick5 = () => {
    setVmodel5(true);
  };
  const handleClick6 = () => {
    setVmodel6(true);
  };

  const handleCancel = () => {
    setModal(false);
    setVmodel6(false);
    setVmodel5(false);
    setVmodel4(false);
    setVmodel3(false);
    setVmodel2(false);
    setVmodel1(false);
  };

  const test = (
    <div style={{ textAlign: 'center' }}>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
      <p>这是一条内容</p>
    </div>
  );
  return (
    <div>
      <h1>基础用法</h1>
      <Button onClick={handleClick}>基础</Button>
      <h1>顶部弹出</h1>
      <Button onClick={handleClick1}>顶部弹出</Button>
      <h1>底部弹出</h1>
      <Button onClick={handleClick2}>底部弹出</Button>
      <h1>左侧弹出</h1>
      <Button onClick={handleClick3}>左侧弹出</Button>
      <h1>右侧弹出</h1>
      <Button onClick={handleClick4}>右侧弹出</Button>
      <h1>自定义弹出footer</h1>
      <Button onClick={handleClick5}>自定义弹出footer</Button>
      <h1>自定义弹出header</h1>
      <Button onClick={handleClick6}>自定义弹出header</Button>
      <Popup
        vmodel={vmodel}
        position="center"
        onCancel={handleCancel}
        style={{ width: 320 }}
        header="标题"
      >
        <div style={{ textAlign: 'center' }}>
          <p>这是一条内容</p>
          <p>这是一条内容</p>
          <p>这是一条内容</p>
          <p>这是一条内容</p>
          <p>这是一条内容</p>
          <p>这是一条内容</p>
          <p>这是一条内容</p>
        </div>
      </Popup>
      <Popup
        vmodel={vmodel1}
        position="top"
        onCancel={handleCancel}
        header="标题"
      >
        <div style={{ textAlign: 'center' }}>
          <p>这是一条内容</p>
          <p>这是一条内容</p>
          <p>这是一条内容</p>
          <p>这是一条内容</p>
          <p>这是一条内容</p>
          <p>这是一条内容</p>
          <p>这是一条内容</p>
        </div>
      </Popup>
      <Popup
        vmodel={vmodel2}
        position="bottom"
        onCancel={handleCancel}
        header="标题"
      >
        <div style={{ textAlign: 'center' }}>
          <p>这是一条内容</p>
          <p>这是一条内容</p>
          <p>这是一条内容</p>
          <p>这是一条内容</p>
          <p>这是一条内容</p>
          <p>这是一条内容</p>
          <p>这是一条内容</p>
        </div>
      </Popup>
      <Popup
        vmodel={vmodel3}
        position="left"
        onCancel={handleCancel}
        style={{ width: 320 }}
      >
        {test}
      </Popup>
      <Popup
        vmodel={vmodel4}
        position="right"
        onCancel={handleCancel}
        style={{ width: 320 }}
      >
        <div style={{ textAlign: 'center' }}>
          <p>这是一条内容</p>
          <p>这是一条内容</p>
          <p>这是一条内容</p>
          <p>这是一条内容</p>
          <p>这是一条内容</p>
          <p>这是一条内容</p>
          <p>这是一条内容</p>
        </div>
      </Popup>
      <Popup
        vmodel={vmodel5}
        position="bottom"
        onCancel={handleCancel}
        style={{ height: '70%' }}
        // footer={null}
        footer={[<Button type="primary" onClick={handleCancel} key="1">确定</Button>]}
      >
        {test}
      </Popup>
      <Popup
        vmodel={vmodel6}
        position="bottom"
        onCancel={handleCancel}
        onOk={handleCancel}
        closeable={false}
        header={(
          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
            <div onClick={handleCancel}>取消</div>
            <div>哈哈哈哈</div>
            <div onClick={handleCancel}>确定</div>
          </div>
        )}
      >
        <div style={{ textAlign: 'center' }}>
          <p>这是一条内容</p>
          <p>这是一条内容</p>
          <p>这是一条内容</p>
          <p>这是一条内容</p>
          <p>这是一条内容</p>
          <p>这是一条内容</p>
          <p>这是一条内容</p>
          <p>这是一条内容</p>
          <p>这是一条内容</p>
          <p>这是一条内容</p>
          <p>这是一条内容</p>
          <p>这是一条内容</p>
          <p>这是一条内容</p>
          <p>这是一条内容</p>
        </div>
      </Popup>
    </div>
  );
};

export default PopupDemo;
