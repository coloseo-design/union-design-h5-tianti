import React, { useRef } from 'react';
import {
  Filed, Form, Button, Row, Col, Icon,
} from '../index';
import { Errors, FormInstance, Values } from './type';

const FormDemo = () => {
  const ref = useRef<FormInstance>();
  const onSubmit = (values: Values) => {
    console.log('values', values);
  };
  const onSubmitFailed = (errors: Errors) => {
    console.log('errors', errors)
  };
  const onRest = () => {
    ref.current?.reset();
  };
  return (
    <div style={{ border: '1px solid #ccc', margin: 20, borderRadius: 5 }}>
      <div style={{ fontSize: 20, textAlign: 'center' }}>登录</div>
      <div style={{ padding: '20px 50px' }}>
        <Form
          onSubmit={onSubmit}
          onSubmitFailed={onSubmitFailed}
          name="login"
          ref={ref}
        >
          <Form.FormItem
            name="username"
            label="请输入用户名"
            required
            rules={[{ required: true, message: '请填写用户名' }]}
          >
            <Filed
              placeholder="请输入用户名称"
              leftIcon={<Icon type="user" style={{ color: '#A6A8A9', fontSize: '1.5em' }} />}
            />
          </Form.FormItem>
          <Form.FormItem
            name="password"
            label="请输入密码"
            required
            rules={[
              { required: true, message: '请填写密码' },
            ]}
          >
            <Filed placeholder="请输入密码" type="password" leftIcon={null} />
          </Form.FormItem>
          <Row gutter={40} justify="space-between">
            <Col span={6}>
              <Form.FormItem><Button htmlType="submit" size="large" type="primary" style={{ width: '100%' }}>登录</Button></Form.FormItem>
            </Col>
            <Col span={6}>
              <Button size="large" style={{ width: '100%' }} onClick={onRest}>重置</Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default FormDemo;
