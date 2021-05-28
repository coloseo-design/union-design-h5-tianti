import React, { useRef } from 'react';
import { Field, Icon, Button } from '../index';

const FieldDemo = () => {
  const ref = useRef();
  console.log('ref', ref);
  return (
    <div>
      <h1>单卡片：短输入</h1>
      <Field
        placeholder="基本输入"
        onChange={({ target: { value } }) => { console.log('value', value); }}
        ref={ref}
        label="输入标题"
        required
        fieldType="card"
      />
      <Field
        placeholder="基本输入"
        onChange={({ target: { value } }) => { console.log('value', value); }}
        label="输入标题"
        required
        value="这里是输入后的，文字一行限定文字字数"
        fieldType="card"
      />
      <h1>单卡片：长输入</h1>
      <Field
        placeholder="多行输入"
        onChange={({ target: { value } }) => { console.log('value', value); }}
        type="textarea"
        label="长输入类标题"
        required
        fieldType="card"
      />
      <Field
        placeholder="多行输入"
        onChange={({ target: { value } }) => { console.log('value', value); }}
        type="textarea"
        label="长输入类标题"
        required
        value="这里是输入后的文字三行文字三行文字三行，文字三行文字三行字三行文字三行字三行文字三行字三行文字三行"
        rows={3}
        fieldType="card"
      />
      <h1>回复输入栏</h1>
      <Field
        placeholder="我来说几句"
        onChange={({ target: { value } }) => { console.log('value', value); }}
        leftIcon={<Icon type="user-circle" />}
        autosize
        fieldType="reply"
      />
      <Field
        placeholder="我来说几句"
        onChange={({ target: { value } }) => { console.log('value', value); }}
        leftIcon={<Icon type="user-circle" />}
        autosize
        value="这里是留言内容这里是留言内容这里是留言内容这里是留言内容这里是留言内容这里是留"
        fieldType="reply"
      />
      <Field
        fieldType="reply"
        placeholder="我来说几句"
        onChange={({ target: { value } }) => { console.log('value', value); }}
        leftIcon={<Icon type="user-circle" />}
        rows={3}
        value="这里是留言内容这里是留言内容这里是留言内容这里是留言内容这里是留言内容这里是留这里是留言内容这里是留言内容这里是，最多显示三行"
      />
      <h1>一般输入框</h1>
      <Field
        placeholder="我来说几句"
        onChange={({ target: { value } }) => { console.log('value', value); }}
        leftIcon={<Icon type="user-circle" />}
      />
      <Field
        placeholder="我来说几句"
        onChange={({ target: { value } }) => { console.log('value', value); }}
        leftIcon={<Icon type="user-circle" />}
        border
      />
      <Field
        placeholder="我来说几句"
        onChange={({ target: { value } }) => { console.log('value', value); }}
        leftIcon={<Icon type="user-circle" />}
        border
        value={123}
        rightIcon={<Button>发送验证码</Button>}
      />
      <Field
        placeholder="我来说几句"
        onChange={({ target: { value } }) => { console.log('value', value); }}
        leftIcon={<Icon type="user-circle" />}
        border
        value={123}
        status="error"
      />
      <h1>密码输入框</h1>
      <Field
        placeholder="我来说几句"
        onChange={({ target: { value } }) => { console.log('value', value); }}
        border
        type="password"
      />
    </div>
  );
};

export default FieldDemo;
