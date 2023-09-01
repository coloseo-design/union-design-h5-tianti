import React, { useState } from 'react';
import { List, Icon, Button, Checkbox, Radio } from '../index';
import './styles/index';
import '../button/styles/index';
import '../icon/styles/index';

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
  const [checks, setCheck] = useState<string[]>([]);

  const data3 = Array.from({ length: 5 }).map((_, key) => key + 1);
  return (
    <div style={{ margin: '0px -12px'}}>
      <h1>一般列表 size="default"</h1>
      <List
        dataSource={data3}
        itemLayout="vertical"
        renderItem={(item) => (
          <Item key={item}>
            <Item.Content>
              <Item.Title>列表内容</Item.Title>
            </Item.Content>
          </Item>
        )}
      />
      <h1>一般列表1</h1>
      <List
        dataSource={data3}
        itemLayout="vertical"
        renderItem={(item) => (
          <Item key={item} centered>
            <Item.CheckType className="check-test">
              <Checkbox />
            </Item.CheckType>
            <Item.Content>
              <Item.Title>列表内容</Item.Title>
            </Item.Content>
          </Item>
        )}
      />
      <h1>中列表 size="md"</h1>
      <List
        dataSource={data3}
        itemLayout="vertical"
        size="md"
        renderItem={(item, index) => (
          <Item key={item} centered arrow='arrow'>
           {index === data3.length - 1 && <Item.CheckType className="check-test">
              <Checkbox />
            </Item.CheckType>}
            <Item.Content>
              <Item.Title>列表内容</Item.Title>
            </Item.Content>
          </Item>
        )}
      />
      <h1>大列表</h1>
      <List
        dataSource={data.slice(0, 2)}
        size="lg"
        itemLayout="vertical"
        className="list-test"
        renderItem={(_, index) => (
          <Item
            arrow='arrow'
            centered
            className="item-test"
          >
            {index === 1 && <Item.CheckType className="check-test">
              <Checkbox />
            </Item.CheckType>}
            <Item.Content className="content-test">
              <Item.SubTitle className='subtitle-test'>标题内容</Item.SubTitle>
              <Item.Title className='title-test'>信息内容</Item.Title>
            </Item.Content>
          </Item>
        )}
      />
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
              <Item.Avatar size={32} text="永民" />
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
