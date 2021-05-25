/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import Highlight from 'react-highlight';

const codeDemo = () => (
  <div>
    <Highlight>
      {"import React from 'react';\nimport Toast from './index';\nimport Button from '../button';\n\nconst ToastDemo = () => (\n  <>\n    <Button onClick={() => Toast.success({ content: 'success' })}>成功提示</Button>\n    <Button onClick={() => Toast.fail({ content: 'fail' })}>错误提示</Button>\n    <Button onClick={() => Toast.info({ content: 'info', mask: false })}>文字提示 允许穿透</Button>\n    <Button onClick={() => Toast.loading({ content: 'loading' })}>加载提示</Button>\n    <Button onClick={() => Toast.hide()}>关闭</Button>\n  </>\n);\n\nexport default ToastDemo;\n"}
    </Highlight>
  </div>
);

export default codeDemo;
