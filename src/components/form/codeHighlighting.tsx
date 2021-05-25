/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import Highlight from 'react-highlight';

const codeDemo = () => (
  <div>
    <Highlight>
      {"import React, { useRef } from 'react';\nimport {\n  Filed, Form, Button, Row, Col, Icon,\n} from '../index';\nimport { Errors, FormInstance, Values } from './type';\n\nconst FormDemo = () => {\n  const ref = useRef<FormInstance>();\n  const onSubmit = (values: Values) => {\n    console.log('values', values);\n  };\n  const onSubmitFailed = (errors: Errors) => {\n    console.log('errors', errors);\n  };\n  const onRest = () => {\n    ref.current?.reset();\n  };\n  return (\n    <div style={{ border: '1px solid #ccc', margin: 20, borderRadius: 5 }}>\n      <div style={{ fontSize: 20, textAlign: 'center' }}>登录</div>\n      <div style={{ padding: '20px 50px' }}>\n        <Form\n          onSubmit={onSubmit}\n          onSubmitFailed={onSubmitFailed}\n          name=\"login\"\n          ref={ref}\n        >\n          <Form.FormItem\n            name=\"username\"\n            label=\"请输入用户名\"\n            required\n            rules={[{ required: true, message: '请填写用户名' }]}\n          >\n            <Filed\n              placeholder=\"请输入用户名称\"\n              leftIcon={<Icon type=\"user\" style={{ color: '#A6A8A9', fontSize: '1.5em' }} />}\n            />\n          </Form.FormItem>\n          <Form.FormItem\n            name=\"password\"\n            label=\"请输入密码\"\n            required\n            rules={[\n              { required: true, message: '请填写密码' },\n            ]}\n          >\n            <Filed placeholder=\"请输入密码\" type=\"password\" leftIcon={null} />\n          </Form.FormItem>\n          <Row gutter={40} justify=\"space-between\">\n            <Col span={6}>\n              <Form.FormItem><Button htmlType=\"submit\" size=\"large\" type=\"primary\" style={{ width: '100%' }}>登录</Button></Form.FormItem>\n            </Col>\n            <Col span={6}>\n              <Button size=\"large\" style={{ width: '100%' }} onClick={onRest}>重置</Button>\n            </Col>\n          </Row>\n        </Form>\n      </div>\n    </div>\n  );\n};\n\nexport default FormDemo;\n"}
    </Highlight>
  </div>
);

export default codeDemo;
