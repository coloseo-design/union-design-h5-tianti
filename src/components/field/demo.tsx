import React from 'react';
import { Field, Avatar } from '../index';
import './styles/index';
import '../avatar/styles/index';

const Demo = () => (
  <div>
    <section>
      <h2>输入框分类</h2>
      <p>
        输入框的形式分为有边框输入框和无边框输入框形式。

        有边框输入框：可在白背景或有背景色的情况下使用
        无边框输入框：在白背景下使用。
        在输入框中添加图标：用于对输入框含义补充解释，提输入内容识别效率。
      </p>
      <p>有线框输入框</p>
      <Field placeholder="内容标题" border />
      <p>无线框输入框</p>
      <div style={{ background: '#fff', padding: 16 }}>
        <Field placeholder="内容标题" />
      </div>
    </section>

    <section>
      <h2>基本输入框</h2>
      <div style={{ background: '#fff' }}>
        <Field placeholder="内容标题" border />
        <Field placeholder="内容标题" border leftIcon="edit-outline" />
        <Field value="输入错误" leftIcon="edit-outline" status="error" />
        <Field value="输入错误" border leftIcon="edit-outline" status="error" />
      </div>
    </section>

    <section>
      <h2>密码输入框</h2>
      <div style={{ background: '#fff' }}>
        <Field placeholder="内容标题" border fieldType="password" />
        <Field placeholder="内容标题" fieldType="password" />
        <Field placeholder="内容标题" fieldType="password" value="123" border />
        <Field placeholder="内容标题" fieldType="password" value="输入错误" border status="error" />
      </div>
    </section>

    <section>
      <h2>多行输入框</h2>
      <div style={{ background: '#fff' }}>
        <Field placeholder="单行输入" fieldType="textarea" rows={1} />
        <Field placeholder="自适应内容高度" fieldType="textarea" autosize />
        <Field value="多行输入" fieldType="textarea" showWordLimit maxLength={500} />
        <div style={{ display: 'flex', alignItems: 'center', padding: 16 }}>
          <Avatar text="姓名" style={{ marginRight: 16 }} />
          <Field placeholder="我来说几句" fieldType="textarea" rows={1} style={{ flex: 1 }} />
        </div>
      </div>
    </section>
  </div>
);

export default Demo;
