/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import Highlight from 'react-highlight';

const codeDemo = () => (
  <div>
    <Highlight>
      {"import React from 'react';\nimport GridLayout from './index';\n\nconst Demo = () => {\n  const data = [\n    {\n      icon: 'add',\n      text: 1,\n    },\n    {\n      icon: 'apps',\n      text: 1,\n    },\n    {\n      icon: 'award',\n      text: 1,\n    },\n    {\n      icon: 'bell',\n      text: 1,\n    },\n    {\n      icon: 'camera',\n      text: 1,\n    },\n    {\n      icon: 'checkout',\n      text: 1,\n    },\n    {\n      icon: 'add',\n      text: 1,\n    },\n    {\n      icon: 'apps',\n      text: 1,\n    },\n    {\n      icon: 'award',\n      text: 1,\n    },\n    {\n      icon: 'bell',\n      text: 1,\n    },\n  ];\n  return (\n    <div>\n      <GridLayout data={data} columnNum={6} />\n      <br />\n      <GridLayout data={data} renderItem={(el, index) => <div>{`el: ${JSON.stringify(el)}, index: ${index}`}</div>} />\n    </div>\n  );\n};\n\nexport default Demo;\n"}
    </Highlight>
  </div>
);

export default codeDemo;
