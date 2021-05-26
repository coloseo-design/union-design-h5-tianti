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
            {"import React, { useRef } from 'react';\nimport Field from './index';\nimport Icon from '../icon';\nimport Button from '../button';\n\nconst FieldDemo = () => {\n  const ref = useRef();\n  console.log('ref', ref);\n  return (\n    <div>\n      <h1>单卡片：短输入</h1>\n      <Field\n        // allowClear\n        placeholder=\"基本输入\"\n        onChange={({ target: { value } }) => { console.log('value', value); }}\n        ref={ref}\n        label=\"输入标题\"\n        required\n        fieldType=\"card\"\n      />\n      <Field\n        // allowClear\n        placeholder=\"基本输入\"\n        onChange={({ target: { value } }) => { console.log('value', value); }}\n        label=\"输入标题\"\n        required\n        value=\"这里是输入后的，文字一行限定文字字数\"\n        fieldType=\"card\"\n      />\n      <h1>单卡片：长输入</h1>\n      <Field\n        // allowClear\n        placeholder=\"多行输入\"\n        onChange={({ target: { value } }) => { console.log('value', value); }}\n        type=\"textarea\"\n        label=\"长输入类标题\"\n        required\n        fieldType=\"card\"\n      />\n      <Field\n        // allowClear\n        placeholder=\"多行输入\"\n        onChange={({ target: { value } }) => { console.log('value', value); }}\n        type=\"textarea\"\n        label=\"长输入类标题\"\n        required\n        value=\"这里是输入后的文字三行文字三行文字三行，文字三行文字三行字三行文字三行字三行文字三行字三行文字三行\"\n        rows={3}\n        fieldType=\"card\"\n      />\n      <h1>回复输入栏</h1>\n      <Field\n        // allowClear\n        placeholder=\"我来说几句\"\n        onChange={({ target: { value } }) => { console.log('value', value); }}\n        leftIcon={<Icon type=\"user-circle\" />}\n        autosize\n        fieldType=\"reply\"\n      />\n      <Field\n        // allowClear\n        placeholder=\"我来说几句\"\n        onChange={({ target: { value } }) => { console.log('value', value); }}\n        leftIcon={<Icon type=\"user-circle\" />}\n        autosize\n        value=\"这里是留言内容这里是留言内容这里是留言内容这里是留言内容这里是留言内容这里是留\"\n        fieldType=\"reply\"\n      />\n      <Field\n        fieldType=\"reply\"\n        // allowClear\n        placeholder=\"我来说几句\"\n        onChange={({ target: { value } }) => { console.log('value', value); }}\n        leftIcon={<Icon type=\"user-circle\" />}\n        rows={3}\n        value=\"这里是留言内容这里是留言内容这里是留言内容这里是留言内容这里是留言内容这里是留这里是留言内容这里是留言内容这里是，最多显示三行\"\n      />\n      <h1>一般输入框</h1>\n      <Field\n        // allowClear\n        placeholder=\"我来说几句\"\n        onChange={({ target: { value } }) => { console.log('value', value); }}\n        leftIcon={<Icon type=\"user-circle\" />}\n      />\n      <Field\n        // allowClear\n        placeholder=\"我来说几句\"\n        onChange={({ target: { value } }) => { console.log('value', value); }}\n        leftIcon={<Icon type=\"user-circle\" />}\n        border\n      />\n      <Field\n        // allowClear\n        placeholder=\"我来说几句\"\n        onChange={({ target: { value } }) => { console.log('value', value); }}\n        leftIcon={<Icon type=\"user-circle\" />}\n        border\n        value={123}\n        rightIcon={<Button>发送验证码</Button>}\n      />\n      <Field\n        // allowClear\n        placeholder=\"我来说几句\"\n        onChange={({ target: { value } }) => { console.log('value', value); }}\n        leftIcon={<Icon type=\"user-circle\" />}\n        border\n        value={123}\n        status=\"error\"\n      />\n      <h1>密码输入框</h1>\n      <Field\n        // allowClear\n        placeholder=\"我来说几句\"\n        onChange={({ target: { value } }) => { console.log('value', value); }}\n        border\n        type=\"password\"\n      />\n    </div>\n  );\n};\n\nexport default FieldDemo;\n"}
          </Highlight>
        </div>
      )}
    </div>
  );
};

export default codeDemo;
