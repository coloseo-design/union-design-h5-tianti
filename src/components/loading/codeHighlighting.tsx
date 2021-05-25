/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import Highlight from 'react-highlight';

const codeDemo = () => (
  <div>
    <Highlight>
      {"import React from 'react';\nimport Loading from './index';\n\nconst LoadingDemo = () => (\n  <>\n    <Loading color=\"#fff\" />\n    <br />\n    <Loading type=\"spinner\" color=\"#fff\" />\n    <Loading backgroundColor=\"none\" />\n    <Loading backgroundColor=\"none\" type=\"spinner\" size={50} />\n    <Loading backgroundColor=\"none\">加载中....</Loading>\n    <Loading backgroundColor=\"none\" type=\"spinner\" vertical>加载中...</Loading>\n  </>\n);\n\nexport default LoadingDemo;\n"}
    </Highlight>
  </div>
);

export default codeDemo;
