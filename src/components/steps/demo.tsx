import React, { useState } from "react";
import { Steps, Avatar, Tab } from "../index";
import "./styles/index";
import "../divider/styles/index";

type UserCardProps = {
  name: string;
  status: string;
  statusColor: string;
  date: string;
  icon: string;
};

const UserCard = React.memo<UserCardProps>((props) => {
  const { icon, name, status, statusColor, date } = props;

  return (
    <div style={{ display: "flex", flexFlow: "row nowrap", marginTop: 8 }}>
      <div style={{ flexShrink: 0 }}>
        <Avatar icon={icon} iconColor={statusColor} text={name.slice(0, 2)} />
      </div>
      <div style={{ flex: 1, marginLeft: 12 }}>
        <div
          style={{
            display: "flex",
            flexFlow: "row nowrap",
            justifyContent: "space-between",
            lineHeight: "22px",
          }}
        >
          <div style={{ fontSize: 16, color: "#000000" }}>{name}</div>
          <div style={{ fontSize: 12, color: "#A6A8A9" }}>{date}</div>
        </div>
        <div style={{ fontSize: 12, lineHeight: "16px", color: statusColor }}>
          {status}
        </div>
        <div
          style={{
            marginTop: 8,
            backgroundColor: "#F5F6F6",
            color: "#646566",
            fontSize: 12,
            lineHeight: "16px",
            padding: "5px 8px",
            wordBreak: 'break-all',
          }}
        >
          回复内容
          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        </div>
      </div>
    </div>
  );
});

const StepsDemo = () => {
  const { Step } = Steps;

  const [test, setTest] = React.useState<any[]>([]);

  const data = [
    {
      icon: 'check1-surface',
      name:' 姚开瑞',
      date: 'YYYY-MM-DD 12:00',
      status: '已发起',
      statusColor: '#02A851',
      title: '发起人',
    },
    {
      icon: 'close1-surface',
      name:' 姚开瑞',
      date: 'YYYY-MM-DD 12:00',
      status: '已驳回',
      statusColor: '#CA0118',
      title: '部门预算管理员',
    },
    {
      icon: 'right1-surface',
      name:'刘斌',
      date: 'YYYY-MM-DD 12:00',
      status: '进行中',
      statusColor: '#3C81F0',
      title: '部门总经理',
    },
    {
      icon: 'more1-surface',
      name:' 姚开瑞',
      date: 'YYYY-MM-DD 12:00',
      status: '暂办',
      statusColor: '#ED6A0C',
      title: '完结',
    },
  ];

  React.useEffect(() => {
    setTimeout(() => {
      setTest(data);
    }, 100);
  }, [])

  const [key, setkey] = useState('1');

  return (
    <div>
      <h2>提交卡片流程</h2>
      <Tab mode="fixed" contentType="all" selectedKey={key} onTabChange={(k) => setkey(k)}>
        <Tab.Item key="1" title="还好">还好</Tab.Item>
        <Tab.Item key="3" title="history">还好</Tab.Item>
        <Tab.Item key="2" title="step">
        <Steps>
          {test.map((item: any) => (
        <Step style={{ padding: '16px 0px 0px 0px'}} title={item.title} dotColor={item.statusColor} key={item.icon}>
        <UserCard
          icon={item.icon}
          name={item.name}
          date={item.date}
          status={item.status}
          statusColor={item.statusColor}
        />
      </Step>
          ))}
      </Steps>
        </Tab.Item>
      </Tab>
    </div>
  );
};

export default StepsDemo;
