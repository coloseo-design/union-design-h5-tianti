import React from "react";
import { Steps, Avatar } from "../index";
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
          }}
        >
          回复内容
        </div>
      </div>
    </div>
  );
});

const StepsDemo = () => {
  const { Step } = Steps;

  return (
    <div>
      <h2>提交卡片流程</h2>
      <Steps>
        <Step title="发起人" dotColor="#02A851">
          <UserCard
            icon="checkout"
            name="姚开瑞"
            date="YYYY-MM-DD 12:00"
            status="已发起"
            statusColor="#02A851"
          />
        </Step>
        <Step title="部门预算管理员" dotColor="#CA0118">
          <UserCard
            icon="close"
            name="姚开瑞"
            date="YYYY-MM-DD 12:00"
            status="已驳回"
            statusColor="#CA0118"
          />
        </Step>
        <Step title="部门总经理" dotColor="#3C81F0">
          <UserCard
            icon="right1-surface"
            name="刘斌"
            date="YYYY-MM-DD 12:00"
            status="进行中"
            statusColor="#3C81F0"
          />
        </Step>
        <Step title="完结" dotColor="#ED6A0C">
          <UserCard
            icon="more"
            name="姚开瑞"
            date="YYYY-MM-DD 12:00"
            status="暂办"
            statusColor="#ED6A0C"
          />
        </Step>
      </Steps>
    </div>
  );
};

export default StepsDemo;
