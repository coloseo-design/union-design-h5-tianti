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
            {"import dayjs from 'dayjs';\nimport React, { useState } from 'react';\nimport { Button, DatePicker } from '../index';\n\nconst TimePickerDemo = () => {\n  const [visible, setVisible] = useState(false);\n  const [value, setValue] = useState(dayjs());\n  const onChange = (v: dayjs.Dayjs) => {\n    setValue(v);\n  };\n  return (\n    <div>\n      <Button onClick={() => setVisible(true)}>选择日期</Button>\n      <DatePicker\n        visible={visible}\n        title=\"请选择\"\n        onCancel={() => setVisible(false)}\n        onChange={onChange}\n        value={value}\n      />\n    </div>\n  );\n};\n\nexport default TimePickerDemo;\n"}
          </Highlight>
        </div>
      )}
    </div>
  );
};

export default codeDemo;
