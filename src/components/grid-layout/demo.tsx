import React from 'react';
import GridLayout from './index';

const Demo = () => {
  const data = [
    {
      icon: 'add',
      text: 1,
    },
    {
      icon: 'apps',
      text: 1,
    },
    {
      icon: 'award',
      text: 1,
    },
    {
      icon: 'bell',
      text: 1,
    },
    {
      icon: 'camera',
      text: 1,
    },
    {
      icon: 'checkout',
      text: 1,
    },
    {
      icon: 'add',
      text: 1,
    },
    {
      icon: 'apps',
      text: 1,
    },
    {
      icon: 'award',
      text: 1,
    },
    {
      icon: 'bell',
      text: 1,
    },
  ];
  return (
    <div>
      <GridLayout data={data} columnNum={6} />
      <br />
      <GridLayout data={data} renderItem={(el, index) => <div>{`el: ${JSON.stringify(el)}, index: ${index}`}</div>} />
    </div>
  );
};

export default Demo;
