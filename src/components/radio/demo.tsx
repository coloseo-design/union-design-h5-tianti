import React from 'react';
import { Radio } from '../index';
import './styles/index';

const containerStyle = {
  width: 377,
  height: 548,
  backgroundColor: '#fafafa',
  padding: 10,
  overflow: 'scroll',
  borderRadius: 12,
  boxShadow: '#ebedf0 0 4px 12px',
};
const section = {
  title: {
    marginTop: 10,
  },
  content: {

  },
};
const RadioDemo = () => (
  <div>
    <div>
      <Radio onChange={(checked) => console.log('checked', checked)}>复选框（默认）</Radio>
      <Radio checked>复选框（选中）</Radio>
      <Radio disabled>复选框（禁止）</Radio>
      <Radio disabled checked>复选框（选中且禁止）</Radio>
    </div>
    <h5 style={section.title}>Radio.Group全部禁止</h5>
    <div style={section.content}>
      <Radio.Group
        disabled
        options={[
          {
            value: 'A',
            label: 'A',
          },
          {
            value: 'B',
            label: 'B',
          },
          {
            value: 'C',
            label: 'C',
          },
        ]}
      />
    </div>
    <h5 style={section.title}>Radio.Group数据源为options</h5>
    <div style={section.content}>
      <Radio.Group
        defaultValue="A"
        onChange={(values) => console.log('values', values)}
        options={[
          {
            value: 'A',
            label: 'A',
          },
          {
            value: 'B',
            label: 'B',
          },
          {
            value: 'C',
            label: 'C',
          },
        ]}
      />
    </div>
    <h5 style={section.title}>Radio.Group默认禁止选项</h5>
    <div style={section.content}>
      <Radio.Group
        disabled={false}
        onChange={(value) => console.log('value', value)}
      >
        <Radio value="A" disabled style={{ marginBottom: 8 }}>A</Radio>
        <Radio value="B" style={{ marginBottom: 8 }}>B</Radio>
        <Radio value="C" style={{ marginBottom: 8 }}>C</Radio>
      </Radio.Group>
    </div>

  </div>
);

export default RadioDemo;
