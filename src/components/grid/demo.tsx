import React from 'react';
import { Row, Col } from '../index';
import './styles/index';

const style = {
  height: 38,
  backgroundColor: 'rgba(0,146,255,.75)',
  width: '100%',
  color: '#fff',
  textAlign: 'center',
};

const containerStyle = {
  width: 375,
  height: 548,
  backgroundColor: '#fafafa',
  padding: 10,
  overflow: 'scroll',
  borderRadius: 12,
  boxShadow: '#ebedf0 0 4px 12px',
};

const GridDemo = () => (
  <div>
    <p>设置不同屏幕大小的不同gutter</p>
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
    <p style={{ marginTop: 32 }}>设置不同屏幕大小的不同span, offset</p>
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
        xxs={{ span: 2, offset: 3 }}
        xs={{ span: 3, offset: 1 }}
        sm={{ span: 1, offset: 5 }}
      >
        <div style={style}>Abc</div>
      </Col>
      <Col
        span={6}
        xxl={{ span: 3, offset: 3 }}
        xl={{ span: 4, offset: 2 }}
        lg={{ span: 2, offset: 4 }}
        xxs={{ span: 2, offset: 3 }}
        xs={{ span: 2, offset: 3 }}
        sm={{ span: 1, offset: 5 }}
      >
        <div style={style}>Abc</div>
      </Col>
    </Row>
  </div>
);

export default GridDemo;
