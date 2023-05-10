/* eslint-disable no-plusplus */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable object-curly-newline */
/* eslint-disable react/display-name */
/* eslint-disable quotes */
import React from "react";
import { useClassNames, useGetPrefixClass } from "../common/base-component";
import { Step, StepProps } from "./step";

export type StepsProps = {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

export type StepsType = React.NamedExoticComponent<StepsProps> & {
  Step: React.NamedExoticComponent<StepProps>;
};

let uid = 0;

const Steps = React.memo<StepsProps>((props) => {
  const { className, style, children } = props ?? {};
  const getPrefixClass = useGetPrefixClass("stepsv2");
  const classnames = useClassNames();
  const len = React.Children.count(children) - 1;
  return (
    <div className={classnames(getPrefixClass(), className)} style={style}>
      {React.Children.map(children, (item: any, index: number) => (
        <Step
          {...item.props}
          key={`${uid++}`}
          isFirst={index === 0}
          isLast={index === len}
        />
      ))}
    </div>
  );
}) as StepsType;

Steps.Step = Step;

export default Steps;
