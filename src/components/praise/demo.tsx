import React from 'react';
import { Praise } from '../index';

const containerStyle = {
  width: 377,
  height: 548,
  backgroundColor: '#fafafa',
  padding: 10,
  overflow: 'scroll',
  borderRadius: 12,
  boxShadow: '#ebedf0 0 4px 12px',
};
const PraiseDemo = () => (
  <div style={containerStyle}>
    <Praise />
    <br />
    <Praise number={100} status onChange={(number) => { console.log('number', number); }} />
  </div>
);

export default PraiseDemo;
