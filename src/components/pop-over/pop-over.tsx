import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider/context';

export interface PopoverProps extends HTMLAttributes<HTMLElement> {
  placement?: 'top'| 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
  content?: React.ReactNode;
  color?: 'white' | 'black' | 'red';
  prefixCls?: string;
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

  constructor(props:PopoverProps) {
    super(props);
    this.state = {
      show: false,
      offset: { },
    };
  }

  componentDidMount() {
    document.addEventListener('click', this.hide, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.hide, false);
  }

  hide = () => {
    this.setState({
      show: false,
    });
  };

  handleClick = (e:React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.nativeEvent.stopImmediatePropagation();
    e.stopPropagation();
    const target = e.nativeEvent.target as HTMLSpanElement;
    if (target && this.element) {
      const { placement = 'top' } = this.props;
      const {
        width,
        left,
        top,
        height,
      } = target.getBoundingClientRect();
      const {
        height: elementHeight,
        width: elementWidth,
      } = this.element.getBoundingClientRect();
      let offset = {};
      switch (placement) {
        case 'top': {
          offset = {
            left: left - (elementWidth - width) / 2,
            top: top - elementHeight - 15,
          };
          break;
        }
        case 'bottom': {
          offset = {
            left: left - (elementWidth - width) / 2,
            top: top + height + 15,
          };
          break;
        }
        case 'topLeft': {
          offset = {
            left,
            top: top - elementHeight - 15,
          };
          break;
        }
        case 'topRight': {
          offset = {
            left: left + width - elementWidth,
            top: top - elementHeight - 15,
          };
          break;
        }
        case 'bottomLeft': {
          offset = {
            left,
            top: top + height + 15,
          };
          break;
        }
        case 'bottomRight': {
          offset = {
            left: left + width - elementWidth,
            top: top + height + 15,
          };
          break;
        }
        default: {
          break;
        }
      }
      const { show } = this.state;
      this.setState({
        show: !show,
        offset,
      });
    }
  };

  getRef = (el: HTMLDivElement) => {
    this.element = el;
  };

  renderPopover = ({ getPrefixCls }: ConfigConsumerProps) => {
    const {
      prefixCls, className, children, color = 'white', content = '', placement = 'top', style,
    } = this.props;
    const { offset, show } = this.state;
    const prefix = getPrefixCls('pop-over-mobile', prefixCls);
    const clazzName = classNames(`${prefix}`, {
      [`${prefix}-${color}`]: true,
    }, className);
    const arrowName = classNames(`${prefix}-arrow`, {
      [`${prefix}-arrow-right`]: placement.includes('Right'),
      [`${prefix}-arrow-left`]: placement.includes('Left'),
      [`${prefix}-arrow-top`]: placement.includes('top'),
      [`${prefix}-arrow-bottom`]: placement.includes('bottom'),
      [`${prefix}-arrow-red`]: color === 'red',
      [`${prefix}-arrow-black`]: color === 'black',
    }, className);

    return (
      <div style={{ display: 'inline-block', ...style }}>
        <div className={clazzName} style={{ visibility: show ? 'visible' : 'hidden', ...offset }} ref={this.getRef}>
          <div className={arrowName} />
          { content }
        </div>
        <div onClick={this.handleClick} style={{ display: 'inline-block' }}>{ children }</div>
      </div>

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
