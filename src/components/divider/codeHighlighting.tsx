/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import Highlight from 'react-highlight';

const codeDemo = () => (
  <div>
    <Highlight>
      {"/* eslint-disable max-len */\nimport React from 'react';\nimport Divider from './index';\n\nconst DividerDemo = () => (\n  <div style={{ padding: 100, width: 900, border: '1px solid blue' }}>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>\n    <Divider />\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>\n    <Divider>标题</Divider>\n  </div>\n);\n\nexport default DividerDemo;\n"}
    </Highlight>
  </div>
);

export default codeDemo;
