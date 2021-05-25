/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import Highlight from 'react-highlight';

const codeDemo = () => (
  <div>
    <Highlight>
      {"import React from 'react';\nimport ImagePreview from './index';\n\nconst Demo = () => (\n  <div style={{\n    margin: 40,\n    width: 414,\n    height: 717,\n    border: '1px solid black',\n    display: 'flex',\n    flexFlow: 'column',\n    alignItems: 'center',\n  }}\n  >\n    <div style={{ margin: 10, width: 313, height: 172 }}>\n      <ImagePreview\n        enableFullScreen\n        imgSrc=\"https://t7.baidu.com/it/u=1297102096,3476971300&fm=193&f=GIF\"\n        imgOriginalSrc=\"https://t7.baidu.com/it/u=737555197,308540855&fm=193&f=GIF\"\n      />\n    </div>\n  </div>\n);\n\nexport default Demo;\n"}
    </Highlight>
  </div>
);

export default codeDemo;
