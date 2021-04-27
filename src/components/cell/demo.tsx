import React from 'react';
import Cell from './index';

const Demo = () => (
  <div>
    <Cell
      className="test"
      subtitle="2021.04.27"
      title="姓名提交的工作内容-标题的内容得你的的…"
      content={(
        <div>
          <div>编号：ZA991-20810-2138</div>
          <div>意向名称：这里是名称的名称</div>
          <div>项目类别：类别名称</div>
        </div>
      )}
      footer="footer"
    />
  </div>
);

export default Demo;
