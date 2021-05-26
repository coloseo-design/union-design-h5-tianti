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
            {"import React, { useEffect, useState } from 'react';\nimport { Button, Picker, Popup } from '../index';\n\nconst PickerDemo = () => {\n  useEffect(() => {\n    const options = [\n      [\n        {\n          title: '杭州',\n          key: '杭州',\n          value: '杭州',\n        },\n        {\n          title: '宁波',\n          key: '宁波',\n          value: '宁波',\n        },\n        {\n          title: '温州',\n          key: '温州',\n          value: '温州',\n        },\n      ],\n      [\n        {\n          title: '绍兴',\n          key: '绍兴',\n          value: '绍兴',\n        },\n        {\n          title: '湖州',\n          key: '湖州',\n          value: '湖州',\n        },\n        {\n          title: '嘉兴',\n          key: '嘉兴',\n          value: '嘉兴',\n        },\n        {\n          title: '金华',\n          key: '金华',\n          value: '金华',\n        },\n        {\n          title: '衢州',\n          key: '衢州',\n          value: '衢州',\n        },\n      ],\n      [\n        {\n          title: 'A',\n          key: 'A',\n          value: 'A',\n        },\n        {\n          title: 'B',\n          key: 'B',\n          value: 'B',\n        },\n        {\n          title: 'C',\n          key: 'C',\n          value: 'C',\n        },\n      ],\n    ];\n    setTimeout(() => {\n      setOptions(options);\n      setValue(['宁波', '金华', 'B']);\n    }, 300);\n  }, []);\n\n  const cascaderOptions = [\n    {\n      title: '0',\n      key: '0',\n      value: '0',\n      children: [\n        {\n          title: '0-0',\n          key: '0-0',\n          value: '0-0',\n        },\n        {\n          title: '0-1',\n          key: '0-1',\n          value: '0-1',\n        },\n        {\n          title: '0-2',\n          key: '0-2',\n          value: '0-2',\n        },\n      ],\n    },\n    {\n      title: '1',\n      key: '1',\n      value: '1',\n      children: [\n        {\n          title: '1-0',\n          key: '1-0',\n          value: '1-0',\n        },\n        {\n          title: '1-1',\n          key: '1-1',\n          value: '1-1',\n        },\n        {\n          title: '1-2',\n          key: '1-2',\n          value: '1-2',\n        },\n      ],\n    },\n    {\n      title: '2',\n      key: '2',\n      value: '2',\n      children: [\n        {\n          title: '2-0',\n          key: '2-0',\n          value: '2-0',\n        },\n        {\n          title: '2-1',\n          key: '2-1',\n          value: '2-1',\n        },\n        {\n          title: '2-2',\n          key: '2-2',\n          value: '2-2',\n        },\n      ],\n    },\n  ];\n  const [options, setOptions] = useState([]);\n  const [value, setValue] = useState([]);\n  const [visible1, setVisible1] = useState(false);\n  const [visible2, setVisible2] = useState(false);\n  const [visible3, setVisible3] = useState(false);\n  return (\n    <div>\n      <Button onClick={() => setVisible1(true)}>多列</Button>\n      <Button onClick={() => setVisible2(true)}>级联</Button>\n      <Button onClick={() => setVisible3(true)}>单列</Button>\n      <Popup\n        header=\"请选择\"\n        visible={visible3}\n        position=\"bottom\"\n        onCancel={() => setVisible3(false)}\n      >\n        <Picker\n          options={[\n            [{\n              title: 'A',\n              key: 'A',\n              value: 'A',\n            },\n            {\n              title: 'B',\n              key: 'B',\n              value: 'B',\n            }],\n          ]}\n          itemHeight={44}\n          visibleItemCount={6}\n          renderItem={(item) => item.value}\n          onChange={(v) => {\n            console.log('v', v);\n          }}\n          value={value}\n        />\n      </Popup>\n      <Popup\n        header=\"请选择\"\n        visible={visible1}\n        position=\"bottom\"\n        onCancel={() => setVisible1(false)}\n      >\n        <Picker\n          options={options}\n          itemHeight={44}\n          visibleItemCount={6}\n          renderItem={(item) => item.value}\n          defaultValue={['宁波', '金华', 'B']}\n          onChange={(v) => {\n            console.log('v', v);\n          }}\n          value={value}\n        />\n      </Popup>\n      <h1>多列</h1>\n      <Popup\n        header=\"请选择\"\n        visible={visible2}\n        position=\"bottom\"\n        onCancel={() => setVisible2(false)}\n      >\n        <Picker.Cascader\n          options={cascaderOptions}\n          itemHeight={44}\n          visibleItemCount={6}\n          renderItem={(item) => item.value}\n          defaultValue={['1', '1-1']}\n          onChange={(v) => {\n            console.log('v', v);\n          }}\n          // value={value}\n        />\n      </Popup>\n    </div>\n  );\n};\n\nexport default PickerDemo;\n"}
          </Highlight>
        </div>
      )}
    </div>
  );
};

export default codeDemo;
