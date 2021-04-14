/* eslint-disable no-nested-ternary */
import React from 'react';
import classNames from 'classnames';
import Icon from '../icon';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider/context';

export interface BaseAvatarProps {
    text?: string
    size?: number;
    className?: string;
    prefixCls?: string;
    style?: {[key: string]: unknown};
    type?: 'success' | 'error' | 'info';
}

class Avatar extends React.Component<BaseAvatarProps> {
    getBadge = (prefix : string) => {
      const { type, size = 32 } = this.props;
      const w = size ? Math.ceil(size / 2.7) : 24;
      return (
        <sub className={`${prefix}-sub-${type}`} style={{ width: w, height: w, lineHeight: `${w - 2}px` }}>
          <Icon type={type === 'success' ? 'checkout' : type === 'error' ? 'close' : 'more'} />
        </sub>
      );
    };

    renderAvatar = ({ getPrefixCls }: ConfigConsumerProps) => {
      const {
        prefixCls, className, size, text, style, children, type,
      } = this.props;

      const prefix = getPrefixCls('avatar-mobile', prefixCls);

      const clazzName = classNames(prefix, {
        [`${prefix}-badge`]: type,
      }, className);
        // 初始宽高 或  外部传入size
      const [w, h] = size ? [size, size] : [32, 32];
      const fontSize = w < 46 ? 12 : Math.ceil(w / 2) - 10;

      return (
        <span
          className={clazzName}
          style={{
            ...style, width: w, height: h, lineHeight: `${h}px`, fontSize,
          }}
        >
          { text || children }
          { type && this.getBadge(prefix) }
        </span>
      );
    };

    render() {
      return (
        <ConfigConsumer>
          {this.renderAvatar}
        </ConfigConsumer>
      );
    }
}

export default Avatar;
