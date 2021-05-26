/* eslint-disable react/react-in-jsx-scope */
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
            {"import React from 'react';\nimport * as icons from 'union-icons';\nimport Icon from './index';\nimport './demo.less';\n\nfunction rename(name: string, separator = '-'): string {\n  let newNameBucket = '';\n  [...name].forEach((char, index) => {\n    let codepoint = char.codePointAt(0);\n    if (codepoint) {\n      if (codepoint >= 65 && codepoint <= 90) {\n        codepoint += 32;\n        if (index > 0) {\n          newNameBucket += separator;\n        }\n      }\n      newNameBucket += String.fromCodePoint(codepoint);\n    }\n  });\n  return newNameBucket;\n}\n\nconst IconDemo: React.FC<unknown> = () => (\n  <ul className=\"icon-container\">\n    {\n      Object.keys(icons).map((icon: string) => {\n        const name = rename(icon);\n        return (\n          <li key={icon}>\n            <div className=\"icon\">\n              <Icon type={name} style={{ fontSize: 32 }} />\n            </div>\n            <div className=\"icon-name\">\n              {name}\n            </div>\n          </li>\n        );\n      })\n    }\n  </ul>\n);\n\nexport default IconDemo;\n"}
          </Highlight>
        </div>
      )}
    </div>
  );
};

export default codeDemo;
