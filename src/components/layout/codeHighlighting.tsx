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
            {"import React from 'react';\nimport Layout from './index';\n\nconst { Card, Content } = Layout;\n\nconst LayoutDemo = () => (\n  <>\n    <Layout type=\"card\">\n      <Card>\n        Card布局\n        <br />\n        <br />\n        <br />\n        <br />\n        <br />\n      </Card>\n      <Card>\n        Card布局\n        <br />\n        <br />\n        <br />\n        <br />\n        <br />\n      </Card>\n      <Card>\n        Card布局\n        <br />\n        <br />\n        <br />\n        <br />\n        <br />\n      </Card>\n    </Layout>\n    <br />\n    <Layout>\n      <Content>\n        普通布局\n        <br />\n        <br />\n        <br />\n        <br />\n        <br />\n      </Content>\n      <Content>\n        普通布局\n        <br />\n        <br />\n        <br />\n        <br />\n        <br />\n      </Content>\n      <Content>\n        普通布局\n        <br />\n        <br />\n        <br />\n        <br />\n        <br />\n      </Content>\n    </Layout>\n  </>\n);\n\nexport default LayoutDemo;\n"}
          </Highlight>
        </div>
      )}
    </div>
  );
};

export default codeDemo;
