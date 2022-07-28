import React, { useRef, useState } from 'react';
import {
  Field, Form, Button, Row, Col, Icon,
} from '../index';
import { Errors, FormInstance, Values } from './type';
import './styles/index';
import '../field/styles';
import '../button/styles';
import '../grid/styles';
import '../icon/styles';

const FormDemo = () => {
  const ref = useRef<FormInstance>();
  const onSubmit = (values: Values) => {
    console.log('values', values);
  };
  const onSubmitFailed = (errors: Errors) => {
    console.log('errors', errors);
  };
  const onRest = () => {
    ref.current?.reset();
  };
  const containerStyle = {
    width: 377,
    height: 548,
    backgroundColor: '#fafafa',
    padding: 10,
    overflow: 'scroll',
    borderRadius: 12,
    boxShadow: '#ebedf0 0 4px 12px',
  };
  React.useEffect(() => {
    const { current } = ref;
    const fileds = current?.getFieldsValue(['username', 'password']);
    const fileds1 = current?.getFieldsValue(true);
    const fileds2 = current?.getFieldValue('username');
    console.log('=fileds=', fileds, fileds1, fileds2);
  }, []);

  const [status, $status] = useState(true);
  return (
    <div style={containerStyle}>
      <div style={{ fontSize: 20, textAlign: 'center' }} onClick={() => $status(!status)}>登录</div>
      <div>
        <Form
          onSubmit={onSubmit}
          onSubmitFailed={onSubmitFailed}
          name="login"
          ref={ref}
          initialValues={{
            username: 'admin',
            // password: '123456',
          }}
        >
          <Form.FormItem
            name="username"
            label="请输入用户名"
            rules={[{ required: true, message: '请填写用户名' }]}
          >
            <Field
              placeholder="请输入用户名称"
              leftIcon={<Icon type="user" style={{ color: '#A6A8A9', fontSize: '1.5em' }} />}
            />
          </Form.FormItem>
          {status ? <Form.FormItem
            name="password"
            label="请输入密码"
            rules={[
              { required: true, message: '请填写密码' },
            ]}
          >
            <Field placeholder="请输入密码" fieldType="password" leftIcon={null} />
          </Form.FormItem>
          : 
          <Form.FormItem
            name="账号"
            label="请输入账号"
            rules={[
              { required: true, message: '请输入账号' },
            ]}
          >
            <Field placeholder="请输入账号" />
          </Form.FormItem>
          
          }
          <Form.FormItem
            name="professor"
            label="职业"
          >
            <Field placeholder="请输入职业" />
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
