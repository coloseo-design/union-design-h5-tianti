import React from 'react';
import { Row, Col } from '../index';

const GridDemo = () => (
  <div>
    <div>span/gutter为数字</div>
    <Row
      align="top"
      gutter={{ xl: 8, lg: 16, md: 24 }}
      justify="space-between"
    >
      <Col span={6}>Abc</Col>
      <Col span={6}>def</Col>
    </Row>
    <div>增加🧍‍♂各个尺寸</div>
    <Row
      gutter={{ xl: 8, lg: 16, md: 24 }}
      align="top"
      justify="space-between"
    >
      <Col
        span={6}
        xxl={{ span: 3, offset: 3 }}
        xl={{ span: 4, offset: 2 }}
        lg={{ span: 2, offset: 4 }}
      >
        Abc
      </Col>
      <Col
        span={6}
        xxl={{ span: 3, offset: 3 }}
        xl={{ span: 4, offset: 2 }}
        lg={{ span: 2, offset: 4 }}
      >
        def
      </Col>
    </Row>
  </div>
);

export default GridDemo;
