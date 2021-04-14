import React, { Component } from 'react';
import classNames from 'classnames';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider/context';
import Icon from '../icon';

export interface BaseLoadingProps {
  /* 用户自定义类前缀，默认uni-loading */
  prefixCls?: string;
  /* 颜色 */
  color?: string;
  /* 类型，可选值为 spinner */
  type?: 'spinner' | 'circular';
  /* 加载图标大小，默认单位为 px */
  size?: number | string;
  /* 文字大小，默认单位为 px */
  textSize?: number | string;
  // 文字颜色
  textColor?: string;
  // 是否垂直排列图标和文字内容
  vertical?: boolean;
  // 背景颜色
  backgroundColor?: string;
  // 加载文案
  text?: string;
}

export interface loadingState {
  height: string | number;
}

class Loading extends Component<BaseLoadingProps, loadingState> {
  constructor(props: BaseLoadingProps) {
    super(props);
    this.state = {
      height: 'unset',
    };
  }

  componentDidMount() {
    const height = document.querySelector('.uni-loading')?.clientWidth;
    const { vertical } = this.props;
    height && vertical && this.setState({ height });
  }

  renderLoading = ({ getPrefixCls }: ConfigConsumerProps) => {
    const {
      prefixCls,
      color = '#646566',
      type = 'circular',
      size = '20px',
      textSize = '14px',
      textColor = '#A6A8A9',
      backgroundColor = 'rgba(0,0,0,0.80)',
      vertical,
      text,
    } = this.props;
    const { height } = this.state;
    const prefix = getPrefixCls('loading', prefixCls);
    const mainClass = classNames(prefix, {
      // [`${prefix}-${fieldType}`]: fieldType,
    });

    return (
      <div className={mainClass} style={{ backgroundColor, height, flexDirection: vertical ? 'column' : 'row' }}>
        {type === 'circular'
          ? <Icon type="loading_circle" spin style={{ fontSize: size, color }} />
          : <div />}
        {text && <span className={`${prefix}-text`} style={{ color: textColor, fontSize: textSize }}>{text}</span>}
      </div>
    );
  };

  render() {
    return (
      <ConfigConsumer>
        {this.renderLoading}
      </ConfigConsumer>
    );
  }
}

export default Loading;
