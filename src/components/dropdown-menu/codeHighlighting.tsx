/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/no-useless-path-segments */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from 'react';
import Highlight from 'react-highlight';
import Icon from '../icon';

const codeDemo = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div style={{
        border: '1px solid #E8E7E7', padding: 12, textAlign: 'right',
      }}
      >
        <Icon type="productd-evelop" style={{ fontSize: 20 }} onClick={() => setOpen(!open)} />
      </div>
      {open && (
        <div style={{ border: '1px solid #E8E7E7', borderTop: 'none', background: '#fff' }}>
          <Highlight>
            {"/* eslint-disable react/jsx-closing-tag-location */\nimport React from 'react';\nimport DropdownMenu, { DropdownItem } from './index';\nimport Icon from '../icon';\nimport Button from '../button';\n\nexport default () => {\n  const option = [\n    {\n      text:\n      '类别1',\n      value: '0',\n      icon: <Icon type=\"user\" />,\n      card: <div>\n        哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈\n        哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈\n        哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈\n        哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈\n        哈哈哈哈哈哈哈哈哈哈哈\n        哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈\n        哈哈哈哈哈哈哈哈哈哈哈\n        哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈\n        哈哈哈哈哈哈哈哈哈哈哈\n      </div>,\n    },\n    { text: '类别2', value: '1', card: 'swdwdwed' },\n    { text: '类别3', value: '2', card: 'swdwdwed' },\n  ];\n\n  const option2 = [\n    { text: '默认排序', value: 'a' },\n    { text: '好评排序', value: 'b' },\n    { text: '销量排序', value: 'c' },\n  ];\n  const option3 = [\n    { text: '默认排序', value: 'a' },\n    { text: '好评排序', value: 'b' },\n    { text: '销量排序1', value: 'c' },\n    { text: '销量排序2', value: 'd' },\n    { text: '销量排序3', value: '3' },\n    { text: '销量排序4', value: '4' },\n    { text: '销量排序5', value: '1' },\n    { text: '销量排序6', value: '6' },\n    { text: '销量排序7', value: '0' },\n  ];\n  const onChange = (value: string) => {\n    console.log('--value', value);\n  };\n  const [toggle, setToggle] = React.useState(false);\n  const handleToggle = () => {\n    setToggle(true);\n  };\n\n  const handleButton = () => {\n    setToggle(false);\n  };\n\n  return (\n    <div style={{ margin: 64 }}>\n      <h1>基本用法</h1>\n      <DropdownMenu>\n        <DropdownItem value=\"b\" options={option2} />\n        <DropdownItem value=\"c\" options={option3} />\n      </DropdownMenu>\n      <div style={{ marginTop: 32 }}>\n        <h1>向上弹出</h1>\n        <DropdownMenu direction=\"up\">\n          <DropdownItem options={option2} onChange={onChange} />\n          <DropdownItem value=\"b\" options={option3} />\n          <DropdownItem options={option3} />\n        </DropdownMenu>\n      </div>\n      <div style={{ marginTop: 32 }}>\n        <h1>每级带有card选项</h1>\n        <DropdownMenu>\n          <DropdownItem value=\"0\" options={option} onChange={onChange} hasCard />\n          <DropdownItem value=\"b\" options={option2} />\n        </DropdownMenu>\n      </div>\n      <div style={{ marginTop: 32 }}>\n        <h1>禁止菜单</h1>\n        <DropdownMenu activeColor=\"rgb(25, 137, 250)\">\n          <DropdownItem options={option2} disabled />\n          <DropdownItem value=\"b\" options={option2} disabled />\n        </DropdownMenu>\n      </div>\n      <div style={{ marginTop: 32 }}>\n        <h1>自定义菜单内容</h1>\n        <DropdownMenu>\n          <DropdownItem options={option2} />\n          <DropdownItem title=\"筛选\" toggle={toggle} onClick={handleToggle}>\n            <div style={{ padding: '0px 32px' }}>\n              <div title=\"包邮\" style={{ height: 52 }}>包邮</div>\n              <div title=\"团购\" style={{ height: 52 }}>团购</div>\n              <Button type=\"primary\" onClick={handleButton}>和哈哈哈哈</Button>\n            </div>\n          </DropdownItem>\n        </DropdownMenu>\n      </div>\n    </div>\n  );\n};\n"}
          </Highlight>
        </div>
      )}
    </div>
  );
};

export default codeDemo;
