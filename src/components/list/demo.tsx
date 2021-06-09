import React from 'react';
import { List, Icon, Button } from '../index';

const containerStyle = {
  width: 377,
  height: 548,
  backgroundColor: '#fafafa',
  padding: 10,
  overflow: 'scroll',
  borderRadius: 12,
  boxShadow: '#ebedf0 0 4px 12px',
};
const listDemo = () => {
  const { Item } = List;
  const data = [
    {
      name: 'Amy Farha',
      avatar_url: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      subtitle: 'Vice President',
    },
    {
      name: 'Chris Jackson',
      avatar_url: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      subtitle: 'Vice Chairman',
    },
    {
      name: '列表名称',
      avatar_url: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      subtitle: '所属公司',
    },
    {
      name: '列表名称1',
      avatar_url: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      subtitle: '公司名称',
    },
  ];
  const data1 = [
    {
      name: '张三',
      job: '总经理',
      phone: '1525252622',
      avatar_url: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      company: '所属公司名称',
    },
    {
      name: '张三',
      job: '总经理',
      phone: '1525252622',
      avatar_url: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      company: '所属公司名称',
    },
    {
      name: '张三',
      job: '总经理',
      phone: '1525252622',
      avatar_url: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      company: '所属公司名称',
    },
    {
      name: '张三',
      job: '总经理',
      phone: '1525252622',
      avatar_url: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      company: '所属公司名称',
    },
  ];
  const data2 = [
    {
      title: '评论内评论内容评论内容评论内容评论内容评论内容评论内容评论内评论内评论内',
      subtitle: '公文-云公文 2021/02/8',
      extra:
  <div>
    <img
      width={186}
      alt="logo"
      src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
    />
  </div>
      ,
    },
    {
      title: '评论内容评论内容评论内容评论内容评论内容评论内容评论内',
      subtitle: '公文-云公文 2021/02/8',
      extra:
  <div>
    <img
      width={186}
      alt="logo"
      src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
    />
  </div>,
    },
  ];
  return (
    <div style={containerStyle}>
      <h1>基础列表</h1>
      <List
        dataSource={data}
        itemLayout="vertical"
        renderItem={(item, index) => (
          <Item
            arrow={index === data.length - 1 ? <Button size="small">按钮</Button> : 'arrow'}
            onIconClick={() => { console.log('----'); }}
          >
            <Item.Avatar size={24} shape="square" style={{ backgroundColor: 'gray' }} />
            <Item.Content>
              <Item.Title>{item.name}</Item.Title>
            </Item.Content>
          </Item>
        )}
      />
      <div>
        <h1>应用列表</h1>
        <List
          dataSource={data}
          style={{ marginTop: 64 }}
          renderItem={(item) => (
            <Item>
              <Item.Avatar size={48} shape="square" style={{ backgroundColor: '#E53F3F' }}>
                <Icon type="add-to-addressbook" style={{ color: '#fff' }} />
              </Item.Avatar>
              <Item.Content>
                <Item.Title>{item.name}</Item.Title>
                <Item.SubTitle>{item.subtitle}</Item.SubTitle>
              </Item.Content>
            </Item>
          )}
        />
      </div>
      <div>
        <h1>通讯录列表</h1>
        <List
          dataSource={data1}
          style={{ marginTop: 64 }}
          renderItem={(item) => (
            <Item>
              <Item.Avatar size={48} src={item.avatar_url} />
              <Item.Content>
                <Item.Title>
                  <span>{item.name}</span>
                  <span style={{ paddingLeft: 32 }}>{item.phone}</span>
                </Item.Title>
                <Item.SubTitle style={{ marginTop: 8 }}>
                  <span>{item.job}</span>
                  <span style={{ paddingLeft: 32 }}>{item.company}</span>
                </Item.SubTitle>
              </Item.Content>
            </Item>
          )}
        />
      </div>
      <div>
        <h1>新闻公告</h1>
        <List
          dataSource={data2}
          style={{ marginTop: 64 }}
          renderItem={(item) => (
            <Item>
              <Item.Content>
                <Item.Title style={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
                >
                  {item.title}
                </Item.Title>
                <Item.SubTitle>{item.subtitle}</Item.SubTitle>
                <img
                  style={{ marginTop: 12 }}
                  width="100%"
                  alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
              </Item.Content>
            </Item>
          )}
        />
      </div>
      <div>
        <h1>横向展示</h1>
        <List
          dataSource={data2}
          style={{ marginTop: 64 }}
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
      </div>
      <div>
        <h1>评论样式</h1>
        <List
          dataSource={data2}
          renderItem={(item) => (
            <Item>
              <Item.Avatar size={48} text="永民" />
              <Item.Content>
                <Item.SubTitle>{item.subtitle}</Item.SubTitle>
                <Item.Title style={{ marginTop: 16 }}>{item.title}</Item.Title>
                <Item.SubTitle style={{ marginTop: 16 }}>一天前回复</Item.SubTitle>
              </Item.Content>
            </Item>
          )}
        />
      </div>
    </div>
  );
};
export default listDemo;
