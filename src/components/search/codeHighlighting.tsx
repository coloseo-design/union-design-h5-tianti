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
            {"import React from 'react';\nimport Search from './index';\n\nconst SearchDemo = () => (\n  <>\n    <Search placeholder=\"搜索\" onSubmit={(value) => alert(value)} />\n    <Search placeholder=\"搜索\" showCancelButton />\n    <Search placeholder=\"搜索\" showBackIcon />\n    <Search placeholder=\"搜索\" showBackIcon showCancelButton />\n  </>\n);\n\nexport default SearchDemo;\n"}
          </Highlight>
        </div>
      )}
    </div>
  );
};

export default codeDemo;
