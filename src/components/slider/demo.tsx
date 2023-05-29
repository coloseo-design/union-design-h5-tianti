import React, { useState } from 'react';
import { Slider } from '../index';
import './styles/index';

const SliderDemo = () => {
  const [value] = useState(0);
  return (
    <div>
      <div style={{ padding: 10, marginBottom: 20 }}>
        <Slider value={value} min={0} max={10} />
      </div>
      <div style={{ padding: 10, marginBottom: 20 }}>
        <Slider value={10} min={0} max={100} />
      </div>
      <div style={{ padding: 10, marginBottom: 20 }}>
        <Slider defaultValue={300} min={0} max={1000} />
      </div>
      <div style={{ padding: 10, marginBottom: 20 }}>
        <Slider value={8} min={0} max={10} />
        <div>12</div>
      </div>
    </div>
  );
};

export default SliderDemo;
