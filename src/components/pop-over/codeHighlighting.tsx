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
            {"/* eslint-disable react/button-has-type */\n/* eslint-disable react/state-in-constructor */\nimport React from 'react';\nimport Popover from './index';\nimport Button from '../button';\n\nconst popoverDemo = () => (\n  <div style={{ padding: 100 }}>\n    <Popover content=\"气泡弹出框内容\" placement=\"topLeft\" style={{ paddingLeft: 80 }} color=\"black\">\n      <Button>top Left black</Button>\n    </Popover>\n    <Popover content=\"气泡弹出框内容\" placement=\"top\" style={{ paddingLeft: 80 }}>\n      <Button>top</Button>\n    </Popover>\n    <Popover content=\"气泡弹出框内容\" placement=\"topRight\" style={{ paddingLeft: 80 }} color=\"red\">\n      <Button>top Right red</Button>\n    </Popover>\n    <br />\n    <br />\n    <br />\n    <br />\n    <br />\n    <br />\n    <Popover content=\"气泡弹出框内容\" placement=\"bottomLeft\" style={{ paddingLeft: 80 }} color=\"black\">\n      <Button>bottom Left black</Button>\n    </Popover>\n    <Popover content=\"气泡弹出框内容\" placement=\"bottom\" style={{ paddingLeft: 80 }}>\n      <Button>bottom</Button>\n    </Popover>\n    <Popover content=\"气泡弹出框内容\" placement=\"bottomRight\" style={{ paddingLeft: 80 }} color=\"red\">\n      <Button>bottom Right red</Button>\n    </Popover>\n  </div>\n);\n\nexport default popoverDemo;\n"}
          </Highlight>
        </div>
      )}
    </div>
  );
};

export default codeDemo;
