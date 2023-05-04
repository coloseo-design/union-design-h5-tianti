import React from "react";
import { Divider } from "../index";
import "./styles/index";

const DividerDemo = () => (
  <div>
    <p>
      {` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.`}
    </p>
    <Divider />
    <p>
      {` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.`}
    </p>
    <Divider>标题</Divider>
    <div style={{ display: "flex", flexFlow: "row nowrap" }}>
      <p>
        {` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.`}
      </p>
      <Divider type="vertical" />
      <p>
        {` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.`}
      </p>
    </div>
  </div>
);

export default DividerDemo;
