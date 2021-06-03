import React, { useState } from 'react';
import { Popup, Button } from '../index';

const containerStyle = {
  width: 377,
  height: 548,
  backgroundColor: '#fafafa',
  padding: 10,
  overflow: 'scroll',
  borderRadius: 12,
  boxShadow: '#ebedf0 0 4px 12px',
};
const PopupDemo = () => {
  const [vmodel, setModal] = useState(false);
  const [vmodel1, setVmodel1] = useState(false);
  const [vmodel2, setVmodel2] = useState(false);
  const [vmodel3, setVmodel3] = useState(false);
  const [vmodel4, setVmodel4] = useState(false);
  const [vmodel5, setVmodel5] = useState(false);
  const [vmodel6, setVmodel6] = useState(false);

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
      <p>这是一条内容哈哈哈哈哈哈</p>
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
      <p>这是一条内容嘿嘿嘿</p>
    </div>
  );
  return (
    <div style={containerStyle}>
      <h1>基础用法</h1>
      <Button onClick={() => setModal(true)}>基础</Button>
      <h1>顶部弹出</h1>
      <Button onClick={() => setVmodel1(true)}>顶部弹出</Button>
      <h1>底部弹出</h1>
      <Button onClick={() => setVmodel2(true)}>底部弹出</Button>
      <h1>左侧弹出</h1>
      <Button onClick={() => setVmodel3(true)}>左侧弹出</Button>
      <h1>右侧弹出</h1>
      <Button onClick={() => setVmodel4(true)}>右侧弹出</Button>
      <h1>自定义弹出footer</h1>
      <Button onClick={() => setVmodel5(true)}>自定义弹出footer</Button>
      <h1>自定义弹出header</h1>
      <Button onClick={() => setVmodel6(true)}>自定义弹出header</Button>
      <Popup
        visible={vmodel}
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
        visible={vmodel1}
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
        visible={vmodel2}
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
        visible={vmodel3}
        position="left"
        onCancel={handleCancel}
        style={{ width: 320 }}
      >
        {test}
      </Popup>
      <Popup
        visible={vmodel4}
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
        visible={vmodel5}
        position="bottom"
        onCancel={handleCancel}
        style={{ height: '70%' }}
        footer={[<Button type="primary" onClick={handleCancel} key="1">确定</Button>]}
      >
        {test}
      </Popup>
      <Popup
        visible={vmodel6}
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
