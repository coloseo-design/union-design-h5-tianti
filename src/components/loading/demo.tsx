import React from 'react';
import Loading from './index';

const LoadingDemo = () => (
  <>
    <Loading color="#fff" />
    <br />
    <Loading type="spinner" color="#fff" />
    <Loading backgroundColor="none" />
    <Loading backgroundColor="none" type="spinner" size="50px" />
    <Loading backgroundColor="none" text="加载中...." />
    <Loading backgroundColor="none" type="spinner" text="加载中..." vertical />
  </>
);

export default LoadingDemo;
