/* eslint-disable react/button-has-type */
/* eslint-disable react/state-in-constructor */
import React from 'react';
import Tag from './index';

const TagDemo = () => (
  <div style={{ padding: 100 }}>
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
