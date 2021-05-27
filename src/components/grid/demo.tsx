import React from 'react';
import { Row, Col } from '../index';

const style = {
  height: 38,
  backgroundColor: 'rgba(0,146,255,.75)',
  width: '100%',
  color: '#fff',
  textAlign: 'center',
};

const GridDemo = () => (
  <div>
    <h2>设置不同屏幕大小的不同gutter</h2>
    <Row
      align="top"
      gutter={{ xl: 8, lg: 16, md: 24 }}
      justify="space-between"
    >
      <Col span={6}>
        <div style={style}>Abc</div>
      </Col>
      <Col span={6}>
        <div style={style}>Abc</div>
      </Col>
    </Row>
    <h2 style={{ marginTop: 32 }}>设置不同屏幕大小的不同span, offset</h2>
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
        <div style={style}>Abc</div>
      </Col>
      <Col
        span={6}
        xxl={{ span: 3, offset: 3 }}
        xl={{ span: 4, offset: 2 }}
        lg={{ span: 2, offset: 4 }}
      >
        <div style={style}>Abc</div>
      </Col>
    </Row>
  </div>
);

export default GridDemo;
