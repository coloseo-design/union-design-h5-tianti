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
            {"/* eslint-disable no-console */\nimport React from 'react';\nimport { Radio } from '../index';\n\nconst RadioDemo = () => (\n  <>\n    <div>\n      <Radio onChange={(checked) => console.log('checked', checked)}>复选框（默认）</Radio>\n      <Radio checked>复选框（选中）</Radio>\n      <Radio disabled>复选框（禁止）</Radio>\n      <Radio disabled checked>复选框（选中且禁止）</Radio>\n    </div>\n\n    <div>\n      <Radio.Group\n        defaultValue=\"A\"\n        disabled={false}\n        onChange={(values) => console.log('values', values)}\n        options={[\n          {\n            value: 'A',\n            label: 'A',\n            disabled: true,\n          },\n          {\n            value: 'B',\n            label: 'B',\n          },\n          {\n            value: 'C',\n            label: 'C',\n          },\n        ]}\n      />\n    </div>\n    <div>\n      <Radio.Group\n        defaultValue=\"A\"\n        disabled={false}\n        onChange={(value) => console.log('value', value)}\n      >\n        <Radio disabled value=\"A\">A</Radio>\n        <Radio value=\"B\">B</Radio>\n        <Radio value=\"C\">C</Radio>\n      </Radio.Group>\n    </div>\n\n  </>\n);\n\nexport default RadioDemo;\n"}
          </Highlight>
        </div>
      )}
    </div>
  );
};

export default codeDemo;
