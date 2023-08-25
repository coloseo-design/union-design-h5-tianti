/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-plusplus */
import React, {
  Component, CSSProperties, isValidElement, ReactNode, createRef,
} from 'react';
import classNames from 'classnames';
import Omit from 'omit.js';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider/context';
import portal from './portal';
import Icon from '../icon';
import Loading from '../loading';

export interface BaseToastProps extends React.HTMLAttributes<HTMLSpanElement> {
  // 提示内容
  content?: string;
  // 自动关闭的延时，单位秒
  duration?: number | boolean;
  // 是否显示透明蒙层，防止触摸穿透
  mask?: boolean;
  /* 用户自定义类前缀，默认uni-toast */
  prefixCls?: string;
  type?: string;
  // 自定义icon
  icon?: string | ReactNode;
  // loading类型
  loadingType?: 'spinner' | 'circular';

  loadingSize?: number;
  // 是否垂直排列图标和文字内容
  vertical?: boolean;
  // 设置mask 样式
  maskStyle?: CSSProperties;
}

export interface ToastState {
  show: boolean;
}

class Toast extends Component<BaseToastProps, ToastState> {
  static defaultProps: BaseToastProps = {
    duration: 3,
    mask: false,
    type: 'info',
    loadingType: 'spinner',
    vertical: true,
  };

  static info: (props: BaseToastProps) => void;

  static loading: (props: BaseToastProps) => void;

  static hide: () => void;

  public maskRef = createRef<HTMLDivElement>();

  componentDidMount(): void {
    // 暂定 阻止底部页面滚动
    if (this.maskRef?.current) {
      this.maskRef.current.addEventListener('touchmove', (e) => {
        e.preventDefault();
      }, { passive: false });
    }
  }

  componentWillUnmount(): void {
    if (this.maskRef?.current) {
      this.maskRef.current.removeEventListener('touchmove', (e) => {
        e.preventDefault();
      });
    }
  }

  renderToast = ({ getPrefixCls }: ConfigConsumerProps) => {
    const {
      prefixCls,
      className,
      content = '',
      type = 'info',
      mask,
      icon,
      loadingType,
      vertical,
      maskStyle,
      loadingSize,
      ...rest
    } = this.props;

    const prefix = getPrefixCls('toast', prefixCls);
    const mainClass = classNames(prefix, className, {
      [`${prefix}-mask-${mask}`]: true,
      [`${prefix}-vertical`]: vertical,
    });

    const OmitRest = Omit(rest, ['duration']);
    const iconMapping: any = {
      info: icon ? (isValidElement(icon) ? icon : <Icon type={icon as string} />) : '',
      loading: <Loading type={loadingType} size={loadingSize} color="#fff" />,
    };

    return (
      <div {...OmitRest} className={mainClass}>
        {mask && <div className={`${prefix}-mask`} style={maskStyle} ref={this.maskRef} />}
        <div
          className={`${prefix}-content`}
          style={{ height: iconMapping[type] && content && vertical ? 160 : 'unset', width: iconMapping[type] && content && vertical ? 160 : 'unset' }}
        >
          <span className={content && iconMapping[type] ? `${prefix}-content-icon` : ''}>{iconMapping[type]}</span>
          <span className={`${prefix}-content-description`}>{content}</span>
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

Toast.info = (props: BaseToastProps) => portal(<Toast {...props} type="info" />);
Toast.loading = (props: BaseToastProps) => portal(<Toast {...props} type="loading" />);
Toast.hide = () => portal(<Toast duration={0} />);

export default Toast;
