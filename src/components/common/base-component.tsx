import React, { PureComponent, ReactNode } from 'react';
import classNames from 'classnames';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider/context';

export type BaseProps<T = Record<string, unknown>> = Partial<{
    prefixCls: string;
} & T>;

export type BaseState<T = Record<string, unknown>> = Partial<{
    timestamp?: number;
} & T>;

export abstract class BaseComponent<
    P extends BaseProps = BaseProps,
    S extends BaseState = BaseState
    > extends PureComponent<P, S> {
    protected config!: ConfigConsumerProps;

    public render = () => <ConfigConsumer>{this.init}</ConfigConsumer>;

    protected view = (): ReactNode => <div />;

    protected classNames = (...args: Parameters<typeof classNames>) => classNames(...args);

    protected getPrefixClass = (prefix?: string) => {
      const { prefixCls } = this.props;
      const { getPrefixCls } = this.config;

      if (prefix) {
        return getPrefixCls?.(`${this.classPrefix}-${prefix}`, prefixCls);
      }

      return getPrefixCls?.(`${this.classPrefix}`, prefixCls);
    };

    private init = (config: ConfigConsumerProps) => {
      this.config = config;
      return this.view();
    };

    protected abstract classPrefix: string;
}
