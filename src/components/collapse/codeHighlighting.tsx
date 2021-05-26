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
            {"import React from 'react';\nimport Collapse from './index';\n\nconst { Panel } = Collapse;\n\nconst CollapseDemo = () => (\n  <div>\n    <Collapse activeKey={1} onChange={(a, b) => { console.log(a, b); }}>\n      <Panel header=\"一级列表样式\" key={1}>\n        <Collapse activeKey={1} onChange={(a, b) => { console.log(a, b); }}>\n          <Panel header=\"二级列表样式\" key={1}>\n            我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容\n          </Panel>\n        </Collapse>\n      </Panel>\n      <Panel header=\"一级列表样式\" key={2}>\n        我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容\n      </Panel>\n    </Collapse>\n    <Collapse activeKey={1} accordion style={{ marginTop: 50 }}>\n      <Panel header=\"类别(#N)\" key={1}>\n        我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容\n        我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容\n        我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容\n        我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容\n      </Panel>\n      <Panel header=\"类别(#N)\" key={2}>\n        我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容\n        我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容\n        我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容\n        我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容\n      </Panel>\n    </Collapse>\n  </div>\n);\n\nexport default CollapseDemo;\n"}
          </Highlight>
        </div>
      )}
    </div>
  );
};

export default codeDemo;
