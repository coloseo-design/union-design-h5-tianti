import React from 'react';
import Loading from './index';

const LoadingDemo = () => (
  <>
    <Loading color="#fff" />
    <br />
    <Loading type="spinner" color="#fff" />
    <Loading backgroundColor="none" />
    <Loading backgroundColor="none" type="spinner" size="50px" />
    <Loading backgroundColor="none">加载中....</Loading>
    <Loading backgroundColor="none" type="spinner" vertical>加载中...</Loading>
  </>
);

export default LoadingDemo;
