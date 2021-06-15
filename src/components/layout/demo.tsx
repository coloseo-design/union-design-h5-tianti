import React from 'react';
import { Layout, List } from '../index';

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
const data = [
  {
    name: 'Amy Farha',
    title: '某某某提交的报销审批审',
    time: 'yyyy.mm.dd 00:00',
    source: '通知来源',
    extra: (
      <div style={{ width: 120, height: 88, background: 'gray' }} />
    ),
    content: (
      <>
        <div>
          标题字段：内容内容内容
        </div>
        <div>
          标题字段：内容内容内容
        </div>
        <div>
          标题字段：内容内容内容
        </div>
      </>
    ),
  },
  {
    name: 'Amy Farha',
    title: '某某某提交的报销审批审',
    time: 'yyyy.mm.dd 00:00',
    source: '通知来源',
    content: (
      <>
        <div>
          标题字段：内容内容内容
        </div>
        <div>
          标题字段：内容内容内容
        </div>
        <div>
          标题字段：内容内容内容
        </div>
      </>
    ),
    extra: (
      <div style={{ width: 120, height: 88, background: 'gray' }} />
    ),
  },
];

const { Item } = List;
const LayoutDemo = () => (
  <div style={containerStyle}>
    <Layout type="card">
      <Card>
        <List
          dataSource={data}
          itemLayout="vertical"
          renderItem={(item, index) => (
            <Item>
              <Item.Content>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                  <Item.SubTitle>{item.time}</Item.SubTitle>
                  <Item.SubTitle>{item.source}</Item.SubTitle>
                </div>
                <Item.Title style={{ marginTop: 8 }}>{item.title}</Item.Title>
                <div style={{ marginTop: 8 }}>
                  {item.content}
                </div>
              </Item.Content>
            </Item>
          )}
        />
      </Card>
      <Card>
        <List
          dataSource={data}
          itemLayout="vertical"
          renderItem={(item, index) => (
            <Item>
              <Item.Content>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                  <Item.SubTitle>{item.time}</Item.SubTitle>
                  <Item.SubTitle>{item.source}</Item.SubTitle>
                </div>
                <Item.Title style={{ marginTop: 8 }}>{item.title}</Item.Title>
                <div style={{ marginTop: 8 }}>
                  {item.content}
                </div>
              </Item.Content>
            </Item>
          )}
        />
      </Card>
      <Card>
        <List
          dataSource={data}
          itemLayout="vertical"
          renderItem={(item, index) => (
            <Item>
              <Item.Content>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                  <Item.SubTitle>{item.time}</Item.SubTitle>
                  <Item.SubTitle>{item.source}</Item.SubTitle>
                </div>
                <Item.Title style={{ marginTop: 8 }}>{item.title}</Item.Title>
                <div style={{ marginTop: 8 }}>
                  {item.content}
                </div>
              </Item.Content>
            </Item>
          )}
        />
      </Card>
    </Layout>
    <br />
    <Layout>
      <Content>
        <List
          dataSource={data}
          itemLayout="horizontal"
          renderItem={(item) => (
            <Item
              extra={item.extra}
            >
              <Item.Content>
                <Item.Title>{item.title}</Item.Title>
                <Item.SubTitle>{item.subtitle}</Item.SubTitle>
              </Item.Content>
            </Item>
          )}
        />
      </Content>
    </Layout>
  </div>
);

export default LayoutDemo;
