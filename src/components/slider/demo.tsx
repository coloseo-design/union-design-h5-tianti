import React, { useState } from 'react';
import { Slider } from '../index';
import './styles/index';

const SliderDemo = () => {
  const [value] = useState(0);
  const containerStyle = {
    width: 377,
    height: 548,
    backgroundColor: '#fafafa',
    padding: 10,
    overflow: 'scroll',
    borderRadius: 12,
    boxShadow: '#ebedf0 0 4px 12px',
  };
  return (
    <div style={containerStyle}>
      <div style={{ padding: 10, marginBottom: 20 }}>
        <Slider value={value} min={0} max={10} />
      </div>
      <div style={{ padding: 10, marginBottom: 20 }}>
        <Slider value={10} min={0} max={100} />
      </div>
      <div style={{ padding: 10, marginBottom: 20 }}>
        <Slider value={300} min={0} max={1000} />
      </div>
      <div style={{ padding: 10, marginBottom: 20 }}>
        <Slider value={8} min={0} max={10} />
      </div>
    </div>
  );
};

export default SliderDemo;
