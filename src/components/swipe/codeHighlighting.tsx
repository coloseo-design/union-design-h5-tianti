/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import Highlight from 'react-highlight';

const codeDemo = () => (
  <div>
    <Highlight>
      {"import React from 'react';\nimport Swipe from './index';\nimport ImagePreview from '../image-preview';\n\nconst Demo = () => (\n  <div\n    style={{\n      margin: 40,\n      width: 414,\n      height: 717,\n      border: '1px solid black',\n      display: 'flex',\n      flexFlow: 'column',\n      alignItems: 'center',\n    }}\n  >\n    <Swipe width={343} height={152} style={{ marginTop: 20 }}>\n      <ImagePreview imgSrc=\"https://t7.baidu.com/it/u=1819248061,230866778&fm=193&f=GIF\" />\n      <ImagePreview imgSrc=\"https://t7.baidu.com/it/u=963301259,1982396977&fm=193&f=GIF\" />\n      <ImagePreview imgSrc=\"https://t7.baidu.com/it/u=737555197,308540855&fm=193&f=GIF\" />\n      <ImagePreview imgSrc=\"https://t7.baidu.com/it/u=91673060,7145840&fm=193&f=GIF\" />\n      <ImagePreview imgSrc=\"https://t7.baidu.com/it/u=1297102096,3476971300&fm=193&f=GIF\" />\n    </Swipe>\n  </div>\n);\n\nexport default Demo;\n"}
    </Highlight>
  </div>
);

export default codeDemo;
