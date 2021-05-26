/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/no-useless-path-segments */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable react-hooks/rules-of-hooks */
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
            {"/* eslint-disable react/button-has-type */\n/* eslint-disable react/state-in-constructor */\nimport React from 'react';\nimport Tag from './index';\n\nconst TagDemo = () => (\n  <div style={{ padding: 100 }}>\n    <Tag>标签</Tag>\n    <Tag round style={{ marginLeft: 50 }}>标签</Tag>\n    <br />\n    <br />\n    <Tag hollow>标签</Tag>\n    <Tag round hollow style={{ marginLeft: 50 }}>标签</Tag>\n    <br />\n    <br />\n    <Tag big>标签</Tag>\n  </div>\n);\nexport default TagDemo;\n"}
          </Highlight>
        </div>
      )}
    </div>
  );
};

export default codeDemo;
