/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import Highlight from 'react-highlight';

const codeDemo = () => (
  <div>
    <Highlight>
      {"import React from 'react';\nimport Layout from './index';\n\nconst { Card, Content } = Layout;\n\nconst LayoutDemo = () => (\n  <>\n    <Layout type=\"card\">\n      <Card>\n        Card布局\n        <br />\n        <br />\n        <br />\n        <br />\n        <br />\n      </Card>\n      <Card>\n        Card布局\n        <br />\n        <br />\n        <br />\n        <br />\n        <br />\n      </Card>\n      <Card>\n        Card布局\n        <br />\n        <br />\n        <br />\n        <br />\n        <br />\n      </Card>\n    </Layout>\n    <br />\n    <Layout>\n      <Content>\n        普通布局\n        <br />\n        <br />\n        <br />\n        <br />\n        <br />\n      </Content>\n      <Content>\n        普通布局\n        <br />\n        <br />\n        <br />\n        <br />\n        <br />\n      </Content>\n      <Content>\n        普通布局\n        <br />\n        <br />\n        <br />\n        <br />\n        <br />\n      </Content>\n    </Layout>\n  </>\n);\n\nexport default LayoutDemo;\n"}
    </Highlight>
  </div>
);

export default codeDemo;
