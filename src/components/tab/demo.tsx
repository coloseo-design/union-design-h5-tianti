import React from 'react';
import { Tab } from '../index';
import { TabProps } from './tab';
import './styles/index';

const TabType = (props: Omit<TabProps, 'children'>) => (
  <div>
    <Tab {...props}>
      <Tab.Item key="标签1" title="标签11111111" taskNum={22} taskWeight={2}>
        <div style={{ marginTop: 20, alignSelf: 'center', height: 120 }}>标签 1 页面</div>
      </Tab.Item>
      <Tab.Item key="标签2" title="标签2222222" taskNum={42} taskWeight={2}>
        <div style={{ marginTop: 20, alignSelf: 'center' }}>标签 2 页面</div>
      </Tab.Item>
      <Tab.Item key="标签3" title="标签333333" taskNum={129} dot>
        <div style={{ marginTop: 20, alignSelf: 'center' }}>标签 3 页面</div>
      </Tab.Item>
      <Tab.Item key="标签4" title="标签4444444" taskNum={37}>
        <div style={{ marginTop: 20, alignSelf: 'center' }}>标签 4 页面</div>
      </Tab.Item>
      <Tab.Item key="标签5" title="标签5">
        <div style={{ marginTop: 20, alignSelf: 'center' }}>标签 5 页面</div>
      </Tab.Item>
      <Tab.Item key="标签6" title="标签6">
        <div style={{ marginTop: 20, alignSelf: 'center' }}>标签 6 页面</div>
      </Tab.Item>
      <Tab.Item key="标签7" title="标签7">
        <div style={{ marginTop: 20, alignSelf: 'center' }}>标签 7 页面</div>
      </Tab.Item>
      <Tab.Item key="标签8" title="标签8">
        <div style={{ marginTop: 20, alignSelf: 'center' }}>标签 8 页面</div>
      </Tab.Item>
      <Tab.Item key="标签9" title="标签9">
        <div style={{ marginTop: 20, alignSelf: 'center' }}>标签 9 页面</div>
      </Tab.Item>
    </Tab>
  </div>
);

const Demo = () => (
  <div
  >
    {TabType({ type: 'normal', defaultSelectedKey: "标签3", onTabChange: (key) => console.log(key) })}
    {TabType({ type: 'normal', mode: 'fixed', selectedKey: "标签3" })}
    {TabType({ type: 'card', })}
    {TabType({ type: 'label' })}
    {TabType({ type: 'task' })}
    {TabType({ type: 'normal', contentDirection: "vertical", onTabChange: (key) => console.log(key) })}
  </div>
);

export default Demo;
