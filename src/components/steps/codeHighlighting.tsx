/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/no-useless-path-segments */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from 'react';
import Highlight from 'react-highlight';
import Icon from '../icon';

const codeDemo = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div style={{
        border: '1px solid #E8E7E7', padding: 12, textAlign: 'right',
      }}
      >
        <Icon type="productd-evelop" style={{ fontSize: 20 }} onClick={() => setOpen(!open)} />
      </div>
      {open && (
        <div style={{ border: '1px solid #E8E7E7', borderTop: 'none', background: '#fff' }}>
          <Highlight>
            {"import React from 'react';\nimport Steps from './index';\n\nconst StepsDemo = () => {\n  const { Step } = Steps;\n  const [current, setCurrent] = React.useState(1);\n  const handleChange = (idx: number) => {\n    setCurrent(idx);\n  };\n\n  return (\n    <div style={{ margin: 64 }}>\n      <h2>提交卡片流程</h2>\n      <Steps style={{ margin: '64px 0px', width: 400 }}>\n        <Step title=\"审批部门\" description=\"戴永民\" text=\"永民\" src=\"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png\" />\n        <Step title=\"审批部门\" description=\"戴永民\" text=\"永民\" />\n      </Steps>\n      <h2>流程浏览带状</h2>\n      <Steps style={{ marginTop: 64, width: 400 }} type=\"browse\">\n        <Step\n          status=\"success\"\n          title=\"发起审批\"\n          subTitle=\"09.12 13:24\"\n          description=\"我\"\n          text=\"永民\"\n        />\n        <Step\n          status=\"info\"\n          title=\"处理人\"\n          description=\"审批中\"\n          text=\"永民\"\n          subTitle=\"09.12 13:24\"\n        />\n        <Step\n          title=\"处理人\"\n          description=\"待审批\"\n          text=\"永民\"\n          subTitle=\"09.12 13:24\"\n        />\n      </Steps>\n      <Steps style={{ marginTop: 64 }} type=\"browse\">\n        <Step status=\"success\" title=\"发起审批\" description=\"我\" text=\"永民\" />\n        <Step status=\"success\" title=\"处理人\" description=\"审批完成\" text=\"永民\" />\n        <Step status=\"error\" title=\"处理人\" description=\"拒绝通过\" text=\"永民\" />\n      </Steps>\n      <h2 style={{ margin: '32px 0px' }}>自定义流程状态</h2>\n      <Steps type=\"browse\" current={current} status=\"success\" onChange={handleChange}>\n        <Step title=\"发起审批\" description=\"我\" text=\"永民\" />\n        <Step title=\"处理人\" description=\"审批完成\" text=\"永民\" />\n        <Step title=\"处理人\" description=\"拒绝通过\" text=\"永民\" />\n      </Steps>\n    </div>\n  );\n};\n\nexport default StepsDemo;\n"}
          </Highlight>
        </div>
      )}
    </div>
  );
};

export default codeDemo;
