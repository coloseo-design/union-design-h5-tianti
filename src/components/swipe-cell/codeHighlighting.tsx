/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import Highlight from 'react-highlight';

const codeDemo = () => (
  <div>
    <Highlight>
      {"/* eslint-disable no-console */\nimport React from 'react';\nimport SwipeCell from './index';\n\nconst Demo = () => (\n  <div\n    style={{\n      width: 414,\n      height: 600,\n      margin: 40,\n      padding: 10,\n      backgroundColor: '#F5F6F6',\n      border: '1px solid black',\n    }}\n  >\n    <SwipeCell\n      onOpen={() => console.log('open')}\n      onClose={() => console.log('close')}\n      left={[\n        { content: 'Option1', style: { backgroundColor: 'green' } },\n        { content: <div>Option2</div>, style: { backgroundColor: 'pink' } },\n        { content: 'Option3', style: { backgroundColor: 'green' } },\n        { content: 'Option4', style: { backgroundColor: 'green' } },\n      ]}\n    >\n      <div style={{ height: 100, backgroundColor: 'red' }}>\n        只有左边\n      </div>\n    </SwipeCell>\n    <div style={{ height: 30 }} />\n    <SwipeCell\n      right={[\n        { content: 'Option1', style: { backgroundColor: 'orange' } },\n        { content: <div>Option2</div>, style: { backgroundColor: 'blue' } },\n      ]}\n    >\n      <div style={{ height: 100, backgroundColor: 'red' }}>\n        只有右边\n      </div>\n    </SwipeCell>\n    <div style={{ height: 30 }} />\n    <SwipeCell\n      left={[\n        { content: 'Option1', style: { backgroundColor: 'green' }, onPress: () => console.log('left') },\n        { content: <div>Option2</div>, style: { backgroundColor: 'pink' } },\n        { content: 'Option3', style: { backgroundColor: 'green' } },\n        { content: 'Option4', style: { backgroundColor: 'green' } },\n      ]}\n      right={[\n        { content: 'Option1', style: { backgroundColor: 'orange' } },\n        { content: <div>Option2</div>, style: { backgroundColor: 'blue' }, onPress: () => console.log('right') },\n      ]}\n    >\n      <div style={{ height: 100, backgroundColor: 'red' }}>\n        两边都有\n      </div>\n    </SwipeCell>\n  </div>\n);\n\nexport default Demo;\n"}
    </Highlight>
  </div>
);

export default codeDemo;
