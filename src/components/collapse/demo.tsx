import React from 'react';
import { Collapse } from '../index';
import './styles/index';
import Icon from '../icon';

const { Panel } = Collapse;

const collData = [
  {
    key: '1',
    title: '一级内容',
    children: [
      {
        key: '2',
        title: '二级内容',
        children: [
          {
            key: '7',
            title: '三级内容',
            des: '我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容',
          }
        ],
      },
      {
        key: '3',
        title: '二级内容',
        children: [
          {
            key: '7',
            title: '三级内容',
            des: '我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容',
          }
        ],
      },
      {
        key: '4',
        title: '二级内容',
        children: [
          {
            key: '7',
            title: '三级内容',
            des: '我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容',
          }
        ],
      },
      {
        key: '5',
        title: '二级内容',
        children: [
          {
            key: '7',
            title: '三级内容',
            des: '我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容',
          }
        ],
      },
      {
        key: '6',
        title: '二级内容',
        children: [
          {
            key: '7',
            title: '三级内容',
            des: '我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容',
          }
        ],
      },
    ],
  }
];
const renderCollapse = (data: any[]) => data.map((item) => {
  const child = <Collapse size='md' key={item.key}>
    {renderCollapse(item.children || [])}
  </Collapse>
  return <Panel
    extra={() => <Icon type="right" style={{ color: '#A6A8A9'}} />}
    key={item.key}
    header={item.title}
    expandIcon={({ isActive }) =>   {
      return <Icon type={item.key === '7' ? 'time-line' : !isActive ? 'add3-line' : 'reduce3-line'} />
    }}
  >
    {item.children && item.children.length > 0 && child}
  </Panel>
});

const CollapseDemo = () => (
  <div style={{ margin: '0px -12px'}}>
    <h2>基础用法</h2>
    <Collapse activeKey={1} onChange={(a, b) => { console.log(a, b); }}>
      <Panel header="一级列表样式" key={1}>
        <Collapse>
          <Panel header="二级列表样式" key={5}>
            我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
            <Collapse>
              <Panel header="二级列表样式" key={6}>
                我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
              </Panel>
            </Collapse>
          </Panel>
        </Collapse>
      </Panel>
      <Panel header="一级列表样式" key={2} extra={({ isActive }) => (<Icon type={isActive ? 'add-circle' : 'minus-circle'} />)}>
        我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
      </Panel>
    </Collapse>
    <h2>size="md"</h2>
    <Collapse activeKey={1} size="md" onChange={(a, b) => { console.log(a, b); }}>
      {renderCollapse(collData)}
    </Collapse>
    <h2>手风琴模式</h2>
    <Collapse
      activeKey={1}
      accordion
      style={{ marginTop: 50 }}
      expandIcon={
        ({ isActive }) => (<Icon type="fill-right" style={{ transform: isActive ? 'rotate(90deg)' : 'none', marginRight: 12 }} />)
      }
    >
      <Panel
        header="类别(#N)"
        key={1}
        extra={({ isActive }) => (<Icon type={isActive ? 'add-circle' : 'minus-circle'} />)}
      >
        我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
        我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
        我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
        我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
      </Panel>
      <Panel
        header="类别(#N)"
        key={2}
        extra={({ isActive }) => <Icon type="right-circle" style={{ transform: isActive ? 'rotate(-90deg)' : 'rotate(90deg)', fontSize: 16 }} />}
      >
        我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
        我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
        我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
        我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
      </Panel>
    </Collapse>
  </div>
);

export default CollapseDemo;
