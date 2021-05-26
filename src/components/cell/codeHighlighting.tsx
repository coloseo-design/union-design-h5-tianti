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
            {"import React from 'react';\nimport Cell from './index';\n\nconst Demo = () => (\n  <div>\n    <Cell\n      className=\"test\"\n      subtitle=\"2021.04.27\"\n      title=\"姓名提交的工作内容-标题的内容得你的的…\"\n      content={(\n        <div>\n          <div>编号：ZA991-20810-2138</div>\n          <div>意向名称：这里是名称的名称</div>\n          <div>项目类别：类别名称</div>\n        </div>\n      )}\n      footer=\"footer\"\n    />\n  </div>\n);\n\nexport default Demo;\n"}
          </Highlight>
        </div>
      )}
    </div>
  );
};

export default codeDemo;
