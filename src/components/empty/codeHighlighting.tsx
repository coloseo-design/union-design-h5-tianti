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
            {"/* eslint-disable max-len */\nimport React from 'react';\nimport Empty from './index';\n\nconst EmptyDemo = () => (\n  <div\n    style={{\n      width: 900,\n      backgroundColor: 'white',\n    }}\n  >\n    <Empty />\n    <Empty type=\"ThereWasNothing\" />\n    <Empty type=\"ThereWasNothing\" description=\"测试测试测试\" />\n    <Empty type=\"TakeACoffeeBreak\" />\n    <Empty type=\"NoPermission\" />\n    <Empty type=\"SearchForSomethingElse\" />\n    <Empty type=\"HighlyEfficientWork\" />\n    <Empty type=\"ThePageIsMissing\" />\n    <Empty type=\"NoBrowsingRecord\" />\n    <Empty type=\"NoComment\" />\n    <Empty type=\"NoNotice\" />\n    <Empty type=\"NoNetwork\" />\n    <Empty type=\"NoDataAvailable\" />\n  </div>\n);\n\nexport default EmptyDemo;\n"}
          </Highlight>
        </div>
      )}
    </div>
  );
};

export default codeDemo;
