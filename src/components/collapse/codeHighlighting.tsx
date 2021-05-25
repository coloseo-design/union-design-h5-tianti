/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import Highlight from 'react-highlight';

const codeDemo = () => (
  <div>
    <Highlight>
      {"import React from 'react';\nimport Collapse from './index';\n\nconst { Panel } = Collapse;\n\nconst CollapseDemo = () => (\n  <div>\n    <Collapse activeKey={1} onChange={(a, b) => { console.log(a, b); }}>\n      <Panel header=\"一级列表样式\" key={1}>\n        <Collapse activeKey={1} onChange={(a, b) => { console.log(a, b); }}>\n          <Panel header=\"二级列表样式\" key={1}>\n            我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容\n          </Panel>\n        </Collapse>\n      </Panel>\n      <Panel header=\"一级列表样式\" key={2}>\n        我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容\n      </Panel>\n    </Collapse>\n    <Collapse activeKey={1} accordion style={{ marginTop: 50 }}>\n      <Panel header=\"类别(#N)\" key={1}>\n        我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容\n        我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容\n        我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容\n        我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容\n      </Panel>\n      <Panel header=\"类别(#N)\" key={2}>\n        我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容\n        我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容\n        我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容\n        我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容\n      </Panel>\n    </Collapse>\n  </div>\n);\n\nexport default CollapseDemo;\n"}
    </Highlight>
  </div>
);

export default codeDemo;
