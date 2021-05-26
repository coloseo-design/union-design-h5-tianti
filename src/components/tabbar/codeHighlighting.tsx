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
            {"import React from 'react';\nimport Tabbar from './index';\nimport Icon from '../icon';\n\nconst Demo = () => (\n  <div\n    style={{\n      margin: 40,\n      width: 414,\n      height: 600,\n      border: '1px solid black',\n      position: 'relative',\n    }}\n  >\n    <Tabbar position=\"bottom\">\n      <Tabbar.Item\n        dot\n        key=\"选项1\"\n        title=\"选项1\"\n        icon=\"approval\"\n        selectedStyle={{ color: 'rgb(81, 159, 240)' }}\n      >\n        <div\n          style={{\n            flex: 1,\n            display: 'flex',\n            justifyContent: 'center',\n            alignItems: 'center',\n            backgroundColor: 'yellow',\n          }}\n        >\n          选项1 页面\n        </div>\n      </Tabbar.Item>\n      <Tabbar.Item\n        badge={36}\n        key=\"选项2\"\n        title=\"选项2\"\n        icon={<Icon type=\"calendar\" />}\n        selectedStyle={{ color: 'rgb(81, 159, 240)' }}\n      >\n        <div\n          style={{\n            flex: 1,\n            display: 'flex',\n            justifyContent: 'center',\n            alignItems: 'center',\n            backgroundColor: 'grey',\n          }}\n        >\n          选项2 页面\n        </div>\n      </Tabbar.Item>\n      <Tabbar.Item\n        key=\"选项3\"\n        title=\"选项3\"\n        icon=\"service\"\n        selectedStyle={{ color: 'rgb(81, 159, 240)' }}\n      >\n        <div\n          style={{\n            flex: 1,\n            display: 'flex',\n            justifyContent: 'center',\n            alignItems: 'center',\n            backgroundColor: 'green',\n          }}\n        >\n          选项3 页面\n        </div>\n      </Tabbar.Item>\n    </Tabbar>\n  </div>\n);\n\nexport default Demo;\n"}
          </Highlight>
        </div>
      )}
    </div>
  );
};

export default codeDemo;
