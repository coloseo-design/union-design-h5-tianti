/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import Highlight from 'react-highlight';

const codeDemo = () => (
  <div>
    <Highlight>
      {"import React from 'react';\nimport Avatar from './index';\n\nconst AvatarDemo = () => (\n  <div style={{ padding: 100 }}>\n    <Avatar>姓名</Avatar>\n    <Avatar style={{ marginLeft: 100 }} size={48}>姓名</Avatar>\n    <Avatar style={{ marginLeft: 100 }} size={64}>姓名</Avatar>\n    <Avatar style={{ marginLeft: 100 }} size={96}>姓名</Avatar>\n    <Avatar style={{ marginLeft: 100 }} size={128}>姓名</Avatar>\n    <br />\n    <br />\n    <Avatar text=\"姓名\" type=\"success\" />\n    <Avatar text=\"姓名\" style={{ marginLeft: 100 }} size={48} type=\"error\" />\n    <Avatar text=\"姓名\" style={{ marginLeft: 100 }} size={64} type=\"info\" />\n    <Avatar text=\"姓名\" style={{ marginLeft: 100 }} size={96} type=\"success\" />\n    <Avatar text=\"姓名\" style={{ marginLeft: 100 }} size={128} type=\"error\" />\n    <br />\n    <br />\n    <Avatar text=\"测试\" src=\"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png\" size={48} type=\"error\" />\n    <Avatar text=\"测试\" src=\"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png\" style={{ marginLeft: 100 }} size={64} type=\"info\" />\n    <Avatar text=\"测试\" src={<div>头像</div>} style={{ marginLeft: 100 }} size={96} type=\"success\" />\n    <Avatar text=\"测试\" src=\"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png\" style={{ marginLeft: 100 }} size={128} />\n  </div>\n);\n\nexport default AvatarDemo;\n"}
    </Highlight>
  </div>
);

export default codeDemo;
