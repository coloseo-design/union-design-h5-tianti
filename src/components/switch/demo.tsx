/* eslint-disable react/button-has-type */
/* eslint-disable react/state-in-constructor */
import React from 'react';
import Switch from './index';

const switchDemo = () => (
  <div style={{ padding: 100 }}>
    <Switch checked={false} />
    <Switch checked color="red" />
    <Switch checked color="green" />
    <Switch />
  </div>
);

export default switchDemo;
