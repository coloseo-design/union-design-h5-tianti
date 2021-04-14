import React from 'react';
import NoticeBar from './index';

const Demo = () => (
  <div style={{ display: 'flex', flexFlow: 'column nowrap' }}>
    <h1>通知栏 / 基础样式</h1>
    <button
      type="button"
      onClick={() => NoticeBar.open({
        text: '这是正文这是正文这是正文这是正文这是正文这是正文',
      })}
    >
      普通展示样式
    </button>
    <button
      type="button"
      onClick={() => NoticeBar.open({
        id: '可删除样式',
        rightIcon: 'close',
        duration: 0,
        rightIconOnClick: () => NoticeBar.close('可删除样式'),
        text: '这是正文这是正文这是正文这是正文这是正文这是正文',
      })}
    >
      可删除样式
    </button>
    <button
      type="button"
      onClick={() => NoticeBar.open({
        rightIcon: 'right',
        text: '这是正文这是正文这是正文这是正文这是正文这是正文',
      })}
    >
      可跳转样式
    </button>
    <h1>通知栏 / 带icon样式</h1>
    <button
      type="button"
      onClick={() => NoticeBar.open({
        id: '通知栏 / 带icon样式 1',
        leftIcon: 'send',
        rightIcon: 'close',
        duration: 0,
        rightIconOnClick: () => NoticeBar.close('通知栏 / 带icon样式 1'),
        text: '这是正文这是正文这是正文这是正文这是正文这是正文',
      })}
    >
      通知栏 / 带icon样式 1
    </button>
    <button
      type="button"
      onClick={() => NoticeBar.open({
        leftIcon: 'send',
        text: '这是正文这是正文这是正文这是正文这是正文这是正文',
      })}
    >
      通知栏 / 带icon样式 2
    </button>
    <button
      type="button"
      onClick={() => NoticeBar.open({
        leftIcon: 'send',
        rightIcon: 'right',
        text: '这是正文这是正文这是正文这是正文这是正文这是正文',
      })}
    >
      通知栏 / 带icon样式 3
    </button>
    <h1>通知栏 / 多行文本通知样式</h1>
    <button
      type="button"
      onClick={() => NoticeBar.open({
        multiline: true,
        text: '这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文',
      })}
    >
      通知栏 / 多行文本通知样式
    </button>
    <h1>通知栏 / 自定义样式</h1>
    <button
      type="button"
      onClick={() => NoticeBar.success({
        text: '这是正文这是正文这是正文这是正文这是正文这是正文',
      })}
    >
      正向提示样式
    </button>
    <button
      type="button"
      onClick={() => NoticeBar.error({
        text: '这是正文这是正文这是正文这是正文这是正文这是正文',
      })}
    >
      错误提示样式
    </button>
    <button
      type="button"
      onClick={() => NoticeBar.warning({
        duration: 0,
        text: '这是正文这是正文这是正文这是正文这是正文这是正文',
      })}
    >
      警告提示样式
    </button>
    <button
      type="button"
      onClick={() => NoticeBar.supplement({
        text: '这是正文这是正文这是正文这是正文这是正文这是正文',
      })}
    >
      补充提示样式
    </button>
    <button
      type="button"
      onClick={() => NoticeBar.open({
        text: '这是正文这是正文这是正文这是正文这是正文这是正文',
      })}
    >
      小提示
    </button>
    <button
      type="button"
      onClick={() => NoticeBar.grey({
        text: '这是正文这是正文这是正文这是正文这是正文这是正文',
      })}
    >
      小提示置灰
    </button>
  </div>
);

export default Demo;
