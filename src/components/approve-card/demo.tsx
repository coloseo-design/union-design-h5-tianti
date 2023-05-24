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
      taskNum: 99,
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
      {visible && <ApproveCard
        title="莫某某提交的财务申请相关内容莫某某提交的财务申请相关内容相关内容"
        status="进行中"
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
            <Tab.Item key={item.key} taskNum={item.taskNum}>
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