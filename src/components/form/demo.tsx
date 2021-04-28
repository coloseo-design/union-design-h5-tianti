import React from 'react';
import { Form } from '../index';

const FormDemo = () => {
  const onSubmit = () => {
    console.log('abc');
  };
  return (<Form onSubmit={onSubmit} />);
};

export default FormDemo;
