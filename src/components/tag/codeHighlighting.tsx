/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import Highlight from 'react-highlight';

const codeDemo = () => (
  <div>
    <Highlight>
      {"/* eslint-disable react/button-has-type */\n/* eslint-disable react/state-in-constructor */\nimport React from 'react';\nimport Tag from './index';\n\nconst TagDemo = () => (\n  <div style={{ padding: 100 }}>\n    <Tag>标签</Tag>\n    <Tag round style={{ marginLeft: 50 }}>标签</Tag>\n    <br />\n    <br />\n    <Tag hollow>标签</Tag>\n    <Tag round hollow style={{ marginLeft: 50 }}>标签</Tag>\n    <br />\n    <br />\n    <Tag big>标签</Tag>\n  </div>\n);\nexport default TagDemo;\n"}
    </Highlight>
  </div>
);

export default codeDemo;
