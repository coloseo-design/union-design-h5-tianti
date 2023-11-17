import React, { useRef } from 'react';
import { Field, Avatar } from '../index';
import './styles/index';
import '../avatar/styles/index';

const Demo = () => {
  const textRef = useRef<any>();
  return (
    <div>
      <section>
        <h2>输入框分类</h2>
        <p>
          输入框的形式分为有边框输入框和无边框输入框形式。
  
          有边框输入框：可在白背景或有背景色的情况下使用
          无边框输入框：在白背景下使用。
          在输入框中添加图标：用于对输入框含义补充解释，提输入内容识别效率。
        </p>
        <p>数字输入框</p>
        <Field value={0} fieldType="number" border  />
        <p>有线框输入框</p>
        <Field placeholder="内容标题" border disabled />
        <p>无线框输入框</p>
        <div style={{ background: '#fff', padding: 16 }}>
          <Field placeholder="内容标题" style={{ width: 100 }} />
        </div>
      </section>
  
      <section>
        <h2>基本输入框</h2>
        <h3>size=default</h3>
        <div style={{ background: '#fff' }}>
          <h4>无边框</h4>
          <Field placeholder="内容标题" />
          <h4>有边框</h4>
          <Field placeholder="内容标题" border isClear style={{ margin: '46px 0px' }} />
          <h4>有前置图标</h4>
          <Field placeholder="内容标题" border leftIcon="edit2-surface" />
          <h4>错误状态无边框</h4>
          <Field value="输入错误" leftIcon="edit2-surface" status="error" />
          <h4>错误状态无边框</h4>
          <Field value="输入错误" border leftIcon="edit2-surface" status="error" />
        </div>
        <h3>size=md</h3>
        <div style={{ background: '#fff' }}>
          <Field size="md" placeholder="内容标题" />
          <Field size="md" placeholder="内容标题" border />
          <Field size="md" placeholder="内容标题" border leftIcon="edit2-surface" />
          <Field size="md" value="输入错误" leftIcon="edit2-surface" status="error" />
          <Field size="md" value="输入错误" border leftIcon="edit2-surface" status="error" />
        </div>
        <h3>size=sm</h3>
        <div style={{ background: '#fff' }}>
          <Field size="sm" placeholder="内容标题" />
          <Field size="sm" placeholder="内容标题" border />
          <Field size="sm" placeholder="内容标题" border leftIcon="edit2-surface" />
          <Field size="sm" value="输入错误" leftIcon="edit2-surface" status="error" />
          <Field size="sm" value="输入错误" border leftIcon="edit2-surface" status="error" />
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
          <Field
            placeholder="请输入"
            fieldType="textarea"
            style={{ margin: '24px 0px' }}
            isResize={false}
            leftIcon="edit2-surface"
            rows={1}
          />
          <Field
            placeholder="请输入"
            fieldType="textarea"
            style={{ margin: '24px 0px', height: 100 }}
            isResize={false}
            leftIcon="edit2-surface"
          />
          <p>自适应高度</p>
          <Field
            style={{ margin: '24px 0px' }}
            placeholder="自适应内容高度"
            fieldType="textarea"
            autosize
            isResize={false}
            ref={textRef}
            value="你下午好久到位d你下午好久到位d你下午好久到位d你下午好久到位d你下午好久到位d你下午好久到位d你下午好久到位d你下午好久到位d你下午好久到位d"
          />
          <Field style={{ margin: '24px 0px' }} placeholder="多行输入" isResize={false} fieldType="textarea" showWordLimit maxLength={500} />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Avatar text="姓名" size={32} />
            <Field
              placeholder="我来说几句"
              fieldType="textarea"
              rows={5}
              autosize
              style={{ margin: '0px 12px', flex: 1 }}
              showWordLimit maxLength={500}
            />
            <div style={{ color: '#F31D39', display: 'flex', alignItems: 'flex-end' }}>发布</div>
          </div>
        </div>
      </section>
    </div>
  )
};

export default Demo;
