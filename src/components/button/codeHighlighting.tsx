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
            {"import React from 'react';\nimport Button from './index';\n\nconst ButtonDemo: React.FC<unknown> = () => (\n  <div style={{ padding: 5 }}>\n    <div style={{ marginBottom: 10 }}>\n      <Button type=\"default\" style={{ marginRight: 10 }}>default</Button>\n      <Button type=\"primary\" style={{ marginRight: 10 }}>primary</Button>\n      <Button type=\"danger\" style={{ marginRight: 10 }}>danger</Button>\n      <Button type=\"dashed\" style={{ marginRight: 10 }}>dashed</Button>\n      <Button type=\"link\" style={{ marginRight: 10 }}>link</Button>\n      <Button type=\"ghost\" style={{ marginRight: 10 }}>ghost</Button>\n      <Button type=\"primary\" style={{ marginRight: 10 }} loading>loading</Button>\n      <Button type=\"primary\" style={{ marginRight: 10 }} disabled>disabled</Button>\n    </div>\n\n    <div style={{ marginBottom: 10 }}>\n      <Button type=\"default\" style={{ marginRight: 10 }} size=\"large\">default</Button>\n      <Button type=\"primary\" style={{ marginRight: 10 }} size=\"large\">primary</Button>\n      <Button type=\"danger\" style={{ marginRight: 10 }} size=\"large\">danger</Button>\n      <Button type=\"dashed\" style={{ marginRight: 10 }} size=\"large\">dashed</Button>\n      <Button type=\"link\" style={{ marginRight: 10 }} size=\"large\">link</Button>\n      <Button type=\"ghost\" style={{ marginRight: 10 }} size=\"large\">ghost</Button>\n      <Button type=\"primary\" style={{ marginRight: 10 }} size=\"large\" loading>loading</Button>\n      <Button type=\"primary\" style={{ marginRight: 10 }} size=\"large\" disabled>disabled</Button>\n    </div>\n\n    <div style={{ marginBottom: 10 }}>\n      <Button type=\"default\" style={{ marginRight: 10 }} size=\"small\">default</Button>\n      <Button type=\"primary\" style={{ marginRight: 10 }} size=\"small\">primary</Button>\n      <Button type=\"danger\" style={{ marginRight: 10 }} size=\"small\">danger</Button>\n      <Button type=\"dashed\" style={{ marginRight: 10 }} size=\"small\">dashed</Button>\n      <Button type=\"link\" style={{ marginRight: 10 }} size=\"small\">link</Button>\n      <Button type=\"ghost\" style={{ marginRight: 10 }} size=\"small\">ghost</Button>\n      <Button type=\"primary\" style={{ marginRight: 10 }} size=\"small\" loading>loading</Button>\n      <Button type=\"primary\" style={{ marginRight: 10 }} size=\"small\" disabled>disabled</Button>\n    </div>\n  </div>\n);\n\nexport default ButtonDemo;\n"}
          </Highlight>
        </div>
      )}
    </div>
  );
};

export default codeDemo;
