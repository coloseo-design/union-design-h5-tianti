/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import Highlight from 'react-highlight';

const codeDemo = () => (
  <div>
    <Highlight>
      {"import dayjs from 'dayjs';\nimport React, { useState } from 'react';\nimport { Button, TimePicker } from '../index';\n\nconst TimePickerDemo = () => {\n  const [visible, setVisible] = useState(false);\n  const [value, setValue] = useState(dayjs());\n  const onChange = (v: dayjs.Dayjs) => {\n    setValue(v);\n  };\n  return (\n    <div>\n      <Button onClick={() => setVisible(true)}>选择时间</Button>\n      <TimePicker\n        visible={visible}\n        title=\"请选择\"\n        onCancel={() => setVisible(false)}\n        onChange={onChange}\n        value={value}\n      />\n    </div>\n  );\n};\n\nexport default TimePickerDemo;\n"}
    </Highlight>
  </div>
);

export default codeDemo;
