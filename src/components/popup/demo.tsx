import React, { useState } from 'react';
import { Popup, Button, Icon, Capsule } from '../index';
import './styles/index';
import '../button/styles/index';


const PopupDemo = () => {
  const [vmodel, setModal] = useState(false);
  const [vmodel1, setVmodel1] = useState(false);
  const [vmodel2, setVmodel2] = useState(false);
  const [vmodel3, setVmodel3] = useState(false);
  const [vmodel4, setVmodel4] = useState(false);
  const [vmodel6, setVmodel6] = useState(false);
  const [vmodel7, setVmodel7] = useState(false);
  const [fullVisible, setFull] = useState(false);
  const [containerVisible, setContainer] = useState(false);

  const handleCancel = () => {
    setModal(false);
    setVmodel6(false);
    setVmodel4(false);
    setVmodel3(false);
    setVmodel2(false);
    setVmodel1(false);
    setFull(false);
    setContainer(false);
  };

  const content = (num: number) => (
    <div style={{ textAlign: 'center' }}>
      {
        (Array.from(Array(num), (_, k) => k + 1) || []).map((item) => (
          <p key={item}>这是一条内容</p>
        ))
      }
      <p>这是一条内容黑哈哈哈哈</p>
    </div>
  );

  return (
    <div id="container" style={{ position: 'relative' }}>
      <h1>在父级中弹出</h1>
      <Button onClick={() => setContainer(true)}>在父级中弹出</Button>
      <h1>全屏展示</h1>
      <Button onClick={() => setFull(true)}>全屏展示</Button>
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
      <h1>自定义弹出header</h1>
      <Button onClick={() => setVmodel6(true)}>自定义弹出header</Button>
      <h1>自定义弹出footer</h1>
      <Button onClick={() => setVmodel7(true)}>自定义弹出footer</Button>
      <Popup
        visible={containerVisible}
        position="right"
        header="标题"
        onCancel={handleCancel}
        getPopupContainer={() => document.getElementById('container')}
      >
        {content(7)}
      </Popup>
      <Popup
        closeable={false}
        visible={fullVisible}
        position='bottom'
        onCancel={handleCancel}
        fullScreen
        footer={null}
        headerStyle={{ border: 'none', height: 'auto', padding: 14, fontWeight: 400, }}
        header={
          <div style={{ width: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Icon type="right" />
              <div>确认同意</div>
              <Capsule
                onClose={() => {
                  handleCancel()
                }}
              />
            </div>
            <div style={{ marginTop: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>确认同意</div>
                <div style={{ color: 'red' }}>完成</div>
            </div>
          </div>
        }
      >
        <div style={{ width: '100%', height: 12, backgroundColor: 'rgb(250, 250, 250)'}} />
        <button onClick={() => setVmodel2(true)}>展开</button>
        <button onClick={() => setVmodel2(false)}>关闭</button>
        {content(47)}
      </Popup>
      <Popup
        visible={vmodel}
        position="center"
        onCancel={handleCancel}
        style={{ width: 320 }}
        header="标题"
        round
      >
        {content(7)}
      </Popup>
      <Popup
        visible={vmodel1}
        position="top"
        onCancel={handleCancel}
        header="标题"
      >
        {content(7)}
      </Popup>
      <Popup
        visible={vmodel2}
        position="bottom"
        onCancel={handleCancel}
        header="标题"
        footerStyle={{ paddingBottom: 32 }}
        parentHidden={fullVisible ? false : true}
      >
        <button onClick={() => {
          setVmodel2(false);
          if (fullVisible) {
            document.body.style.overflow = 'hidden';
          }
        }}>关闭</button>
        {content(7)}
      </Popup>
      <Popup
        visible={vmodel3}
        position="left"
        onCancel={handleCancel}
        style={{ width: 320 }}
      >
        {content(52)}
      </Popup>
      <Popup
        visible={vmodel4}
        position="right"
        onCancel={handleCancel}
        style={{ width: 320 }}
      >
        {content(7)}
      </Popup>
      <Popup
        visible={vmodel6}
        position="bottom"
        onCancel={handleCancel}
        onOk={handleCancel}
        closeable={false}
        okText="测试ok"
        cancelText="测试cancel"
        round
        header={(
          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
            <div onClick={handleCancel}>取消</div>
            <div>哈哈哈哈</div>
            <div onClick={handleCancel}>确定</div>
          </div>
        )}
      >
        {content(52)}
        <p>swqsqw</p>
      </Popup>
      <Popup
        visible={vmodel7}
        position="bottom"
        onCancel={() => setVmodel7(false)}
        onOk={handleCancel}
        closeable={false}
        round
        footer={null}
        // footer={<div style={{ textAlign: 'center', paddingBottom: 12 }}><Button onClick={() => () => setVmodel7(false)} type="primary">自定义footer</Button></div>}
      >
        {content(52)}
      </Popup>
    </div>
  );
};

export default PopupDemo;
