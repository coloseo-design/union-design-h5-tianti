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
            {"import React from 'react';\nimport Loading from './index';\n\nconst LoadingDemo = () => (\n  <>\n    <Loading color=\"#fff\" />\n    <br />\n    <Loading type=\"spinner\" color=\"#fff\" />\n    <Loading backgroundColor=\"none\" />\n    <Loading backgroundColor=\"none\" type=\"spinner\" size={50} />\n    <Loading backgroundColor=\"none\">加载中....</Loading>\n    <Loading backgroundColor=\"none\" type=\"spinner\" vertical>加载中...</Loading>\n  </>\n);\n\nexport default LoadingDemo;\n"}
          </Highlight>
        </div>
      )}
    </div>
  );
};

export default codeDemo;
