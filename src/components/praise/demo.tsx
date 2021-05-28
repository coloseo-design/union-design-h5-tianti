import React from 'react';
import { Praise } from '../index';

const PraiseDemo = () => (
  <>
    <Praise />
    <br />
    <Praise number={100} status onChange={(number) => { console.log('number', number); }} />
  </>
);

export default PraiseDemo;
