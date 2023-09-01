import React, { useState } from 'react';
import { Tabbar, Icon } from '../index';
import './styles/index';
import '../icon/styles/index';

const containerStyle = {
  height: 548,
  backgroundColor: '#fafafa',
  padding: 10,
  overflow: 'scroll',
  borderRadius: 12,
  boxShadow: '#ebedf0 0 4px 12px',
};
const Demo = () => {
  const [activeKey, setKey] = useState('2');
  const [activeKey1, setKey1] = useState('1');
  console.log('==activeKey', activeKey);
  const data = [
    {
      key: '1',
      icon: activeKey1 === '1' ? <Icon type="user" /> : <Icon type="user-circle" />,
      title: '选项1',
    },
    {
      key: '2',
      icon: activeKey1 === '2' ? <Icon type="delete-can" /> : <Icon type="delete-line" />,
      title: '选项2',
    },
    {
      key: '3',
      icon: activeKey1 === '3' ? <Icon type="close1-line" /> : <Icon type="close1-surface" />,
      title: '选项3',
    },
];
  return (
    <>
    <h2>示例一data</h2>
    <div style={{ height: 150 }}>
      <Tabbar
        activeKey={activeKey1}
        onChange={(k: string) => setKey1(k)}
        position="bottom"
      >
        {data.map((item) => (
          <Tabbar.Item {...item}>
          <div
              style={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'yellow',
              }}
              // onClick={() => setKey('选项3')}
            >
              {item.title} 页面
            </div>
          </Tabbar.Item>
        ))}
      </Tabbar>
    </div>
    <div style={{ height: 150 }}>
      <Tabbar
        activeKey={activeKey}
        onChange={(k: string) => setKey(k)}
        position="bottom"
      >
        <Tabbar.Item
          dot
          key="1"
          title="选项1"
          icon={activeKey === '1' ? <Icon type="user" /> : <Icon type="user-circle" />}
          selectedStyle={{ color: 'rgb(81, 159, 240)' }}
        >
          <div
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'yellow',
            }}
            onClick={() => setKey('选项3')}
          >
            选项1 页面
          </div>
        </Tabbar.Item>
        <Tabbar.Item
          badge={36}
          key="2"
          title="选项2"
          icon={activeKey === '2' ? <Icon type="delete-can" /> : <Icon type="delete-line" />}
          selectedStyle={{ color: 'rgb(81, 159, 240)' }}
        >
          <div
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'grey',
            }}
            onClick={() => setKey('选项1')}
          >
            选项2 页面
          </div>
        </Tabbar.Item>
        <Tabbar.Item
          key="3"
          title="选项3"
          icon={activeKey === '3' ? <Icon type="close1-line" /> : <Icon type="close1-surface" />}
          selectedStyle={{ color: 'rgb(81, 159, 240)' }}
        >
          <div
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'green',
            }}
            onClick={() => setKey('选项2')}
          >
            选项3 页面
          </div>
        </Tabbar.Item>
      </Tabbar>
    </div>
    <h2>示例二</h2>
    <div style={{ height: 150 }}>
      <Tabbar
        position="bottom"
      >
        <Tabbar.Item
          dot
          key="选项1"
          title="选项1"
          icon="approval"
          selectedStyle={{ color: 'rgb(81, 159, 240)' }}
        >
          <div
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'yellow',
            }}
            onClick={() => setKey('选项3')}
          >
            选项1 页面
          </div>
        </Tabbar.Item>
        <Tabbar.Item
          badge={36}
          key="选项2"
          title="选项2"
          icon={<Icon type="calendar" />}
          selectedStyle={{ color: 'rgb(81, 159, 240)' }}
        >
          <div
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'grey',
            }}
            onClick={() => setKey('选项1')}
          >
            选项2 页面
          </div>
        </Tabbar.Item>
        <Tabbar.Item
          key="选项3"
          title="选项3"
          icon="service"
          selectedStyle={{ color: 'rgb(81, 159, 240)' }}
        >
          <div
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'green',
            }}
            onClick={() => setKey('选项2')}
          >
            选项3 页面
          </div>
        </Tabbar.Item>
        <Tabbar.Item
          key="选项4"
          title="选项4"
          icon="setting-line"
          selectedStyle={{ color: 'rgb(81, 159, 240)' }}
        >
          <div
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'green',
            }}
            onClick={() => setKey('选项4')}
          >
            选项3 页面
          </div>
        </Tabbar.Item>
      </Tabbar>
    </div>
    <h2>示例三</h2>
    <div style={{ height: 150 }}>
      <Tabbar
        position="bottom"
        activeKey="选项3"
      >
        <Tabbar.Item
          dot
          key="选项1"
          title="选项1"
          icon="approval"
          selectedStyle={{ color: 'rgb(81, 159, 240)' }}
        >
          <div
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'yellow',
            }}
            onClick={() => setKey('选项3')}
          >
            选项1 页面
          </div>
        </Tabbar.Item>
        <Tabbar.Item
          badge={36}
          key="选项2"
          title="选项2"
          icon={<Icon type="calendar" />}
          selectedStyle={{ color: 'rgb(81, 159, 240)' }}
        >
          <div
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'grey',
            }}
          >
            选项2 页面
          </div>
        </Tabbar.Item>
        <Tabbar.Item
          key="选项3"
          title="选项3"
          icon="service"
          selectedStyle={{ color: 'rgb(81, 159, 240)' }}
        >
          <div
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'green',
            }}
          >
            选项3 页面
          </div>
        </Tabbar.Item>
        <Tabbar.Item
          key="选项4"
          title="选项4"
          icon="setting-line"
          selectedStyle={{ color: 'rgb(81, 159, 240)' }}
        >
          <div
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'green',
            }}
          >
            选项4 页面
          </div>
        </Tabbar.Item>
        <Tabbar.Item
          key="选项5"
          title="选项5"
          icon="app-line"
          selectedStyle={{ color: 'rgb(81, 159, 240)' }}
        >
          <div
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'green',
            }}
          >
            选项5 页面
          </div>
        </Tabbar.Item>
      </Tabbar>
    </div>
    </>
  );
};

export default Demo;
