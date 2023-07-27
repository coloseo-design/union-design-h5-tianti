/* eslint-disable no-nested-ternary */
import React from 'react';
import classNames from 'classnames';
import Icon from '../icon';
import Button from '../button';
import Portal from '../common/portal';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider';

export interface PopupProps extends React.HTMLAttributes<HTMLDivElement> {
  /* 弹出位置 */
  position?: 'top' | 'bottom' | 'left' | 'right' | 'center';
  /* 是否显示弹出层 */
  visible?: boolean;
  /* 是否显示遮罩层 */
  prefixCls?: string;
  /* 指定挂载的节点 */
  getPopupContainer?: () => HTMLElement | null;
  /* 展示弹出层header */
  header?: string | React.ReactNode;
  /* 确认按钮文字 */
  okText?: React.ReactNode | string;
  /* 关闭图标文字 */
  closeText?: string | React.ReactNode;
  /* 取消按钮文字 */
  cancelText?: React.ReactNode | string;
  /* 点击取消，X 事件 */
  onCancel?: (e: React.MouseEvent<HTMLElement>) => void;
  /* 点击确认按钮 */
  onOk?: (e: React.MouseEvent<HTMLElement>) => void;
  /* 是否显示遮罩层 */
  overlay?: boolean;
  /* 自定义遮罩层样式 */
  overlayStyle?: React.CSSProperties;
  /* 自定义遮罩层类名 */
  overlayClass?: string;
  /* 是否显示关闭图标 */
  closeable?: boolean;
  /* 关闭图标 或 图片链接 */
  closeIcon?: string | React.ReactNode;
  /* 是否展示圆角 */
  round?: boolean;
  /* 是否点击遮罩层关闭 */
  closeOnClickOverlay?: boolean;
  /* 弹出层内容样式 */
  style?: React.CSSProperties;
  /* 弹出层body样式 */
  bodyStyle?: React.CSSProperties;
  /* 弹出层header样式 */
  headerStyle?: React.CSSProperties;
  /* 自定义footer 或者不要footer */
  footer?: React.ReactNode | null,
  /* 是都全屏展示弹窗 */
  fullScreen?: boolean;
  /* 是否展示动画 */
  isTransition?: boolean;
}

export interface PopupState {
  visible: boolean;
  translationS: boolean;
}

class Popup extends React.Component<PopupProps, PopupState> {
  static defaultProps = {
    position: 'center',
    visible: false,
    prefixCls: '',
    cancelText: '取消',
    okText: '确认',
    isTransition: true,
  };

  constructor(props: PopupProps) {
    super(props);
    const { visible } = this.props;
    this.state = {
      visible: visible || false,
      translationS: false,
    };
  }

  componentDidUpdate(prevProps: PopupProps) {
    const { visible, isTransition } = this.props;
    if (visible !== prevProps.visible) {
      if (!visible) {
        this.setState({ translationS: true });
        const timer = setTimeout(() => {
          clearTimeout(timer);
          this.setState({ visible: false, translationS: false });
        }, isTransition ? 300 : 0);
      } else {
        this.setState({
          visible,
        });
      }
    }
  }

  componentWillUnmount() {
    this.setState({ visible: false });
  }

  handleMask = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { closeOnClickOverlay = true, onCancel } = this.props;
    if (event.target === event.currentTarget && closeOnClickOverlay) {
      onCancel && onCancel(event);
    }
  }

  cancel = (e: React.MouseEvent<HTMLElement>) => {
    const { onCancel } = this.props;
    onCancel && onCancel(e);
  };

  ok = (e: React.MouseEvent<HTMLElement>) => {
    const { onOk } = this.props;
    onOk && onOk(e);
  }

  renderPopup = ({ getPrefixCls }: ConfigConsumerProps) => {
    const {
      prefixCls,
      getPopupContainer,
      position = 'center',
      header,
      children,
      overlay = true,
      overlayStyle,
      headerStyle,
      overlayClass,
      closeable = true,
      closeIcon,
      closeText,
      style,
      round = true,
      bodyStyle,
      okText,
      cancelText,
      footer,
      fullScreen,
      isTransition,
    } = this.props;
    const { visible, translationS } = this.state;
    const prefix = getPrefixCls('popup', prefixCls);
    const prefixWrapper = classNames(prefix, {
      [`${prefix}-fullScreen`]: fullScreen,
      [`${prefix}-container`]: getPopupContainer?.(),
      [`${prefix}-noTransition`]: !isTransition,
    });

    const mask = classNames(`${prefix}-mask`, overlayClass, {
      [`${prefix}-mask-hidden`]: translationS,
    });
    const prefixContent = classNames(`${prefix}-content`, {
      [`${prefix}-content-${position}`]: position && visible,
      [`${prefix}-content-${position}-round`]: fullScreen ? false : round,
      [`${prefix}-content-${position}-transition`]: visible && translationS,
    });

    const contentHeader = classNames(`${prefix}-content-header`);
    const headerIcon = classNames(`${prefix}-content-header-icon`);
    const contentBody = classNames(`${prefix}-content-body`);
    const contentFooter = classNames(`${prefix}-content-footer`);

    const footerButton = (
      <>
        <Button style={{ marginRight: 12 }} block onClick={this.cancel}>{cancelText || '取消'}</Button>
        <Button type="primary" onClick={this.ok} block>{okText || '确认'}</Button>
      </>
    );

    const contentStyle = fullScreen ? { ...style } : style;
    return (
      visible ? (
        <Portal {...({ getPopupContainer })}>
          <div className={prefixWrapper}>
            {overlay && <div className={mask} style={overlayStyle} onClick={this.handleMask} />}
            <div
              className={prefixContent}
              style={contentStyle}
            >
              <div style={headerStyle} className={contentHeader}>
                {React.isValidElement(header) ? header : <span>{header}</span>}
                {closeable && (
                <span className={headerIcon} onClick={this.cancel}>
                  {
                    closeIcon
                      ? (React.isValidElement(closeIcon) ? closeIcon : <img src={typeof closeIcon === 'string' ? closeIcon : ''} alt="" />)
                      : (closeText || <Icon type="close" />)
                  }
                </span>
                )}
              </div>
              <div className={contentBody} style={bodyStyle}>
                {children}
              </div>
              {(footer === null || typeof footer !== 'undefined') ? footer : (
                <div className={contentFooter}>
                  {footerButton}
                </div>
              )}
            </div>
          </div>
        </Portal>
      ) : null
    );
  }

  render() {
    return (
      <ConfigConsumer>
        {this.renderPopup}
      </ConfigConsumer>
    );
  }
}

export default Popup;
