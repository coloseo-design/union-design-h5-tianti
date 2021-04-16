import React, { Component } from 'react';
import classNames from 'classnames';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider/context';
import Icon from '../icon';

export interface BasePraiseProps {
  /* 用户自定义类前缀，默认uni-praise */
  prefixCls?: string;
  /* 颜色 */
  color?: string;
  /* 类型，可选值为icon的所有type */
  iconType?: string;
  /* 图标大小，默认单位为 px */
  size?: number | string;
  // 点赞的数量
  number?: number;
  // number变化时触发
  onChange?: () => void;
  // 当前点赞状态
  status?: boolean | undefined;
}

export interface PraiseState {
  number: number;
  status: boolean | undefined;
}

class Praise extends Component<BasePraiseProps, PraiseState> {
  constructor(props: BasePraiseProps) {
    super(props);
    const { number = 0, status } = props;
    this.state = {
      number,
      status,
    };
  }

  componentDidUpdate(prevProps: BasePraiseProps) {
    const { number = 0 } = this.props;
    if (number !== prevProps.number) {
      this.setState({ number });
    }
  }

  renderPraise = ({ getPrefixCls }: ConfigConsumerProps) => {
    const {
      prefixCls,
      iconType = 'like',
      color = '#F31D39',
      size = '20px',
      ...rest
    } = this.props;
    const { number, status } = this.state;
    const prefix = getPrefixCls('praise', prefixCls);
    const mainClass = classNames(prefix, {
      // [`${prefix}-${fieldType}`]: fieldType,
    });

    const onClick = () => {
      this.setState({ status: !status });
    };

    return (
      <span {...rest} className={mainClass}>
        <Icon
          type={iconType}
          style={{ color: status ? color : '#A6A8A9', fontSize: size }}
          onClick={onClick}
        />
        <span style={{ color: status ? color : '#A6A8A9' }}>{number}</span>
      </span>
    );
  };

  render() {
    return (
      <ConfigConsumer>
        {this.renderPraise}
      </ConfigConsumer>
    );
  }
}

export default Praise;
