/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import Highlight from 'react-highlight';

const codeDemo = () => (
  <div>
    <Highlight>
      {"import React from 'react';\nimport { Row, Col } from '../index';\n\nconst GridDemo = () => (\n  <div>\n    <div>span/gutter为数字</div>\n    <Row\n      align=\"top\"\n      gutter={{ xl: 8, lg: 16, md: 24 }}\n      justify=\"space-between\"\n    >\n      <Col span={6}>Abc</Col>\n      <Col span={6}>def</Col>\n    </Row>\n    <div>增加🧍‍♂各个尺寸</div>\n    <Row\n      gutter={{ xl: 8, lg: 16, md: 24 }}\n      align=\"top\"\n      justify=\"space-between\"\n    >\n      <Col\n        span={6}\n        xxl={{ span: 3, offset: 3 }}\n        xl={{ span: 4, offset: 2 }}\n        lg={{ span: 2, offset: 4 }}\n      >\n        Abc\n      </Col>\n      <Col\n        span={6}\n        xxl={{ span: 3, offset: 3 }}\n        xl={{ span: 4, offset: 2 }}\n        lg={{ span: 2, offset: 4 }}\n      >\n        def\n      </Col>\n    </Row>\n  </div>\n);\n\nexport default GridDemo;\n"}
    </Highlight>
  </div>
);

export default codeDemo;
