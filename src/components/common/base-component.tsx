import React, {
  PureComponent, ReactNode, useCallback, useContext,
} from 'react';
import classNames from 'classnames';
import { ConfigConsumer, ConfigConsumerProps, ConfigContext } from '../config-provider/context';

export type DivEvent = React.DOMAttributes<HTMLDivElement>;

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

export const useConfig = () => {
  const context = useContext(ConfigContext);

  return context;
};

export const useClassNames = () => {
  const fn = useCallback(classNames, []);
  return fn;
};

export const useGetPrefixClass = (classPrefix = '', prefixCls?: string) => {
  const config = useConfig();

  const fn = useCallback((prefix?: string) => {
    const { getPrefixCls } = config;

    if (prefix) {
      return getPrefixCls?.(`${classPrefix}-${prefix}`, prefixCls);
    }

    return getPrefixCls?.(`${classPrefix}`, prefixCls);
  }, [config, classPrefix, prefixCls]);

  return fn;
};
