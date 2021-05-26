/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from 'react';
import Highlight from 'react-highlight';
import Icon from '../icon';

const codeDemo = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div style={{
        border: '1px solid #E8E7E7', padding: 12, textAlign: 'right',
      }}
      >
        <Icon type="productd-evelop" style={{ fontSize: 20 }} onClick={() => setOpen(!open)} />
      </div>
      {open && (
        <div style={{ border: '1px solid #E8E7E7', borderTop: 'none', background: '#fff' }}>
          <Highlight>
            {"/* eslint-disable no-shadow */\nimport React, { useState } from 'react';\nimport Slider from './index';\n\nconst SliderDemo = () => {\n  const [value] = useState(0);\n\n  return (\n    <div style={{ padding: 20, position: 'relative' }}>\n      <div style={{ padding: 10, width: 500, marginBottom: 20 }}>\n        <Slider value={value} min={0} max={10} />\n      </div>\n      <div style={{ padding: 10, width: 500, marginBottom: 20 }}>\n        <Slider value={10} min={0} max={100} />\n      </div>\n      <div style={{ padding: 10, width: 500, marginBottom: 20 }}>\n        <Slider value={300} min={0} max={1000} />\n      </div>\n      <div style={{ padding: 10, width: 500, marginBottom: 20 }}>\n        <Slider value={8} min={0} max={10} />\n      </div>\n    </div>\n  );\n};\n\nexport default SliderDemo;\n"}
          </Highlight>
        </div>
      )}
    </div>
  );
};

export default codeDemo;
