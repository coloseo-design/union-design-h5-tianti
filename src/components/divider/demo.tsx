/* eslint-disable max-len */
import React from 'react';
import Divider from './index';

const DividerDemo = () => (
  <div style={{ padding: 100, border: '1px solid blue' }}>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
    <Divider />
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
    <Divider>标题</Divider>
  </div>
);

export default DividerDemo;
