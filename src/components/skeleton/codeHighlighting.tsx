/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/no-useless-path-segments */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from 'react';
import Highlight from 'react-highlight';
import Icon from '../icon';

const codeDemo = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div style={{
        border: '1px solid #E8E7E7', padding: 12, textAlign: 'right',
      }}
      >
        <Icon type="productd-evelop" style={{ fontSize: 20 }} onClick={() => setOpen(!open)} />
      </div>
      {open && (
        <div style={{ border: '1px solid #E8E7E7', borderTop: 'none', background: '#fff' }}>
          <Highlight>
            {"import React, { useState } from 'react';\nimport Skeleton from './index';\nimport Switch from '../switch';\n\nconst Demo = () => {\n  const [loading, setLoading] = useState(true);\n  return (\n    <div\n      style={{\n        width: 414,\n        margin: 40,\n        padding: 10,\n        backgroundColor: '#F5F6F6',\n        border: '1px solid black',\n      }}\n    >\n      <Switch checked={loading} onChange={(e) => setLoading(e)} />\n      <div style={{ height: 20 }} />\n      <Skeleton\n        loading={loading}\n        round\n        avatar\n        title\n        paragraph\n        paragraphRow={4}\n      >\n        <div style={{ height: 100 }}>\n          test\n        </div>\n      </Skeleton>\n    </div>\n  );\n};\n\nexport default Demo;\n"}
          </Highlight>
        </div>
      )}
    </div>
  );
};

export default codeDemo;
