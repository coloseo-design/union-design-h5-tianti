/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import Highlight from 'react-highlight';

const codeDemo = () => (
  <div>
    <Highlight>
      {"/* eslint-disable react/button-has-type */\n/* eslint-disable react/state-in-constructor */\nimport React from 'react';\nimport Switch from './index';\n\nconst switchDemo = () => (\n  <div style={{ padding: 100 }}>\n    <Switch checked={false} />\n    <Switch checked color=\"red\" />\n    <Switch checked color=\"green\" />\n    <Switch />\n  </div>\n);\n\nexport default switchDemo;\n"}
    </Highlight>
  </div>
);

export default codeDemo;
