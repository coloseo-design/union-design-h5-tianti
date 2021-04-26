import React from 'react';
import Layout from './index';

const { Card, Content } = Layout;

const LayoutDemo = () => (
  <>
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
  </>
);

export default LayoutDemo;
