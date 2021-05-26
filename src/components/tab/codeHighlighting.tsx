/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from 'react';
import Highlight from 'react-highlight';
import Icon from '../icon';

const codeDemo = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div style={{
        border: '1px solid #E8E7E7', padding: 12, textAlign: 'right',
      }}
      >
        <Icon type="productd-evelop" style={{ fontSize: 20 }} onClick={() => setOpen(!open)} />
      </div>
      {open && (
        <div style={{ border: '1px solid #E8E7E7', borderTop: 'none', background: '#fff' }}>
          <Highlight>
            {"/* eslint-disable no-console */\nimport React from 'react';\nimport Tab from './index';\nimport { TabProps } from './tab';\n\nconst TabType = (props: Omit<TabProps, 'children'>) => (\n  <div\n    style={{\n      margin: 40,\n      width: 414,\n      height: 250,\n      border: '1px solid black',\n      position: 'relative',\n    }}\n  >\n    <Tab {...props}>\n      <Tab.Item key=\"标签1\" title=\"标签11111111\" taskNum={22} taskWeight={2}>\n        <div style={{ marginTop: 20, alignSelf: 'center' }}>标签 1 页面</div>\n      </Tab.Item>\n      <Tab.Item key=\"标签2\" title=\"标签2222222\" taskNum={42} taskWeight={2}>\n        <div style={{ marginTop: 20, alignSelf: 'center' }}>标签 2 页面</div>\n      </Tab.Item>\n      <Tab.Item key=\"标签3\" title=\"标签333333\" taskNum={129} dot>\n        <div style={{ marginTop: 20, alignSelf: 'center' }}>标签 3 页面</div>\n      </Tab.Item>\n      <Tab.Item key=\"标签4\" title=\"标签4444444\" taskNum={37}>\n        <div style={{ marginTop: 20, alignSelf: 'center' }}>标签 4 页面</div>\n      </Tab.Item>\n      <Tab.Item key=\"标签5\" title=\"标签5\">\n        <div style={{ marginTop: 20, alignSelf: 'center' }}>标签 5 页面</div>\n      </Tab.Item>\n      <Tab.Item key=\"标签6\" title=\"标签6\">\n        <div style={{ marginTop: 20, alignSelf: 'center' }}>标签 6 页面</div>\n      </Tab.Item>\n      <Tab.Item key=\"标签7\" title=\"标签7\">\n        <div style={{ marginTop: 20, alignSelf: 'center' }}>标签 7 页面</div>\n      </Tab.Item>\n      <Tab.Item key=\"标签8\" title=\"标签8\">\n        <div style={{ marginTop: 20, alignSelf: 'center' }}>标签 8 页面</div>\n      </Tab.Item>\n      <Tab.Item key=\"标签9\" title=\"标签9\">\n        <div style={{ marginTop: 20, alignSelf: 'center' }}>标签 9 页面</div>\n      </Tab.Item>\n    </Tab>\n  </div>\n);\n\nconst Demo = () => (\n  <div\n    style={{\n      display: 'flex',\n      flexFlow: 'row wrap',\n    }}\n  >\n    {TabType({ type: 'normal', onTabChange: (key) => console.log(key) })}\n    {TabType({ type: 'normal', mode: 'fixed' })}\n    {TabType({ type: 'card' })}\n    {TabType({ type: 'label' })}\n    {TabType({ type: 'task' })}\n  </div>\n);\n\nexport default Demo;\n"}
          </Highlight>
        </div>
      )}
    </div>
  );
};

export default codeDemo;
