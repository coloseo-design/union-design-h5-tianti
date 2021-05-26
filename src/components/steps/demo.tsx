import React from 'react';
import Steps from './index';
import Divider from '../divider';

const StepsDemo = () => {
  const { Step } = Steps;
  const [current, setCurrent] = React.useState(1);
  const handleChange = (idx: number) => {
    setCurrent(idx);
  };

  return (
    <div style={{ margin: 64 }}>
      <h2>提交卡片流程</h2>
      <Steps style={{ marginTop: 64, width: 400 }}>
        <Step title="审批部门" description="戴永民" text="永民" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        <Step title="审批部门" description="戴永民" text="永民" />
      </Steps>
      <Divider style={{ margin: '32px 0px' }}>提交卡片流程</Divider>
      <h2>流程浏览带状</h2>
      <Steps style={{ marginTop: 64, width: 400 }} type="browse">
        <Step
          status="success"
          title="发起审批"
          subTitle="09.12 13:24"
          description="我"
          text="永民"
        />
        <Step
          status="info"
          title="处理人"
          description="审批中"
          text="永民"
          subTitle="09.12 13:24"
        />
        <Step
          title="处理人"
          description="待审批"
          text="永民"
          subTitle="09.12 13:24"
        />
      </Steps>
      <Divider style={{ margin: '32px 0px' }}>流程浏览带状-带小标题</Divider>
      <Steps style={{ marginTop: 64 }} type="browse">
        <Step status="success" title="发起审批" description="我" text="永民" />
        <Step status="success" title="处理人" description="审批完成" text="永民" />
        <Step status="error" title="处理人" description="拒绝通过" text="永民" />
      </Steps>
      <Divider style={{ margin: '32px 0px' }}>流程浏览带状-不带小标题</Divider>
      <h2 style={{ margin: '32px 0px' }}>自定义流程状态</h2>
      <Steps type="browse" current={current} status="success" onChange={handleChange}>
        <Step title="发起审批" description="我" text="永民" />
        <Step title="处理人" description="审批完成" text="永民" />
        <Step title="处理人" description="拒绝通过" text="永民" />
      </Steps>
      <Divider style={{ margin: '32px 0px' }}>自定义流程状态</Divider>
    </div>
  );
};

export default StepsDemo;
