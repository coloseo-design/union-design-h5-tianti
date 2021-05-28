import React from 'react';
import { Search } from '../index';

const SearchDemo = () => (
  <div>
    <Search placeholder="搜索" onSubmit={(value) => alert(value)} />
    <Search placeholder="搜索" showCancelButton />
    <Search placeholder="搜索" showBackIcon />
    <Search placeholder="搜索" showBackIcon showCancelButton />
  </div>
);

export default SearchDemo;
