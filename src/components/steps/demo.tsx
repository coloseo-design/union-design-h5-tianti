import React from 'react';
import Steps from './index';

const StepsDemo = () => {
  const { Step } = Steps;
  const [current, setCurrent] = React.useState(1);
  const handleChange = (idx: number) => {
    setCurrent(idx);
  };

  return (
    <div style={{ margin: 64 }}>
      <h2>提交卡片流程</h2>
      <Steps style={{ margin: '64px 0px', width: 400 }}>
        <Step title="审批部门" nameSrc="戴永民" />
        <Step title="审批部门" nameSrc="戴永民" />
      </Steps>
      <h2>流程浏览带状</h2>
      <Steps style={{ marginTop: 64, width: 400 }} type="browse">
        <Step
          status="success"
          title="发起审批"
          subTitle="09.12 13:24"
          description="我"
          nameSrc="永民"
        />
        <Step
          status="info"
          title="处理人"
          description="审批中"
          nameSrc="永民"
          subTitle="09.12 13:24"
        />
        <Step
          title="处理人"
          description="待审批"
          nameSrc="永民"
          subTitle="09.12 13:24"
        />
      </Steps>
      <Steps style={{ marginTop: 64 }} type="browse">
        <Step status="success" title="发起审批" description="我" nameSrc="永民" />
        <Step status="success" title="处理人" description="审批完成" nameSrc="永民" />
        <Step status="error" title="处理人" description="拒绝通过" nameSrc="永民" />
      </Steps>
      <h2 style={{ margin: '32px 0px' }}>自定义流程状态</h2>
      <Steps type="browse" current={current} status="success" onChange={handleChange}>
        <Step title="发起审批" description="我" nameSrc="永民" />
        <Step title="处理人" description="审批完成" nameSrc="永民" />
        <Step title="处理人" description="拒绝通过" nameSrc="永民" />
      </Steps>
    </div>
  );
};

export default StepsDemo;
