import React from 'react';
import {
  NavBar, Avatar, Icon, Divider,
} from '../index';

const NavDemo = () => {
  const style = {
    width: 24,
    height: 24,
    borderRadius: 8,
    backgroundColor: '#1C1D1D',
    marginRight: 20,
    display: 'inline-block',
  };
  const containerStyle = {
    width: 377,
    height: 548,
    backgroundColor: '#fafafa',
    padding: 10,
    overflow: 'scroll',
    borderRadius: 12,
    boxShadow: '#ebedf0 0 4px 12px',
  };
  return (
    <div style={containerStyle}>
      <NavBar
        icon={<Avatar size={32} text="姓名" />}
        title="用户姓名"
        rightText={(
          <div>
            <div style={style} />
            <div style={style} />
            <div style={style} />
          </div>
        )}
        typeSize="lg"
        style={{ marginBottom: 32 }}
      />
      <Divider style={{ margin: '32px 0px' }}>大标题导航</Divider>
      <NavBar
        leftArrow
        leftText="返回"
        title="标题"
        rightText="取消"
        style={{ marginBottom: 32 }}
        onRightClick={() => { console.log('111right'); }}
      />
      <Divider style={{ margin: '32px 0px' }}>自定义左右按钮标题导航</Divider>
      <NavBar
        leftArrow
        leftText="返回"
        title="标题"
        rightText="全选"
        rightTextColor="#F31D39"
        style={{ marginBottom: 32 }}
      />
      <Divider style={{ margin: '32px 0px' }}>自定义右按钮颜色标题导航</Divider>
      <NavBar
        leftArrow
        leftText="返回"
        title="标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题"
        rightText={<Icon style={{ fontSize: 16 }} type="more" />}
        style={{ marginBottom: 32 }}
      />
      <Divider style={{ margin: '32px 0px' }}>标题超出样式导航</Divider>
      <NavBar
        title="栏目标题"
        style={{ marginBottom: 32 }}
      />
      <Divider style={{ margin: '32px 0px' }}>一级栏目标题</Divider>
      <NavBar
        title="栏目标题"
        icon={(
          <div style={{
            width: 16, height: 16, backgroundColor: '#C8CCCC', borderRadius: 3,
          }}
          />
        )}
        typeSize="sm"
        style={{ marginBottom: 32 }}
      />
      <Divider style={{ margin: '32px 0px' }}>二级栏目标题</Divider>
      <NavBar
        title="栏目标题"
        icon={(
          <div style={{
            width: 16, height: 16, backgroundColor: '#C8CCCC', borderRadius: 3,
          }}
          />
        )}
        showBackTitle
        typeSize="xs"
        style={{ marginBottom: 32 }}
      />
      <Divider style={{ margin: '32px 0px' }}>展示后置标题导航</Divider>
      <NavBar home />
      <Divider style={{ margin: '32px 0px' }}>展示home</Divider>
    </div>
  );
};

export default NavDemo;
