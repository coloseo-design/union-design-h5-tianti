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
            {"import React from 'react';\nimport NumberKeyBoard from './index';\nimport Button from '../button';\nimport Toast from '../toast';\n\nconst KeyBoardDemo = () => {\n  const [show, setShow] = React.useState(false);\n  const [show1, setShow1] = React.useState(false);\n  const [show2, setShow2] = React.useState(false);\n  const [show3, setShow3] = React.useState(false);\n  const handleDelete = (value?: string) => {\n    console.log('--value', value);\n  };\n\n  const handleClick = (e: any) => {\n    e.stopPropagation();\n    setShow(true);\n    setShow1(false);\n    setShow2(false);\n    setShow3(false);\n  };\n  const handleClick1 = (e: any) => {\n    e.stopPropagation();\n    setShow(false);\n    setShow1(true);\n    setShow2(false);\n    setShow3(false);\n  };\n  const handleClick2 = (e: any) => {\n    e.stopPropagation();\n    setShow(false);\n    setShow1(false);\n    setShow2(true);\n    setShow3(false);\n  };\n  const handleClick3 = (e: any) => {\n    e.stopPropagation();\n    setShow(false);\n    setShow1(false);\n    setShow2(false);\n    setShow3(true);\n  };\n\n  const handleInput = (value: unknown) => {\n    Toast.info({ content: `${value}`, mask: false });\n  };\n\n  return (\n    <div style={{ margin: 64 }}>\n      <Button onClick={handleClick}>默认键盘1 </Button>\n      <Button onClick={handleClick1}>默认键盘2</Button>\n      <Button onClick={handleClick2}>身份证键盘</Button>\n      <Button onClick={handleClick3}>带title的键盘</Button>\n      <NumberKeyBoard show={show} onBlur={() => setShow(false)} onInput={handleInput} />\n      <NumberKeyBoard show={show1} complete onBlur={() => setShow1(false)} onInput={handleInput} />\n      <NumberKeyBoard show={show2} extraKey=\"X\" onBlur={() => setShow2(false)} onInput={handleInput} />\n      <NumberKeyBoard\n        show={show3}\n        title=\"标题\"\n        onBlur={() => setShow3(false)}\n        value=\"12345\"\n        onDelete={handleDelete}\n        onInput={handleInput}\n      />\n    </div>\n  );\n};\n\nexport default KeyBoardDemo;\n"}
          </Highlight>
        </div>
      )}
    </div>
  );
};

export default codeDemo;
