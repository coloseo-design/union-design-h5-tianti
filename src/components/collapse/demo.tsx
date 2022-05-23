import React from 'react';
import { Collapse } from '../index';
import './styles/index';
import Icon from '../icon';

const { Panel } = Collapse;

const containerStyle = {
  width: 377,
  height: 548,
  backgroundColor: '#fafafa',
  padding: 10,
  overflow: 'scroll',
  borderRadius: 12,
  boxShadow: '#ebedf0 0 4px 12px',
};
const CollapseDemo = () => (
  <div style={containerStyle}>
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
