import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider/context';

export interface DividerProps extends HTMLAttributes<HTMLElement> {
    className?: string;
    prefixCls?: string;
    style?: React.CSSProperties;
}

class Divider extends React.Component<DividerProps> {
    renderDivider = ({ getPrefixCls }: ConfigConsumerProps) => {
      const {
        prefixCls, className, children, style,
      } = this.props;
      const prefix = getPrefixCls('divider-mobile', prefixCls);
      const clazzName = classNames(prefix, {
        [`${prefix}-with-text`]: !!children,
      }, className);
      return (
        <div className={clazzName} style={{ ...style }}>
          {
            children && <span className={`${prefix}-text`}>{children}</span>
          }
        </div>
      );
    }

    render() {
      return (
        <ConfigConsumer>
          {this.renderDivider}
        </ConfigConsumer>
      );
    }
}

export default Divider;
