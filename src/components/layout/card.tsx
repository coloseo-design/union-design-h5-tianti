import React, { Component } from 'react';
import classNames from 'classnames';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider/context';
import { BaseLayoutProps } from './layout';

class Layout extends Component<BaseLayoutProps> {
  renderLayout = ({ getPrefixCls }: ConfigConsumerProps) => {
    const {
      prefixCls,
      className,
      children,
      ...rest
    } = this.props;
    const prefix = getPrefixCls('layout-content-card', prefixCls);
    const mainClass = classNames(prefix, className, {
      // [`${prefix}-${fieldType}`]: fieldType,
    });

    return (
      <main {...rest} className={mainClass}>
        {children}
      </main>
    );
  };

  render() {
    return (
      <ConfigConsumer>
        {this.renderLayout}
      </ConfigConsumer>
    );
  }
}

export default Layout;
