import React from 'react';
import {
  NavBar, Avatar, Icon, Divider, Loading, Capsule,
} from '../index';
import './styles/index';
import '../avatar/styles/index';
import '../icon/styles/index';
import '../divider/styles/index';

const NavDemo = () => {
  return (
    <div style={{ background: 'rgb(245, 246, 246)'}}>
      <NavBar.Header
        icon={<Avatar size={32} text="姓名" />}
        title="姓名"
        rightText={(
          <div style={{ fontSize: 24, color: '#646566' }}>
            <Icon type="apps-line" />
            <Icon style={{ margin: '0px 16px'}} type="remind-line" />
            <Icon type="search-line" />
          </div>
        )}
        style={{ marginBottom: 32 }}
      />
            <NavBar.Header
        icon={<Avatar size={32} text="姓名" />}
        title="姓名"
        rightText={(
          <div style={{ fontSize: 24, color: '#646566' }}>
            <Icon type="apps-line" />
            <Icon style={{ marginLeft: 16 }} type="remind-line" />
          </div>
        )}
        style={{ marginBottom: 32 }}
      />
      <Divider style={{ margin: '32px 0px' }}>基本样式</Divider>
      <NavBar
        leftArrow
        title="标题"
        style={{ marginBottom: 32 }}
        onRightClick={() => { console.log('111right'); }}
      />
        <NavBar
        leftArrow
        title="标题"
        rightText="取消"
        style={{ marginBottom: 32 }}
      />
      <Divider style={{ margin: '32px 0px' }}>自定义左右按钮标题导航</Divider>
      <NavBar
        leftArrow
        leftText="返回"
        title="标题"
        rightText="确定"
        rightTextColor="#F31D39"
        style={{ marginBottom: 32 }}
      />
      <Divider style={{ margin: '32px 0px' }}>自定义右按钮颜色标题导航</Divider>
      <NavBar
        leftArrow
        title="标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题"
        rightText={<Icon style={{ fontSize: 16 }} type="more" />}
        style={{ marginBottom: 32 }}
      />
      <Divider style={{ margin: '32px 0px' }}>标题超出样式导航</Divider>
      <NavBar
        leftArrow
        title={<div style={{ display: 'flex'}}>
          <Loading type="spinner" />
          <span>标题</span>
        </div>}
        style={{ marginBottom: 32 }}
      />
      <Divider style={{ margin: '32px 0px' }}>加在样式</Divider>
      <NavBar
        leftArrow
        title="标题文字"
        style={{ marginBottom: 32 }}
        rightText={<Capsule />}
      />
      <NavBar
        title="标题文字"
        style={{ marginBottom: 32 }}
        rightText={<Capsule />}
      />
      <Divider style={{ margin: '32px 0px' }}>第三方应用导航</Divider>
      {/* <NavBar
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
      /> */}

    </div>
  );
};

export default NavDemo;
