import React from 'react';
import Collapse from './index';

const { Panel } = Collapse;

const CollapseDemo = () => (
  <div style={{ padding: 100, width: '50%' }}>
    <Collapse activeKey={1} onChange={(a, b) => { console.log(a, b); }}>
      <Panel header="一级列表样式" key={1}>
        <Collapse activeKey={1} onChange={(a, b) => { console.log(a, b); }}>
          <Panel header="二级列表样式" key={1}>
            我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
          </Panel>
        </Collapse>
      </Panel>
      <Panel header="一级列表样式" key={2}>
        我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
      </Panel>
    </Collapse>
    <Collapse activeKey={1} accordion style={{ marginTop: 100 }}>
      <Panel header="类别(#N)" key={1}>
        我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
        我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
        我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
        我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
      </Panel>
      <Panel header="类别(#N)" key={2}>
        我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
        我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
        我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
        我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
      </Panel>
    </Collapse>
  </div>
);

export default CollapseDemo;
