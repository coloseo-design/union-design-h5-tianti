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
  const [value, setValue] = useState('');
  const loginList = [
    {
      deptName: '广东省分公司财务部',
      siteType: '1',
    },
    {

      deptName: '广州分公司财务部',
      siteType: '2',
    },
    {

      deptName: '韶关市分公司财务部',
      siteType: '3',
    },
    {

      deptName: '深圳市分公司财务部',
      siteType: '4',
    },
  ]
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
          defaultValue="B"
          onChange={(values) => console.log('values1223', values)}
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
      <div>
        <Radio.Group
          value={value}
          onChange={val =>{
            setValue(val)
          }}
        >
          {
            loginList.map((item, key) => (
                <Radio value={`${key}`} key={`${key}`}>
                  <div style={{ display: 'flex' }}>
                    <div>{item.deptName}</div>
                    <div>{item.siteType}</div>
                  </div>
                </Radio>
            ))
          }
        </Radio.Group>
      </div>
    </div>
  );
};

export default RadioDemo;
