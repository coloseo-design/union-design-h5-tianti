/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import Highlight from 'react-highlight';

const codeDemo = () => (
  <div>
    <Highlight>
      {"import React, { useState } from 'react';\nimport Button from '../button';\nimport Overlay from './index';\n\nconst Demo = () => {\n  const [visible, setVisible] = useState(false);\n  return (\n    <div style={{ padding: 40 }}>\n      <Button onClick={() => setVisible(true)}>打开 遮罩</Button>\n      <Overlay visible={visible} onClick={() => setVisible(false)}>\n        <div style={{\n          width: 200, height: 200, backgroundColor: 'lightcoral',\n        }}\n        >\n          children\n        </div>\n      </Overlay>\n    </div>\n  );\n};\n\nexport default Demo;\n"}
    </Highlight>
  </div>
);

export default codeDemo;
