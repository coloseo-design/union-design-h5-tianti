import React from 'react';
import { NoticeBar } from '../index';
import './styles/index';

const containerStyle = {
  width: 377,
  height: 548,
  backgroundColor: '#fafafa',
  padding: 10,
  overflow: 'scroll',
  borderRadius: 12,
  boxShadow: '#ebedf0 0 4px 12px',
};
const Demo = () => (
  <div>
    <h1>通知栏 / 基础样式</h1>
    <button
      type="button"
      onClick={() => NoticeBar.open({
        text: '这是正文这是正文这是正文这是正文这是正文这是正文',
        rightIcon: 'right',
        duration: 7,
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
        leftIcon: 'send',
        text: '这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文',
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

    <h1>渲染到指定容器</h1>
    <div id="testContainer" style={{ position: "relative", height: 200, backgroundColor: "grey" }}>
      <div>哈哈哈</div>
    </div>
    <button
      type="button"
      onClick={() => NoticeBar.open({
        text: '这是正文这是正文这是正文这是正文这是正文这是正文',
        container: () => document.getElementById("testContainer"),
        zIndex: 800,
        duration: 2,
      })}
    >
      普通展示样式
    </button>
    <button
      type="button"
      onClick={() => NoticeBar.open({
        text: '这是正文这是正文222',
        container: () => document.getElementById("testContainer"),
        zIndex: 800,
      })}
    >
      普通展示样式22
    </button>
    <div id="testContainer1" style={{ position: "relative", height: 200, backgroundColor: "grey" }}>
    </div>
    <button
      type="button"
      onClick={() => NoticeBar.open({
        text: '这是正文这是正文333',
        container: () => document.getElementById("testContainer1"),
        zIndex: 1000,
        duration: 5,
      })}
    >
      普通展示样式22
    </button>
  </div>
);

export default Demo;
