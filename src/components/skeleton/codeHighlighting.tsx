/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import Highlight from 'react-highlight';

const codeDemo = () => (
  <div>
    <Highlight>
      {"import React, { useState } from 'react';\nimport Skeleton from './index';\nimport Switch from '../switch';\n\nconst Demo = () => {\n  const [loading, setLoading] = useState(true);\n  return (\n    <div\n      style={{\n        width: 414,\n        margin: 40,\n        padding: 10,\n        backgroundColor: '#F5F6F6',\n        border: '1px solid black',\n      }}\n    >\n      <Switch checked={loading} onChange={(e) => setLoading(e)} />\n      <div style={{ height: 20 }} />\n      <Skeleton\n        loading={loading}\n        round\n        avatar\n        title\n        paragraph\n        paragraphRow={4}\n      >\n        <div style={{ height: 100 }}>\n          test\n        </div>\n      </Skeleton>\n    </div>\n  );\n};\n\nexport default Demo;\n"}
    </Highlight>
  </div>
);

export default codeDemo;
