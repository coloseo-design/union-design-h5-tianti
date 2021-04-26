import React, { Component } from 'react';
import classNames from 'classnames';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider/context';
import Card from './card';
import Content from './content';

export interface BaseLayoutProps extends React.HTMLAttributes<HTMLElement> {
  type?: 'card' | 'normal';
}

class Layout extends Component<BaseLayoutProps> {
  static Card: typeof Card;

  static Content: typeof Content;

  renderLayout = ({ getPrefixCls }: ConfigConsumerProps) => {
    const {
      prefixCls,
      className,
      children,
      type = 'normal',
      ...rest
    } = this.props;
    const prefix = getPrefixCls('layout', prefixCls);
    const mainClass = classNames(prefix, className, {
      [`${prefix}-${type}`]: type,
    });

    return (
      <section {...rest} className={mainClass}>
        {children}
      </section>
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

Layout.Card = Card;
Layout.Content = Content;

export default Layout;
