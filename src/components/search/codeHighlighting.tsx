/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import Highlight from 'react-highlight';

const codeDemo = () => (
  <div>
    <Highlight>
      {"import React from 'react';\nimport Search from './index';\n\nconst SearchDemo = () => (\n  <>\n    <Search placeholder=\"搜索\" onSubmit={(value) => alert(value)} />\n    <Search placeholder=\"搜索\" showCancelButton />\n    <Search placeholder=\"搜索\" showBackIcon />\n    <Search placeholder=\"搜索\" showBackIcon showCancelButton />\n  </>\n);\n\nexport default SearchDemo;\n"}
    </Highlight>
  </div>
);

export default codeDemo;
