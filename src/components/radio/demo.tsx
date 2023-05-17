import React, { useState } from 'react';
import { Radio } from '../index';
import './styles/index';

const section = {
  title: {
    marginTop: 10,
  },
  content: {

  },
};
const RadioDemo = () => {
  const [c, setC] = useState('C');
  const [b, setB] = useState(false);
  return (
    <div>
      <div>
        <Radio onChange={(checked) => console.log('checked', checked)}>复选框（默认）</Radio>
        <Radio checked>复选框（选中）</Radio>
        <Radio checked={b} onChange={e => {
          console.log('e', e);
          setB(e);
        }}>复选框（选中）</Radio>
        <Radio disabled>复选框（禁止）</Radio>
        <Radio disabled checked>复选框（选中且禁止）</Radio>
        <Radio defaultChecked>复选框（默认选中）</Radio>
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
      <h5 style={section.title}>Radio.Group默认选项</h5>
      <div style={section.content}>
        <Radio.Group
          defaultValue='A'
          value={c}
          disabled={false}
          onChange={(value) => {
            console.log('value', value);
            setC(value);
          }}
        >
          <Radio value="A" disabled style={{ marginBottom: 8 }}>A</Radio>
          <Radio value="B" style={{ marginBottom: 8 }}>B</Radio>
          <Radio value="C" style={{ marginBottom: 8 }}>C</Radio>
        </Radio.Group>
      </div>

    </div>
  );
};

export default RadioDemo;
