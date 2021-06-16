/* eslint-disable no-nested-ternary */
import React from 'react';
import classNames from 'classnames';
import Icon from '../icon';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider/context';

export interface BaseAvatarProps {
    src? : string | React.ReactNode;
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
      const w = size <= 32 ? 10 : Math.ceil(size / 3.3) - 2;
      return (
        <div
          className={`${prefix}-sub ${prefix}-sub-${type}`}
          style={{
            width: w, height: w, verticalAlign: 'middle', display: 'inline-block',
          }}
        >
          <Icon type={type === 'success' ? 'checkout' : type === 'error' ? 'close' : 'more'} style={{ fontSize: w - 2, display: 'block', marginTop: 1 }} />
        </div>
      );
    };

    renderAvatar = ({ getPrefixCls }: ConfigConsumerProps) => {
      const {
        prefixCls, className, size, text, style, children, type, src,
      } = this.props;

      const prefix = getPrefixCls('avatar-mobile', prefixCls);

      const clazzName = classNames(prefix, {
        [`${prefix}-badge`]: type,
      }, className);
        // 初始宽高 或  外部传入size
      const [w, h] = size ? [size, size] : [32, 32];
      const fontSize = w <= 20 ? 12 : Math.ceil(w / 2.56);
      let srcNode = null;
      if (src && React.isValidElement(src)) {
        srcNode = src;
      } else if (src && typeof src === 'string') {
        srcNode = <img src={src} alt="" />;
      }

      return (
        <span
          className={clazzName}
          style={{
            ...style, width: w, height: h, lineHeight: `${h}px`, fontSize,
          }}
        >
          { srcNode || text || children }
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
