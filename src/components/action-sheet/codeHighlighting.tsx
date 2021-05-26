/* eslint-disable react/react-in-jsx-scope */
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
            {"/* eslint-disable @typescript-eslint/no-explicit-any */\nimport React, { useState } from 'react';\nimport ActionSheet from './index';\nimport Button from '../button';\n// import Icon from '../icon';\n\nconst DemoAction = () => {\n  const [visible, setVisible] = useState(false);\n  const [visible1, setVisible1] = useState(false);\n  const [visible2, setVisible2] = useState(false);\n  const [visible3, setVisible3] = useState(false);\n  const [visible4, setVisible4] = useState(false);\n  const options = [\n    {\n      name: '操作一',\n      mainOperation: true,\n    },\n    {\n      name: '操作二',\n    },\n    {\n      name: '操作三',\n    },\n    {\n      name: '操作四',\n    },\n  ];\n  const option1 = [\n    { name: '微信', src: 'https://img01.yzcdn.cn/vant/custom-icon-light.png' },\n    { name: '微博', src: 'https://img01.yzcdn.cn/vant/custom-icon-water.png' },\n    { name: '复制链接', src: 'https://img01.yzcdn.cn/vant/custom-icon-fire.png' },\n    { name: '分享海报', src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png' },\n    { name: '头像', src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' },\n    { name: '图片', src: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png', type: 'img' },\n    { name: 'logo', src: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', type: 'img' },\n    { name: 'react', src: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg', type: 'img' },\n    { name: '百度图片嘿嘿嘿444444党的十五大的', src: 'https://t7.baidu.com/it/u=1819248061,230866778&fm=193&f=GIF', type: 'img' },\n    { name: '图片', src: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png', type: 'img' },\n    { name: 'logo', src: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', type: 'img' },\n    { name: 'react', src: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg', type: 'img' },\n    { name: '百度图片嘿嘿嘿444444党的十五大的', src: 'https://t7.baidu.com/it/u=1819248061,230866778&fm=193&f=GIF', type: 'img' },\n  ];\n  return (\n    <div style={{ margin: 64 }}>\n      <Button onClick={() => { setVisible(true); }}>基本样式</Button>\n      <Button style={{ margin: '0px 24px' }} onClick={() => setVisible1(true)}>上传面板</Button>\n      <Button onClick={() => setVisible2(true)}>分享面板</Button>\n      <Button onClick={() => setVisible3(true)}>多行分享面板</Button>\n      <Button onClick={() => setVisible4(true)}>指定每行数量面板</Button>\n      <ActionSheet\n        visible={visible}\n        onCancel={() => setVisible(false)}\n        options={options}\n      />\n      <ActionSheet\n        visible={visible1}\n        onCancel={() => setVisible1(false)}\n        options={option1}\n        type=\"upload\"\n        title=\"上传面板\"\n      />\n      <ActionSheet\n        visible={visible2}\n        onCancel={() => setVisible2(false)}\n        options={option1.filter((i: any) => i.type !== 'img')}\n        type=\"share\"\n        title=\"分享到：\"\n      />\n      <ActionSheet\n        visible={visible3}\n        onCancel={() => setVisible3(false)}\n        options={option1.filter((i: any) => i.type !== 'img')}\n        type=\"share\"\n        title=\"分享到：\"\n        multiple\n      />\n      <ActionSheet\n        visible={visible4}\n        onCancel={() => setVisible4(false)}\n        options={option1}\n        type=\"upload\"\n        title=\"多行分享：\"\n        multiple\n        currentCol={{ image: 5, icon: 5 }}\n      />\n    </div>\n\n  );\n};\n\nexport default DemoAction;\n"}
          </Highlight>
        </div>
      )}
    </div>
  );
};

export default codeDemo;
