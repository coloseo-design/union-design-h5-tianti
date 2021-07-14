import React from 'react';
import { Search } from '../index';
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
const SearchDemo = () => (
  <div style={containerStyle}>
    <Search placeholder="搜索" onSubmit={(value) => alert(value)} />
    <Search placeholder="搜索" showCancelButton />
    <Search placeholder="搜索" showBackIcon />
    <Search placeholder="搜索" showBackIcon showCancelButton />
  </div>
);

export default SearchDemo;
