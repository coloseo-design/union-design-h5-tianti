/* eslint-disable no-shadow */
import React, { useState } from 'react';
import Slider from './index';

const SliderDemo = () => {
  const [value] = useState(0);

  return (
    <div style={{ padding: 20, position: 'relative' }}>
      <div style={{ padding: 10, width: 500, marginBottom: 20 }}>
        <Slider value={value} min={0} max={10} />
      </div>
      <div style={{ padding: 10, width: 500, marginBottom: 20 }}>
        <Slider value={10} min={0} max={100} />
      </div>
      <div style={{ padding: 10, width: 500, marginBottom: 20 }}>
        <Slider value={300} min={0} max={1000} />
      </div>
      <div style={{ padding: 10, width: 500, marginBottom: 20 }}>
        <Slider value={8} min={0} max={10} />
      </div>
    </div>
  );
};

export default SliderDemo;
