/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { HTMLAttributes, createRef } from 'react';
import classNames from 'classnames';
import omit from 'omit.js';
import Portal from '../common/portal';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider/context';

export interface PopoverProps extends Omit<HTMLAttributes<HTMLDivElement>, 'content'> {
  placement?: 'top'| 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
  content?: string | React.ReactNode;
  color?: 'white' | 'black' | 'red';
  prefixCls?: string;
  getPopupContainer?: () => HTMLElement | null;
  visible?: boolean;
  onVisibleChange?: (v: boolean) => void;
}

export interface PopoverOffset {
   top?: number
   left?: number
}

export interface PopoverState {
  show?: boolean;
  offset?: PopoverOffset;
}

class PopOver extends React.Component<PopoverProps, PopoverState> {
  element: HTMLSpanElement | undefined;

  public nodeRef = createRef<HTMLDivElement>();

  constructor(props:PopoverProps) {
    super(props);
    this.state = {
      show: props.visible || false,
      offset: { },
    };
  }

  componentDidMount() {
    const { visible } = this.props;
    document.addEventListener('click', this.hide, true);
    if (visible && this.element) {
      this.handleClick(this.element);
    }
  }

  componentDidUpdate(prevProps: PopoverProps): void {
    const { visible } = this.props;
    if (visible !== prevProps.visible) {
      this.setState({ show: visible });
    }
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.hide, true);
  }

  hide = (evt: Event) => {
    const { onVisibleChange, visible } = this.props;
    if (evt.target && this.element?.contains(evt.target as HTMLElement)) return;
    if (typeof visible !== 'undefined') {
      if (!this.nodeRef?.current?.contains(evt.target as HTMLElement)) {
        onVisibleChange?.(false);
      }
    } else {
      this.setState({ show: false });
      onVisibleChange?.(false);
    }
  };

  handleClick = (target: HTMLElement) => {
    const { getPopupContainer, onVisibleChange, visible } = this.props;
    const box = getPopupContainer ? getPopupContainer()?.getBoundingClientRect() : target.getBoundingClientRect();
    if (target && this.nodeRef?.current && box) {
      const { placement = 'top' } = this.props;
      const docElem = document.documentElement;
      const offsetLeft = box.left + (window.pageXOffset || docElem.scrollLeft)
      - (docElem.clientLeft || document.body.clientLeft || 0);
      const offsetTop = box.top + (window.pageYOffset || docElem.scrollTop)
        - (docElem.clientTop || document.body.clientTop || 0);
      const {
        height: elementHeight,
        width: elementWidth,
      } = this.nodeRef?.current.getBoundingClientRect();
      let offset = {};
      switch (placement) {
        case 'top': {
          offset = {
            left: offsetLeft + (box.width - elementWidth) / 2,
            top: offsetTop - elementHeight - 10,
          };
          break;
        }
        case 'bottom': {
          offset = {
            left: offsetLeft + (box.width - elementWidth) / 2,
            top: offsetTop + box.height + 10,
          };
          break;
        }
        case 'topLeft': {
          offset = {
            left: offsetLeft,
            top: offsetTop - elementHeight - 10,
          };
          break;
        }
        case 'topRight': {
          offset = {
            left: offsetLeft + box.width - elementWidth,
            top: offsetTop - elementHeight - 10,
          };
          break;
        }
        case 'bottomLeft': {
          offset = {
            left: offsetLeft,
            top: offsetTop + box.height + 10,
          };
          break;
        }
        case 'bottomRight': {
          offset = {
            left: offsetLeft + box.width - elementWidth,
            top: offsetTop + box.height + 15,
          };
          break;
        }
        default: {
          break;
        }
      }
      const { show } = this.state;
      onVisibleChange?.(!show);
      this.setState({ offset });
      if (typeof visible === 'undefined') {
        this.setState({
          show: !show,
        });
      }
    }
  };

  getChildRef = (el: HTMLDivElement) => {
    this.element = el;
  };

  renderPopover = ({ getPrefixCls }: ConfigConsumerProps) => {
    const {
      prefixCls,
      className,
      children,
      color = 'white',
      content = '',
      placement = 'top',
      getPopupContainer,
      style,
      ...rest
    } = this.props;
    const { offset, show } = this.state;
    const prefix = getPrefixCls('pop-over-mobile', prefixCls);
    const wrapper = classNames(`${prefix}`, {
      [`${prefix}-show`]: show,
      [`${prefix}-${color}`]: true,
    }, className);
    const arrowName = classNames(`${prefix}-arrow`, {
      [`${prefix}-arrow-${placement}`]: placement,
      [`${prefix}-arrow-red`]: color === 'red',
      [`${prefix}-arrow-black`]: color === 'black',
    }, className);

    let TChildren = (
      <span
        onClick={(e) => this.handleClick(e.currentTarget)}
        ref={this.getChildRef}
      >
        {children}
      </span>
    );

    if (React.isValidElement(children)) {
      TChildren = React.cloneElement<any>(children, {
        ref: this.getChildRef,
        onClick: (evt: React.MouseEvent<any>) => {
          this.handleClick(evt.currentTarget);
          (children.props as any).onClick && (children.props as any).onClick(evt);
        },
      });
    }

    const omitRest = omit(rest, ['onVisibleChange', 'visible']);
    return (
      <>
        {TChildren}
        <Portal isFull={false} getPopupContainer={getPopupContainer}>
          <div
            {...omitRest}
            className={wrapper}
            style={{ ...style, ...offset }}
            ref={this.nodeRef}
          >
            <div className={arrowName} />
            <div className={`${prefix}-content`}>
              {content}
            </div>
          </div>
        </Portal>
      </>
    );
  };

  render() {
    return (
      <ConfigConsumer>
        {this.renderPopover}
      </ConfigConsumer>
    );
  }
}

export default PopOver;
