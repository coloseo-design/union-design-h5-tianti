/* eslint-disable react/no-array-index-key */
import React from 'react';
import classNames from 'classnames';
import Step from './step';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider/context';

export interface StepsProps {
  prefixCls?: string;
  /* 步骤条类型 */
  type?: 'card' | 'browse';
  style?: React.CSSProperties;
  className?: string;
  /* 指定当前步骤 */
  current?: number;
  /* 指定当前步骤的状态 */
  status?: 'success' | 'error' | 'info' | undefined;
  onChange?: (current: number) => void;
}

class Steps extends React.Component<StepsProps> {
  static Step: typeof Step;

  handleChange = (index: number) => {
    const { onChange } = this.props;
    onChange && onChange(index);
  };

  renderSteps = ({ getPrefixCls }: ConfigConsumerProps) => {
    const {
      prefixCls,
      children,
      style,
      type,
      className,
      current,
      status,
    } = this.props;
    const prex = getPrefixCls('steps', prefixCls);
    const container = classNames(prex, className);
    const child = React.Children.toArray(children);
    return (
      <div className={container} style={style}>
        {(child || []).map((item, index) => (
          <div key={index}>
            <Step
              {...item?.props}
              type={type}
              isLast={index === child.length - 1}
              current={current}
              parentStatus={status}
              currentIndex={index}
              onChange={this.handleChange}
            />
          </div>
        ))}
      </div>
    );
  };

  render() {
    return (
      <ConfigConsumer>
        {this.renderSteps}
      </ConfigConsumer>
    );
  }
}

Steps.Step = Step;

export default Steps;
