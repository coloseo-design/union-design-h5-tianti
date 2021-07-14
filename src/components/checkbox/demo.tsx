/* eslint-disable no-console */
import React from 'react';
import { Checkbox } from '../index';
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
const CheckboxDemo = () => (
  <div style={containerStyle}>
    <div>
      <Checkbox onChange={(checked) => console.log('checked', checked)}>复选框（默认）</Checkbox>
      <Checkbox checked>复选框（选中）</Checkbox>
      <Checkbox disabled>复选框（禁止）</Checkbox>
      <Checkbox disabled checked>复选框（选中且禁止）</Checkbox>
    </div>

    <div>
      <Checkbox.Group
        value={['A']}
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
      <Checkbox.Group
        value={['A']}
        disabled={false}
        onChange={(values) => console.log('values', values)}
      >
        <Checkbox disabled value="A">A</Checkbox>
        <Checkbox value="B">B</Checkbox>
        <Checkbox value="C">C</Checkbox>
      </Checkbox.Group>
    </div>

  </div>
);

export default CheckboxDemo;
