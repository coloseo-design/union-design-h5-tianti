import React, { useState, useEffect } from 'react';
import { ApproveCard, Tab } from '..';
import './styles/index';

export default () => {
  const [selectKey, setKey] = useState('1');
  const [visible, setVisible] = useState(true);
  const tabHeight = 86;
  const content = Array.from({ length: 25 }).map((_, k) => (
    <p key={k}>页面内容页面内容页面内容页面内容页面内容页面内容</p>
  ));
  const tabsData = [
    {
      key: '1',
      title: '标签1',
      taskNum: 100,
    },
    {
      key: '2',
      title: '标签2',
      taskNum: 67,
    },
    {
      key: '3',
      title: '标签3',
      taskNum: 88,
    },
  ];
  const handleChange = React.useCallback((key: string) => {
    const element = document.getElementById(`标签${key}`);
    element?.scrollIntoView();
    if (element) {
      element?.scrollIntoView();
      window.scrollTo({
        top: window.scrollY - tabHeight,
      });
    }
  }, []);

  const scroll = () => {
    let key = selectKey;
    setVisible(false);
    for (const item of tabsData) {
      const el = document.getElementById(`${item.title}`);
      if (!el) continue;
      const rect = el?.getBoundingClientRect();
      if (rect.top <= tabHeight) {
        key = item.key;
      } else {
        break;
      }
    }
    setKey(key);
  };
  useEffect(() => {
    window.addEventListener('scroll', scroll);
    return () => {
      window.removeEventListener('scroll', scroll);
    };
  }, []);
  return (
    <div>
      <ApproveCard
        title="莫某某提交的财务申请相关内容莫某某提交的财务申请相关内容相关内容"
        status="progress"
        description="地址信息一级-地址相关信息二级"
      />
      <ApproveCard
        title="莫某某提交的财务申请相关内容莫某某提交的财务申请相关内容相关内容"
        status="success"
        description="地址信息一级-地址相关信息二级"
      />
      <ApproveCard
        title="莫某某提交的财务申请相关内容莫某某提交的财务申请相关内容相关内容"
        status="rejected"
        description="地址信息一级-地址相关信息二级"
      />
            <ApproveCard
        title="莫某某提交的财务申请相关内容莫某某提交的财务申请相关内容相关内容"
        status={<div style={{ padding: '0px 2px', textAlign: 'center', lineHeight: '16px', fontSize: 12, borderRadius: 4, color: 'palegreen', background: 'green'}}>自定义</div>}
        description="地址信息一级-地址相关信息二级"
      />
      {visible && <ApproveCard
        title="莫某某提交的财务申请相关内容莫某某提交的财务申请相关内容相关内容"
        status="progress"
        description="地址信息一级-地址相关信息二级"
      />}
      <div style={{ background: '#fff' }}>
        <Tab
          contentDirection="vertical"
          selectedKey={selectKey}
          type="task"
          onTabChange={handleChange}
          className="scrollTab"
          tabStyle={{ position: 'sticky', top: 0, zIndex: 10, display: visible ? 'none' : 'block' }}
        >
          {tabsData.map((item) => (
            <Tab.Item key={item.key} title={item.title} taskNum={item.taskNum}>
              <h2 id={item.title}>{item.title}</h2>
              <div style={{ padding: 12 }}>
                {content}
              </div>
            </Tab.Item>
          ))}
        </Tab>
      </div>
    </div>
  )
}