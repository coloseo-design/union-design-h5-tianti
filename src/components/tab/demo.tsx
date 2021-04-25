import React from 'react';
import Tab from './index';
import { TabProps } from './tab';

const TabType = (props: Omit<TabProps, 'children'>) => (
  <div
    style={{
      margin: 40,
      width: 414,
      height: 250,
      border: '1px solid black',
      position: 'relative',
    }}
  >
    <Tab {...props}>
      <Tab.Item key="标签1" title="标签1">
        <div>标签 1 页面</div>
      </Tab.Item>
      <Tab.Item key="标签2" title="标签2">
        <div>标签 2 页面</div>
      </Tab.Item>
      <Tab.Item key="标签3" title="标签3">
        <div>标签 3 页面</div>
      </Tab.Item>
      <Tab.Item key="标签4" title="标签4">
        <div>标签 4 页面</div>
      </Tab.Item>
      <Tab.Item key="标签5" title="标签5">
        <div>标签 5 页面</div>
      </Tab.Item>
      <Tab.Item key="标签6" title="标签6">
        <div>标签 6 页面</div>
      </Tab.Item>
      <Tab.Item key="标签7" title="标签7">
        <div>标签 7 页面</div>
      </Tab.Item>
      <Tab.Item key="标签8" title="标签8">
        <div>标签 8 页面</div>
      </Tab.Item>
      <Tab.Item key="标签9" title="标签9">
        <div>标签 9 页面</div>
      </Tab.Item>
    </Tab>
  </div>
);

const Demo = () => (
  <div
    style={{
      display: 'flex',
      flexFlow: 'row wrap',
    }}
  >
    {TabType({ type: 'normal', line: true })}
    {TabType({ type: 'normal', line: true, tabNum: 4 })}
    {TabType({ type: 'card', tabNum: 4, line: true })}
    {TabType({ type: 'label' })}
    {TabType({ type: 'card' })}
  </div>
);

export default Demo;
