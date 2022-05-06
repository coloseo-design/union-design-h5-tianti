import React, { Component } from 'react';
import classNames from 'classnames';
import Omit from 'omit.js';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider/context';
import Icon from '../icon';

export interface BasePraiseProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'onChange'> {
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
  onChange?: (number: number) => void;
  // 当前点赞状态
  status?: boolean;
}

export interface PraiseState {
  number: number;
  status: boolean | undefined;
  show: boolean;
}

class Praise extends Component<BasePraiseProps, PraiseState> {
  constructor(props: BasePraiseProps) {
    super(props);
    const { number = 0, status } = props;
    this.state = {
      number,
      status,
      show: false,
    };
  }

  componentDidUpdate(prevProps: BasePraiseProps) {
    const { number } = this.props;
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
      className,
      // status: propsStatus,
      onChange,
      ...Allrest
    } = this.props;
    const rest = Omit(Allrest, ['status']);
    const { number, status, show } = this.state;
    const prefix = getPrefixCls('praise', prefixCls);
    const mainClass = classNames(prefix, className, {
      // [`${prefix}-${fieldType}`]: fieldType,
    });

    const addPrefix = `${prefix}-add-wrap`;
    const addClass = classNames(addPrefix, {
      [`${addPrefix}-${show}`]: show,
    });

    const onClick = () => {
      if (!show && !status) {
        this.setState({ show: true });
      }
      const changeNumber = !status ? number + 1 : number - 1;
      this.setState({ status: !status, number: changeNumber });

      if (onChange) {
        onChange(changeNumber);
      }
    };

    const onAnimationEnd = ({ animationName }) => {
      if (animationName === 'praise-fadein') {
        this.setState({ show: false });
      }
    };

    return (
      <span {...rest} className={mainClass}>
        <Icon
          type={iconType}
          style={{ color: status ? color : '#A6A8A9', fontSize: size }}
          onClick={onClick}
        />
        <span className={`${prefix}-number`} style={{ color: status ? color : '#A6A8A9' }}>{number}</span>

        {show && (
          <span className={addClass} style={{ top: `calc(-${size} - 10px)` }} onAnimationEnd={onAnimationEnd}>
            <span className={`${prefix}-add-container`}>
              <span className={`${prefix}-add`}>+1</span>
            </span>
          </span>
        )}
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
