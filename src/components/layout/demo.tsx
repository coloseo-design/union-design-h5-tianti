import React from 'react';
import { Layout } from '../index';

const { Card, Content } = Layout;

const containerStyle = {
  width: 377,
  height: 548,
  backgroundColor: '#fafafa',
  padding: 10,
  overflow: 'scroll',
  borderRadius: 12,
  boxShadow: '#ebedf0 0 4px 12px',
};
const LayoutDemo = () => (
  <div style={containerStyle}>
    <Layout type="card">
      <Card>
        Card布局
        <br />
        <br />
        <br />
        <br />
        <br />
      </Card>
      <Card>
        Card布局
        <br />
        <br />
        <br />
        <br />
        <br />
      </Card>
      <Card>
        Card布局
        <br />
        <br />
        <br />
        <br />
        <br />
      </Card>
    </Layout>
    <br />
    <Layout>
      <Content>
        普通布局
        <br />
        <br />
        <br />
        <br />
        <br />
      </Content>
      <Content>
        普通布局
        <br />
        <br />
        <br />
        <br />
        <br />
      </Content>
      <Content>
        普通布局
        <br />
        <br />
        <br />
        <br />
        <br />
      </Content>
    </Layout>
  </div>
);

export default LayoutDemo;
