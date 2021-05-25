/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import Highlight from 'react-highlight';

const codeDemo = () => (
  <div>
    <Highlight>
      {"import React from 'react';\nimport NavBar from './index';\nimport Avatar from '../avatar';\nimport Icon from '../icon';\n\nconst NavDemo = () => {\n  const style = {\n    width: 24,\n    height: 24,\n    borderRadius: 8,\n    backgroundColor: '#1C1D1D',\n    marginRight: 20,\n    display: 'inline-block',\n  };\n  return (\n    <div style={{ margin: 64 }}>\n      <NavBar\n        icon={<Avatar size={32} text=\"姓名\" />}\n        title=\"用户姓名\"\n        rightText={(\n          <div>\n            <div style={style} />\n            <div style={style} />\n            <div style={style} />\n          </div>\n        )}\n        typeSize=\"lg\"\n        style={{ marginBottom: 32 }}\n      />\n      <NavBar\n        leftArrow\n        leftText=\"返回\"\n        title=\"标题\"\n        rightText=\"取消\"\n        style={{ marginBottom: 32 }}\n        onRightClick={() => { console.log('111right'); }}\n      />\n      <NavBar\n        leftArrow\n        leftText=\"返回\"\n        title=\"标题\"\n        rightText=\"全选\"\n        rightTextColor=\"#F31D39\"\n        style={{ marginBottom: 32 }}\n      />\n      <NavBar\n        leftArrow\n        leftText=\"返回\"\n        title=\"标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题\"\n        rightText={<Icon style={{ fontSize: 16 }} type=\"more\" />}\n        style={{ marginBottom: 32 }}\n      />\n      <NavBar\n        title=\"栏目标题\"\n        style={{ marginBottom: 32 }}\n      />\n      <NavBar\n        title=\"栏目标题\"\n        icon={(\n          <div style={{\n            width: 16, height: 16, backgroundColor: '#C8CCCC', borderRadius: 3,\n          }}\n          />\n        )}\n        typeSize=\"sm\"\n        style={{ marginBottom: 32 }}\n      />\n      <NavBar\n        title=\"栏目标题\"\n        icon={(\n          <div style={{\n            width: 16, height: 16, backgroundColor: '#C8CCCC', borderRadius: 3,\n          }}\n          />\n        )}\n        showBackTitle\n        typeSize=\"xs\"\n        style={{ marginBottom: 32 }}\n      />\n      <NavBar home />\n    </div>\n  );\n};\n\nexport default NavDemo;\n"}
    </Highlight>
  </div>
);

export default codeDemo;
