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
            {"import React from 'react';\nimport GridLayout from './index';\n\nconst Demo = () => {\n  const data = [\n    {\n      icon: 'add',\n      text: 1,\n    },\n    {\n      icon: 'apps',\n      text: 1,\n    },\n    {\n      icon: 'award',\n      text: 1,\n    },\n    {\n      icon: 'bell',\n      text: 1,\n    },\n    {\n      icon: 'camera',\n      text: 1,\n    },\n    {\n      icon: 'checkout',\n      text: 1,\n    },\n    {\n      icon: 'add',\n      text: 1,\n    },\n    {\n      icon: 'apps',\n      text: 1,\n    },\n    {\n      icon: 'award',\n      text: 1,\n    },\n    {\n      icon: 'bell',\n      text: 1,\n    },\n  ];\n  return (\n    <div>\n      <GridLayout data={data} columnNum={6} />\n      <br />\n      <GridLayout data={data} renderItem={(el, index) => <div>{`el: ${JSON.stringify(el)}, index: ${index}`}</div>} />\n    </div>\n  );\n};\n\nexport default Demo;\n"}
          </Highlight>
        </div>
      )}
    </div>
  );
};

export default codeDemo;
