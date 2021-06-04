/* eslint-disable no-nested-ternary */
import React from 'react';
import classNames from 'classnames';
import Icon from '../icon';
import Button from '../button';
import Portal from '../common/portal';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider';

export interface PopupProps {
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
  /* 是否展示底部按钮 或者自定义按钮 */
  footer?: null | React.ReactNode;
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
  /* 点击关闭按钮时触发 */
  clickCloseIcon?: () => void;
}

export interface PopupState {
  visible: boolean;
  translationS: boolean;
}

class Popup extends React.Component<PopupProps, PopupState> {
  constructor(props: PopupProps) {
    super(props);
    const { visible } = this.props;
    this.state = {
      visible: visible || false,
      translationS: false,
    };
  }

  componentDidUpdate(prevProps: PopupProps) {
    const { visible } = this.props;
    if (visible !== prevProps.visible) {
      if (!visible) {
        this.setState({ translationS: true });
        setTimeout(() => {
          this.setState({ visible: false, translationS: false });
        }, 300);
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
      footer,
      children,
      overlay = true,
      overlayStyle,
      overlayClass,
      closeable = true,
      closeIcon,
      closeText,
      style,
      round = true,
      bodyStyle,
    } = this.props;
    const { visible, translationS } = this.state;
    const prex = getPrefixCls('popup', prefixCls);
    const prexWrapper = classNames(prex, {
      [`${prex}-${position}`]: position,
    });

    const mask = classNames(`${prex}-mask`, overlayClass, {
      [`${prex}-mask-hidden`]: translationS,
    });
    const prexContent = classNames(`${prex}-content`, {
      [`${prex}-content-${position}`]: position && visible,
      [`${prex}-content-${position}-round`]: round,
      [`${prex}-content-${position}-transition`]: visible && translationS,
    });

    const contenHeader = classNames(`${prex}-content-header`);
    const headerIcon = classNames(`${prex}-content-header-icon`);
    const contentBody = classNames(`${prex}-content-body`);
    const contentFooter = classNames(`${prex}-content-footer`);

    const footerButton = (
      <>
        <Button style={{ marginRight: '2em' }} block onClick={this.cancel}>取消</Button>
        <Button type="primary" onClick={this.ok} block>确认</Button>
      </>
    );

    return (
      visible ? (
        <Portal {...({ getPopupContainer })}>
          <div className={prexWrapper}>
            {overlay && <div className={mask} style={overlayStyle} onClick={this.handleMask} />}
            <div
              className={prexContent}
              style={style}
            >
              <div className={contenHeader}>
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
              {footer !== null && visible
                  && (
                    <div className={contentFooter}>{footer || footerButton}</div>
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
