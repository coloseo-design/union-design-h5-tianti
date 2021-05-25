/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import Highlight from 'react-highlight';

const codeDemo = () => (
  <div>
    <Highlight>
      {"import React from 'react';\nimport Praise from './index';\n\nconst PraiseDemo = () => (\n  <>\n    <Praise />\n    <br />\n    <Praise number={100} status onChange={(number) => { console.log('number', number); }} />\n  </>\n);\n\nexport default PraiseDemo;\n"}
    </Highlight>
  </div>
);

export default codeDemo;
