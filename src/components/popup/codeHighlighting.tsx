/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import Highlight from 'react-highlight';

const codeDemo = () => (
  <div>
    <Highlight>
      {"import React, { useState } from 'react';\nimport Popup from './index';\nimport Button from '../button';\n\nconst PopupDemo = () => {\n  const [vmodel, setModal] = useState(false);\n  const [vmodel1, setVmodel1] = useState(false);\n  const [vmodel2, setVmodel2] = useState(false);\n  const [vmodel3, setVmodel3] = useState(false);\n  const [vmodel4, setVmodel4] = useState(false);\n  const [vmodel5, setVmodel5] = useState(false);\n  const [vmodel6, setVmodel6] = useState(false);\n\n  const handleCancel = () => {\n    setModal(false);\n    setVmodel6(false);\n    setVmodel5(false);\n    setVmodel4(false);\n    setVmodel3(false);\n    setVmodel2(false);\n    setVmodel1(false);\n  };\n\n  const test = (\n    <div style={{ textAlign: 'center' }}>\n      <p>这是一条内容哈哈哈哈哈哈</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容</p>\n      <p>这是一条内容嘿嘿嘿</p>\n    </div>\n  );\n  return (\n    <div>\n      <h1>基础用法</h1>\n      <Button onClick={() => setModal(true)}>基础</Button>\n      <h1>顶部弹出</h1>\n      <Button onClick={() => setVmodel1(true)}>顶部弹出</Button>\n      <h1>底部弹出</h1>\n      <Button onClick={() => setVmodel2(true)}>底部弹出</Button>\n      <h1>左侧弹出</h1>\n      <Button onClick={() => setVmodel3(true)}>左侧弹出</Button>\n      <h1>右侧弹出</h1>\n      <Button onClick={() => setVmodel4(true)}>右侧弹出</Button>\n      <h1>自定义弹出footer</h1>\n      <Button onClick={() => setVmodel5(true)}>自定义弹出footer</Button>\n      <h1>自定义弹出header</h1>\n      <Button onClick={() => setVmodel6(true)}>自定义弹出header</Button>\n      <Popup\n        visible={vmodel}\n        position=\"center\"\n        onCancel={handleCancel}\n        style={{ width: 320 }}\n        header=\"标题\"\n      >\n        <div style={{ textAlign: 'center' }}>\n          <p>这是一条内容</p>\n          <p>这是一条内容</p>\n          <p>这是一条内容</p>\n          <p>这是一条内容</p>\n          <p>这是一条内容</p>\n          <p>这是一条内容</p>\n          <p>这是一条内容</p>\n        </div>\n      </Popup>\n      <Popup\n        visible={vmodel1}\n        position=\"top\"\n        onCancel={handleCancel}\n        header=\"标题\"\n      >\n        <div style={{ textAlign: 'center' }}>\n          <p>这是一条内容</p>\n          <p>这是一条内容</p>\n          <p>这是一条内容</p>\n          <p>这是一条内容</p>\n          <p>这是一条内容</p>\n          <p>这是一条内容</p>\n          <p>这是一条内容</p>\n        </div>\n      </Popup>\n      <Popup\n        visible={vmodel2}\n        position=\"bottom\"\n        onCancel={handleCancel}\n        header=\"标题\"\n      >\n        <div style={{ textAlign: 'center' }}>\n          <p>这是一条内容</p>\n          <p>这是一条内容</p>\n          <p>这是一条内容</p>\n          <p>这是一条内容</p>\n          <p>这是一条内容</p>\n          <p>这是一条内容</p>\n          <p>这是一条内容</p>\n        </div>\n      </Popup>\n      <Popup\n        visible={vmodel3}\n        position=\"left\"\n        onCancel={handleCancel}\n        style={{ width: 320 }}\n      >\n        {test}\n      </Popup>\n      <Popup\n        visible={vmodel4}\n        position=\"right\"\n        onCancel={handleCancel}\n        style={{ width: 320 }}\n      >\n        <div style={{ textAlign: 'center' }}>\n          <p>这是一条内容</p>\n          <p>这是一条内容</p>\n          <p>这是一条内容</p>\n          <p>这是一条内容</p>\n          <p>这是一条内容</p>\n          <p>这是一条内容</p>\n          <p>这是一条内容</p>\n        </div>\n      </Popup>\n      <Popup\n        visible={vmodel5}\n        position=\"bottom\"\n        onCancel={handleCancel}\n        // style={{ height: '70%' }}\n        // footer={null}\n        footer={[<Button type=\"primary\" onClick={handleCancel} key=\"1\">确定</Button>]}\n      >\n        {test}\n      </Popup>\n      <Popup\n        visible={vmodel6}\n        position=\"bottom\"\n        onCancel={handleCancel}\n        onOk={handleCancel}\n        closeable={false}\n        header={(\n          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>\n            <div onClick={handleCancel}>取消</div>\n            <div>哈哈哈哈</div>\n            <div onClick={handleCancel}>确定</div>\n          </div>\n        )}\n      >\n        <div style={{ textAlign: 'center' }}>\n          <p>这是一条内容</p>\n          <p>这是一条内容</p>\n          <p>这是一条内容</p>\n          <p>这是一条内容</p>\n          <p>这是一条内容</p>\n          <p>这是一条内容</p>\n          <p>这是一条内容</p>\n          <p>这是一条内容</p>\n          <p>这是一条内容</p>\n          <p>这是一条内容</p>\n          <p>这是一条内容</p>\n          <p>这是一条内容</p>\n          <p>这是一条内容</p>\n          <p>这是一条内容</p>\n        </div>\n      </Popup>\n    </div>\n  );\n};\n\nexport default PopupDemo;\n"}
    </Highlight>
  </div>
);

export default codeDemo;
