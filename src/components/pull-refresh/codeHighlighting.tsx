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
            {"/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */\nimport React from 'react';\nimport PullRefresh from './index';\n\nconst Demo = () => {\n  const [loading, setLoading] = React.useState(false);\n  const handleRefresh = () => {\n    setLoading(true);\n    setTimeout(() => {\n      setLoading(false);\n    }, 3000);\n  };\n  const [style1, setStyle1] = React.useState({ display: 'block' });\n  const [style2, setStyle2] = React.useState({ display: 'none' });\n  const [style3, setStyle3] = React.useState({ display: 'none' });\n\n  const click1 = () => {\n    setStyle1({\n      display: 'block',\n    });\n    setStyle2({\n      display: 'none',\n    });\n    setStyle3({\n      display: 'none',\n    });\n  };\n  const click2 = () => {\n    setStyle2({\n      display: 'block',\n    });\n    setStyle1({\n      display: 'none',\n    });\n    setStyle3({\n      display: 'none',\n    });\n  };\n  const click3 = () => {\n    setStyle3({\n      display: 'block',\n    });\n    setStyle2({\n      display: 'none',\n    });\n    setStyle1({\n      display: 'none',\n    });\n  };\n  return (\n    <div>\n      <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>\n        <div>\n          <h2 onClick={click1}>基础用法</h2>\n        </div>\n        <div>\n          <h2 onClick={click2}>成功提示</h2>\n        </div>\n        <div>\n          <h2 onClick={click3}>自定义提示</h2>\n        </div>\n      </div>\n      <div style={style1}>\n        <PullRefresh\n          onRefresh={handleRefresh}\n          loading={loading}\n        >\n          <p>\n            刷新次数1\n          </p>\n        </PullRefresh>\n      </div>\n      <div style={style2}>\n        <PullRefresh\n          onRefresh={handleRefresh}\n          loading={loading}\n          successText={<div>哈哈哈哈我成功刷新了</div>}\n        >\n          <p>\n            刷新次数2\n          </p>\n        </PullRefresh>\n      </div>\n      <div style={style3}>\n        <PullRefresh\n          onRefresh={handleRefresh}\n          loading={loading}\n          pullingText={<div>下拉中</div>}\n          headHeight={120}\n          successDuration={1000}\n          loadingText={(\n            <div style={{ display: 'flex', width: '100%' }}>\n              <p>我在加载</p>\n              <img src=\"https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png\" style={{ height: 120 }} alt=\"lo\" />\n            </div>\n          )}\n          successText={(\n            <div style={{ display: 'flex' }}>\n              <p>成功啦</p>\n              <img src=\"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png\" style={{ height: 120 }} alt=\"success\" />\n            </div>\n          )}\n        >\n          <p>\n            刷新次数3\n          </p>\n        </PullRefresh>\n      </div>\n    </div>\n  );\n};\n\nexport default Demo;\n"}
          </Highlight>
        </div>
      )}
    </div>
  );
};

export default codeDemo;
