import React from 'react';
import { Loading } from '../index';
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
const LoadingDemo = () => (
  <div>
    <Loading />
    <br />
    <Loading type="spinner" color="red" />
    <br />
    <Loading color="blue" textColor="blue">加载中....</Loading>
    <br />
    <Loading type="spinner" vertical>加载中...</Loading>
  </div>
);

export default LoadingDemo;
