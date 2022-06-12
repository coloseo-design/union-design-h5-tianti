/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import DropdownItem from './dropdown-item';
import { DropDownMenuContext } from './context';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider';

export interface DropdownMenuProps {
  /* 菜单展开方向 */
  direction?: 'up' | 'down',
  prefixCls?: string;
  children?: unknown;
  /* 是否显示遮罩层 */
  overlay?: boolean;
  /* 是否在点击遮罩层后关闭菜单 */
  closeOnClickOverlay?: boolean;
  /* 是否在点击外部元素后关闭菜单 */
  closeOnClickOutside?: boolean;
  /* menu样式 */
  style?: React.CSSProperties;
  /* 菜单标题颜色 和选项选中颜色 */
  activeColor?: string;
  className?: string;
}

export interface DropdownMenuState {
  top: number;
  currentTargetId?: string,
}

class DropdownMenu extends React.Component<DropdownMenuProps, DropdownMenuState> {
  static DropdownItem: typeof DropdownItem;

  node: HTMLDivElement | undefined;

  constructor(props: DropdownMenuProps) {
    super(props);
    this.state = {
      top: 0,
      currentTargetId: undefined,
    };
  }

  getNode = (node: HTMLDivElement) => {
    this.node = node;
  }

  bodyScroll = () => {
    if (this.node) {
      this.getNodeLocation();
    }
  };

  changeParentState = (obj: DropdownMenuState) => {
    const tem = this.state;
    Object.assign(tem, {
      ...obj,
    });
    this.setState({
      ...tem,
    });
  }

  getNodeLocation = () => {
    const { direction = 'down' } = this.props;
    if (this.node?.getBoundingClientRect) {
      const {
        height, top,
      } = this.node.getBoundingClientRect();
      this.setState({ top: direction === 'down' ? top + height : top });
    }
  }

  renderDropdownMenu = ({ getPrefixCls }: ConfigConsumerProps) => {
    const {
      prefixCls,
      children,
      activeColor,
      direction = 'down',
      overlay = true,
      closeOnClickOverlay = true,
      closeOnClickOutside = true,
    } = this.props;
    const { top, currentTargetId } = this.state;
    const dropWrapper = getPrefixCls('dropdown-menu', prefixCls);

    return (
      <div className={dropWrapper} ref={this.getNode}>
        <DropDownMenuContext.Provider
          value={{
            prefixCls,
            activeColor,
            dropWrapper,
            parentNode: this.node,
            direction,
            top,
            changeParentState: this.changeParentState,
            overlay,
            getNodeLocation: this.getNodeLocation,
            closeOnClickOverlay,
            closeOnClickOutside,
            bodyScroll: this.bodyScroll,
            currentTargetId,
          }}
        >
          {children}
        </DropDownMenuContext.Provider>
      </div>
    );
  }

  render() {
    return (
      <ConfigConsumer>
        {this.renderDropdownMenu}
      </ConfigConsumer>
    );
  }
}

DropdownMenu.DropdownItem = DropdownItem;

export default DropdownMenu;
