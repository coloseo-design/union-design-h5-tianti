import React from 'react';
import { Avatar } from '../index';
import './styles/index';

const containerStyle = {
  width: 377,
  height: 548,
  backgroundColor: '#fafafa',
  padding: 10,
  overflow: 'scroll',
  borderRadius: 12,
  boxShadow: '#ebedf0 0 4px 12px',
};
const AvatarDemo = () => (
  <div style={containerStyle}>
    <Avatar>姓名</Avatar>
    <Avatar style={{ marginLeft: 100 }} size={48}>姓名</Avatar>
    <Avatar style={{ marginLeft: 100 }} size={64}>姓名</Avatar>
    <Avatar style={{ marginLeft: 100 }} size={96}>姓名</Avatar>
    <Avatar style={{ marginLeft: 100 }} size={128}>姓名</Avatar>
    <br />
    <br />
    <Avatar text="姓名" style={{ marginLeft: 100 }} size={40} type="error" />
    <Avatar text="姓名" style={{ marginLeft: 100 }} size={40} type="info" />
    <Avatar text="姓名" style={{ marginLeft: 100 }} size={40} type="success" />
    <Avatar text="姓名" style={{ marginLeft: 100 }} size={40} type="error" />
    <br />
    <br />
    <Avatar text="测试" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={48} type="error" />
    <Avatar text="测试" src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" style={{ marginLeft: 100 }} size={64} type="info" />
    <Avatar text="测试" src={<div>头像</div>} style={{ marginLeft: 100 }} size={96} type="success" />
    <Avatar text="测试" src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" style={{ marginLeft: 100 }} size={128} />
  </div>
);

export default AvatarDemo;
