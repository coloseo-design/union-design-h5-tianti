import React from 'react';
import { Divider } from '../index';

const containerStyle = {
  width: 377,
  height: 548,
  backgroundColor: '#fafafa',
  padding: 10,
  overflow: 'scroll',
  borderRadius: 12,
  boxShadow: '#ebedf0 0 4px 12px',
};
const DividerDemo = () => (
  <div style={containerStyle}>
    <p>
      {
      ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.`
      }
    </p>
    <Divider />
    <p>
      {
      ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.`
      }
    </p>
    <Divider>标题</Divider>
  </div>
);

export default DividerDemo;
