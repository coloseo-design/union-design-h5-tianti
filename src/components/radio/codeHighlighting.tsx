/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import Highlight from 'react-highlight';

const codeDemo = () => (
  <div>
    <Highlight>
      {"/* eslint-disable no-console */\nimport React from 'react';\nimport { Radio } from '../index';\n\nconst RadioDemo = () => (\n  <>\n    <div>\n      <Radio onChange={(checked) => console.log('checked', checked)}>复选框（默认）</Radio>\n      <Radio checked>复选框（选中）</Radio>\n      <Radio disabled>复选框（禁止）</Radio>\n      <Radio disabled checked>复选框（选中且禁止）</Radio>\n    </div>\n\n    <div>\n      <Radio.Group\n        defaultValue=\"A\"\n        disabled={false}\n        onChange={(values) => console.log('values', values)}\n        options={[\n          {\n            value: 'A',\n            label: 'A',\n            disabled: true,\n          },\n          {\n            value: 'B',\n            label: 'B',\n          },\n          {\n            value: 'C',\n            label: 'C',\n          },\n        ]}\n      />\n    </div>\n    <div>\n      <Radio.Group\n        defaultValue=\"A\"\n        disabled={false}\n        onChange={(value) => console.log('value', value)}\n      >\n        <Radio disabled value=\"A\">A</Radio>\n        <Radio value=\"B\">B</Radio>\n        <Radio value=\"C\">C</Radio>\n      </Radio.Group>\n    </div>\n\n  </>\n);\n\nexport default RadioDemo;\n"}
    </Highlight>
  </div>
);

export default codeDemo;
