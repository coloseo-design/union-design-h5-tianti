import React from 'react';
import { Loading } from '../index';
import './styles/index';

const LoadingDemo = () => (
  <div>
    <Loading size={32} />
    <br />
    <Loading type="spinner" size={64} color="red" />
    <br />
    <Loading color="blue" textColor="blue">加载中....</Loading>
    <br />
    <Loading type="spinner" vertical>加载中...</Loading>
  </div>
);

export default LoadingDemo;
