import React, { Component } from 'react';
import classNames from 'classnames';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider/context';

export interface BaseLoadingProps extends React.HTMLAttributes<HTMLDivElement> {
  /* 用户自定义类前缀，默认uni-loading */
  prefixCls?: string;
  /* 颜色 */
  color?: string;
  /* 类型，可选值为 spinner */
  type?: 'spinner' | 'circular';
  /* 加载图标大小，默认单位为 px */
  size?: number;
  /* 文字大小，默认单位为 px */
  textSize?: number | string;
  // 文字颜色
  textColor?: string;
  // 是否垂直排列图标和文字内容
  vertical?: boolean;
  // 背景颜色
  // backgroundColor?: string;
  className?: string;
}

class Loading extends Component<BaseLoadingProps> {
  renderLoading = ({ getPrefixCls }: ConfigConsumerProps) => {
    const {
      prefixCls,
      color = 'rgba(0,0,0,0.80)',
      type = 'circular',
      size = '20px',
      textSize = '14px',
      textColor = '#A6A8A9',
      // backgroundColor = 'rgba(0,0,0,0.80)',
      vertical,
      children,
      className,
      style,
      ...rest
    } = this.props;
    const prefix = getPrefixCls('loading', prefixCls);
    const mainClass = classNames(prefix, className, {
      // [`${prefix}-${fieldType}`]: fieldType,
    });

    const arr = Array.from(Array(12), (v, k) => k + 1);

    const textStyle = {
      color: textColor,
      fontSize: textSize,
    };

    return (
      <div {...rest} className={mainClass} style={{ ...style, flexDirection: vertical ? 'column' : 'row' }}>
        {type === 'circular'
          ? (
            <svg viewBox="0 0 50 50" className={`${prefix}-svg`} style={{ width: size, height: size }}>
              <circle cx="25" cy="25" r="20" fill="none" className={`${prefix}-${type}`} style={{ stroke: color }} />
            </svg>
          )
          : (
            <div className={`${prefix}-${type}`} style={{ width: size, height: size }}>
              {arr.map((item, index) => (
                <i
                  key={item}
                  style={{
                    transform: `rotate(${(index + 1) * 30}deg)`,
                    opacity: 1 / index,
                    color,
                  }}
                />
              ))}
            </div>
          )}
        {children && <span className={`${prefix}-text`} style={textStyle}>{children}</span>}
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
