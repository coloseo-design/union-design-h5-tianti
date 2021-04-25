import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider/context';
import portal from './portal';
import Icon from '../icon';
import Loading from '../loading';

export interface BaseToastProps extends React.HTMLAttributes<HTMLSpanElement> {
  // 提示内容
  content?: ReactNode | string;
  // 自动关闭的延时，单位秒
  duration?: number;
  // 关闭后回调
  onClose?: () => void;
  // 是否显示透明蒙层，防止触摸穿透
  mask?: boolean;
  /* 用户自定义类前缀，默认uni-toast */
  prefixCls?: string;
  type?: string;
}

export interface ToastState {
  show: boolean;
}

class Toast extends Component<BaseToastProps, ToastState> {
  static defaultProps: BaseToastProps = {
    duration: 3,
    mask: true,
  };

  static success: (props: BaseToastProps) => void;

  static fail: (props: BaseToastProps) => void;

  static info: (props: BaseToastProps) => void;

  static loading: (props: BaseToastProps) => void;

  static hide: () => void;

  renderToast = ({ getPrefixCls }: ConfigConsumerProps) => {
    const {
      prefixCls,
      className,
      content,
      type,
      mask,
      ...rest
    } = this.props;

    const prefix = getPrefixCls('toast', prefixCls);
    const mainClass = classNames(prefix, className, {
      [`${prefix}-mask-${mask}`]: true,
    });

    const iconMapping = {
      success: <Icon type="success" />,
      fail: <Icon type="delete" />,
      loading: <Loading backgroundColor="none" color="#fff" />,
    };

    return (
      <div {...rest} className={mainClass}>
        <div className={`${prefix}-content`}>
          {type && iconMapping[type]}
          {content}
        </div>
      </div>
    );
  };

  render() {
    return (
      <ConfigConsumer>
        {this.renderToast}
      </ConfigConsumer>
    );
  }
}

Toast.success = (props: BaseToastProps) => portal(<Toast {...props} type="success" />);
Toast.fail = (props: BaseToastProps) => portal(<Toast {...props} type="fail" />);
Toast.info = (props: BaseToastProps) => portal(<Toast {...props} />);
Toast.loading = (props: BaseToastProps) => portal(<Toast {...props} type="loading" />);
Toast.hide = () => portal(<Toast duration={0} />);

export default Toast;
