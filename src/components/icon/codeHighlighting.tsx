/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import Highlight from 'react-highlight';

const codeDemo = () => (
  <div>
    <Highlight>
      {"import React from 'react';\nimport * as icons from 'union-icons';\nimport Icon from './index';\nimport './demo.less';\n\nfunction rename(name: string, separator = '-'): string {\n  let newNameBucket = '';\n  [...name].forEach((char, index) => {\n    let codepoint = char.codePointAt(0);\n    if (codepoint) {\n      if (codepoint >= 65 && codepoint <= 90) {\n        codepoint += 32;\n        if (index > 0) {\n          newNameBucket += separator;\n        }\n      }\n      newNameBucket += String.fromCodePoint(codepoint);\n    }\n  });\n  return newNameBucket;\n}\n\nconst IconDemo: React.FC<unknown> = () => (\n  <ul className=\"icon-container\">\n    {\n      Object.keys(icons).map((icon: string) => {\n        const name = rename(icon);\n        return (\n          <li key={icon}>\n            <div className=\"icon\">\n              <Icon type={name} style={{ fontSize: 32 }} />\n            </div>\n            <div className=\"icon-name\">\n              {name}\n            </div>\n          </li>\n        );\n      })\n    }\n  </ul>\n);\n\nexport default IconDemo;\n"}
    </Highlight>
  </div>
);

export default codeDemo;
