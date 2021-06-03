import React from 'react';
import { Loading } from '../index';

const containerStyle = {
  width: 377,
  height: 548,
  backgroundColor: '#fafafa',
  padding: 10,
  overflow: 'scroll',
  borderRadius: 12,
  boxShadow: '#ebedf0 0 4px 12px',
};
const LoadingDemo = () => (
  <div style={containerStyle}>
    <Loading color="#fff" />
    <br />
    <Loading type="spinner" color="#fff" />
    <Loading backgroundColor="none" />
    <Loading backgroundColor="none" type="spinner" size={50} />
    <Loading backgroundColor="none">加载中....</Loading>
    <Loading backgroundColor="none" type="spinner" vertical>加载中...</Loading>
  </div>
);

export default LoadingDemo;
