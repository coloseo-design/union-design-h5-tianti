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
            {"/* eslint-disable no-console */\nimport React from 'react';\nimport { Checkbox } from '../index';\n\nconst CheckboxDemo = () => (\n  <>\n    <div>\n      <Checkbox onChange={(checked) => console.log('checked', checked)}>复选框（默认）</Checkbox>\n      <Checkbox checked>复选框（选中）</Checkbox>\n      <Checkbox disabled>复选框（禁止）</Checkbox>\n      <Checkbox disabled checked>复选框（选中且禁止）</Checkbox>\n    </div>\n\n    <div>\n      <Checkbox.Group\n        value={['A']}\n        disabled={false}\n        onChange={(values) => console.log('values', values)}\n        options={[\n          {\n            value: 'A',\n            label: 'A',\n            disabled: true,\n          },\n          {\n            value: 'B',\n            label: 'B',\n          },\n          {\n            value: 'C',\n            label: 'C',\n          },\n        ]}\n      />\n    </div>\n    <div>\n      <Checkbox.Group\n        value={['A']}\n        disabled={false}\n        onChange={(values) => console.log('values', values)}\n      >\n        <Checkbox disabled value=\"A\">A</Checkbox>\n        <Checkbox value=\"B\">B</Checkbox>\n        <Checkbox value=\"C\">C</Checkbox>\n      </Checkbox.Group>\n    </div>\n\n  </>\n);\n\nexport default CheckboxDemo;\n"}
          </Highlight>
        </div>
      )}
    </div>
  );
};

export default codeDemo;
