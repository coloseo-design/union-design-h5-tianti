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
            {"import React from 'react';\nimport NoticeBar from './index';\n\nconst Demo = () => (\n  <div style={{ display: 'flex', flexFlow: 'column nowrap' }}>\n    <h1>通知栏 / 基础样式</h1>\n    <button\n      type=\"button\"\n      onClick={() => NoticeBar.open({\n        text: '这是正文这是正文这是正文这是正文这是正文这是正文',\n      })}\n    >\n      普通展示样式\n    </button>\n    <button\n      type=\"button\"\n      onClick={() => NoticeBar.open({\n        id: '可删除样式',\n        rightIcon: 'close',\n        duration: 0,\n        rightIconOnClick: () => NoticeBar.close('可删除样式'),\n        text: '这是正文这是正文这是正文这是正文这是正文这是正文',\n      })}\n    >\n      可删除样式\n    </button>\n    <button\n      type=\"button\"\n      onClick={() => NoticeBar.open({\n        rightIcon: 'right',\n        text: '这是正文这是正文这是正文这是正文这是正文这是正文',\n      })}\n    >\n      可跳转样式\n    </button>\n    <h1>通知栏 / 带icon样式</h1>\n    <button\n      type=\"button\"\n      onClick={() => NoticeBar.open({\n        id: '通知栏 / 带icon样式 1',\n        leftIcon: 'send',\n        rightIcon: 'close',\n        duration: 0,\n        rightIconOnClick: () => NoticeBar.close('通知栏 / 带icon样式 1'),\n        text: '这是正文这是正文这是正文这是正文这是正文这是正文',\n      })}\n    >\n      通知栏 / 带icon样式 1\n    </button>\n    <button\n      type=\"button\"\n      onClick={() => NoticeBar.open({\n        leftIcon: 'send',\n        text: '这是正文这是正文这是正文这是正文这是正文这是正文',\n      })}\n    >\n      通知栏 / 带icon样式 2\n    </button>\n    <button\n      type=\"button\"\n      onClick={() => NoticeBar.open({\n        leftIcon: 'send',\n        rightIcon: 'right',\n        text: '这是正文这是正文这是正文这是正文这是正文这是正文',\n      })}\n    >\n      通知栏 / 带icon样式 3\n    </button>\n    <h1>通知栏 / 多行文本通知样式</h1>\n    <button\n      type=\"button\"\n      onClick={() => NoticeBar.open({\n        multiline: true,\n        text: '这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文',\n      })}\n    >\n      通知栏 / 多行文本通知样式\n    </button>\n    <h1>通知栏 / 自定义样式</h1>\n    <button\n      type=\"button\"\n      onClick={() => NoticeBar.success({\n        text: '这是正文这是正文这是正文这是正文这是正文这是正文',\n      })}\n    >\n      正向提示样式\n    </button>\n    <button\n      type=\"button\"\n      onClick={() => NoticeBar.error({\n        text: '这是正文这是正文这是正文这是正文这是正文这是正文',\n      })}\n    >\n      错误提示样式\n    </button>\n    <button\n      type=\"button\"\n      onClick={() => NoticeBar.warning({\n        duration: 0,\n        text: '这是正文这是正文这是正文这是正文这是正文这是正文',\n      })}\n    >\n      警告提示样式\n    </button>\n    <button\n      type=\"button\"\n      onClick={() => NoticeBar.supplement({\n        text: '这是正文这是正文这是正文这是正文这是正文这是正文',\n      })}\n    >\n      补充提示样式\n    </button>\n    <button\n      type=\"button\"\n      onClick={() => NoticeBar.open({\n        text: '这是正文这是正文这是正文这是正文这是正文这是正文',\n      })}\n    >\n      小提示\n    </button>\n    <button\n      type=\"button\"\n      onClick={() => NoticeBar.grey({\n        text: '这是正文这是正文这是正文这是正文这是正文这是正文',\n      })}\n    >\n      小提示置灰\n    </button>\n  </div>\n);\n\nexport default Demo;\n"}
          </Highlight>
        </div>
      )}
    </div>
  );
};

export default codeDemo;
