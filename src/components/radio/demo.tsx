/* eslint-disable no-console */
import React from 'react';
import { Radio } from '../index';

const RadioDemo = () => (
  <>
    <div>
      <Radio onChange={(checked) => console.log('checked', checked)}>复选框（默认）</Radio>
      <Radio checked>复选框（选中）</Radio>
      <Radio disabled>复选框（禁止）</Radio>
      <Radio disabled checked>复选框（选中且禁止）</Radio>
    </div>

    <div>
      <Radio.Group
        defaultValue="A"
        disabled={false}
        onChange={(values) => console.log('values', values)}
        options={[
          {
            value: 'A',
            label: 'A',
            disabled: true,
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
    <div>
      <Radio.Group
        defaultValue="A"
        disabled={false}
        onChange={(value) => console.log('value', value)}
      >
        <Radio disabled value="A">A</Radio>
        <Radio value="B">B</Radio>
        <Radio value="C">C</Radio>
      </Radio.Group>
    </div>

  </>
);

export default RadioDemo;
