/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import Highlight from 'react-highlight';

const codeDemo = () => (
  <div>
    <Highlight>
      {"/* eslint-disable max-len */\nimport React from 'react';\nimport Empty from './index';\n\nconst EmptyDemo = () => (\n  <div\n    style={{\n      width: 900,\n      backgroundColor: 'white',\n    }}\n  >\n    <Empty />\n    <Empty type=\"ThereWasNothing\" />\n    <Empty type=\"ThereWasNothing\" description=\"测试测试测试\" />\n    <Empty type=\"TakeACoffeeBreak\" />\n    <Empty type=\"NoPermission\" />\n    <Empty type=\"SearchForSomethingElse\" />\n    <Empty type=\"HighlyEfficientWork\" />\n    <Empty type=\"ThePageIsMissing\" />\n    <Empty type=\"NoBrowsingRecord\" />\n    <Empty type=\"NoComment\" />\n    <Empty type=\"NoNotice\" />\n    <Empty type=\"NoNetwork\" />\n    <Empty type=\"NoDataAvailable\" />\n  </div>\n);\n\nexport default EmptyDemo;\n"}
    </Highlight>
  </div>
);

export default codeDemo;
