import React from 'react';
import Avatar from './index';

const AvatarDemo = () => (
  <div style={{ padding: 100 }}>
    <Avatar>姓名</Avatar>
    <Avatar style={{ marginLeft: 100 }} size={48}>姓名</Avatar>
    <Avatar style={{ marginLeft: 100 }} size={64}>姓名</Avatar>
    <Avatar style={{ marginLeft: 100 }} size={96}>姓名</Avatar>
    <Avatar style={{ marginLeft: 100 }} size={128}>姓名</Avatar>
    <br />
    <br />
    <Avatar text="姓名" type="success" />
    <Avatar text="姓名" style={{ marginLeft: 100 }} size={48} type="error" />
    <Avatar text="姓名" style={{ marginLeft: 100 }} size={64} type="info" />
    <Avatar text="姓名" style={{ marginLeft: 100 }} size={96} type="success" />
    <Avatar text="姓名" style={{ marginLeft: 100 }} size={128} type="error" />
    <br />
    <br />
    <Avatar text="测试" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={48} type="error" />
    <Avatar text="测试" src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" style={{ marginLeft: 100 }} size={64} type="info" />
    <Avatar text="测试" src={<div>头像</div>} style={{ marginLeft: 100 }} size={96} type="success" />
    <Avatar text="测试" src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" style={{ marginLeft: 100 }} size={128} />
  </div>
);

export default AvatarDemo;
