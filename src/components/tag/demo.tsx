import React from 'react';
import { Tag } from '../index';

const containerStyle = {
  width: 377,
  height: 548,
  backgroundColor: '#fafafa',
  padding: 10,
  overflow: 'scroll',
  borderRadius: 12,
  boxShadow: '#ebedf0 0 4px 12px',
};
const TagDemo = () => (
  <div style={containerStyle}>
    <Tag>标签</Tag>
    <Tag round style={{ marginLeft: 50 }}>标签</Tag>
    <br />
    <br />
    <Tag hollow>标签</Tag>
    <Tag round hollow style={{ marginLeft: 50 }}>标签</Tag>
    <br />
    <br />
    <Tag big>标签</Tag>
  </div>
);
export default TagDemo;
