/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/no-useless-path-segments */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable react-hooks/rules-of-hooks */
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
            {"import React, { useState } from 'react';\nimport { Cascader, Button } from '../index';\nimport { Option } from '../picker/type';\n\nconst CascaderDemo = () => {\n  const [visible, setVisible] = useState(false);\n  const options: Option[] = [\n    {\n      title: '四川省',\n      key: '四川省',\n      value: '四川省',\n      children: [\n        {\n          title: '成都市',\n          key: '成都市',\n          value: '成都市',\n          children: [\n            {\n              title: '武侯区',\n              key: '武侯区',\n              value: '武侯区',\n            },\n            {\n              title: '成华区',\n              key: '成华区',\n              value: '成华区',\n            },\n            {\n              title: '锦江区',\n              key: '锦江区',\n              value: '锦江区',\n            },\n            {\n              title: '天府新区',\n              key: '天府新区',\n              value: '天府新区',\n            },\n            {\n              title: '高新区',\n              key: '高新区',\n              value: '高新区',\n            },\n          ],\n        },\n        {\n          title: '南充市',\n          key: '南充市',\n          value: '南充市',\n          children: [\n            {\n              title: '南充市区',\n              key: '南充市区',\n              value: '南充市区',\n            },\n            {\n              title: '营山县',\n              key: '营山县',\n              value: '营山县',\n            },\n            {\n              title: '南部县',\n              key: '南部县',\n              value: '南部县',\n            },\n          ],\n        },\n        {\n          title: '巴中市',\n          key: '巴中市',\n          value: '巴中市',\n          children: [\n            {\n              title: '通江县',\n              key: '通江县',\n              value: '通江县',\n            },\n            {\n              title: '南江县',\n              key: '南江县',\n              value: '南江县',\n            },\n            {\n              title: '平昌县',\n              key: '平昌县',\n              value: '平昌县',\n            },\n          ],\n        },\n      ],\n    },\n    {\n      title: '云南省',\n      key: '云南省',\n      value: '云南省',\n      children: [\n        {\n          title: '昆明市',\n          key: '昆明市',\n          value: '昆明市',\n          children: [\n            {\n              title: '五华区',\n              key: '五华区',\n              value: '五华区',\n            },\n            {\n              title: '盘龙区',\n              key: '盘龙区',\n              value: '盘龙区',\n            },\n            {\n              title: '官渡区',\n              key: '官渡区',\n              value: '官渡区',\n            },\n            {\n              title: '西山区',\n              key: '西山区',\n              value: '西山区',\n            },\n          ],\n        },\n        {\n          title: '曲靖市',\n          key: '曲靖市',\n          value: '曲靖市',\n          children: [\n            {\n              title: '麒麟区',\n              key: '麒麟区',\n              value: '麒麟区',\n            },\n            {\n              title: '沾益区',\n              key: '沾益区',\n              value: '沾益区',\n            },\n            {\n              title: '马龙区',\n              key: '马龙区',\n              value: '马龙区',\n            },\n          ],\n        },\n        {\n          title: '玉溪市',\n          key: '玉溪市',\n          value: '玉溪市',\n          children: [\n            {\n              title: '红塔区',\n              key: '红塔区',\n              value: '红塔区',\n            },\n            {\n              title: '江川区',\n              key: '江川区',\n              value: '江川区',\n            },\n            {\n              title: '通海县',\n              key: '通海县',\n              value: '通海县',\n            },\n          ],\n        },\n      ],\n    },\n  ];\n  return (\n    <div>\n      <Button onClick={() => setVisible(true)}>打开</Button>\n      <Cascader\n        titles={['省份', '城市', '区县']}\n        visible={visible}\n        options={options}\n        onChange={(value) => console.log('values', value)}\n        onOk={() => setVisible(false)}\n        onCancel={() => setVisible(false)}\n        visibleItemCount={6}\n      />\n    </div>\n  );\n};\n\nexport default CascaderDemo;\n"}
          </Highlight>
        </div>
      )}
    </div>
  );
};

export default codeDemo;
