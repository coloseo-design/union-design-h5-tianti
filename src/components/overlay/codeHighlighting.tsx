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
            {"import React, { useState } from 'react';\nimport Button from '../button';\nimport Overlay from './index';\n\nconst Demo = () => {\n  const [visible, setVisible] = useState(false);\n  return (\n    <div style={{ padding: 40 }}>\n      <Button onClick={() => setVisible(true)}>打开 遮罩</Button>\n      <Overlay visible={visible} onClick={() => setVisible(false)}>\n        <div style={{\n          width: 200, height: 200, backgroundColor: 'lightcoral',\n        }}\n        >\n          children\n        </div>\n      </Overlay>\n    </div>\n  );\n};\n\nexport default Demo;\n"}
          </Highlight>
        </div>
      )}
    </div>
  );
};

export default codeDemo;
