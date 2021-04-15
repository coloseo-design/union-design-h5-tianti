/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import classNames from 'classnames';
import Icon from '../icon';
import DropdownItem from './dropdown-item';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider';

export interface DropdownMenuProps {
  /* 菜单展开方向 */
  direction?: 'up' | 'down',
  prefixCls?: string;
  children?: any;
  /* 是否显示遮罩层 */
  overlay?: boolean;
  /* 是否在点击遮罩层后关闭菜单 */
  closeOnClickOverlay?: boolean;
  /* 是否在点击外部元素后关闭菜单 */
  closeOnClickOutside?: boolean;
  /* menu样式 */
  style?: React.CSSProperties;
    /* 下拉列表内容样式 */
  dropContentStyle?: React.CSSProperties;
  /* 菜单标题颜色 和选项选中颜色 */
  activeColor?: string;
}

export interface DropdownMenuState {
  visible: boolean;
  selected: boolean;
  top: number;
  idx: number;
  bottom?: number;
  originToggle?: any[];
  childrenList: any[];
}

class DropdownMenu extends React.Component<DropdownMenuProps, DropdownMenuState> {
  node: HTMLSpanElement | undefined;

  constructor(props: DropdownMenuProps) {
    super(props);
    this.state = {
      visible: false,
      selected: false,
      top: 0,
      idx: 0,
      childrenList: [],
    };
  }

  static getDerivedStateFromProps(nextProps: DropdownMenuProps, nextState: DropdownMenuState) {
    const { children } = nextProps;
    const { childrenList } = nextState;
    if (children && childrenList.length === 0) {
      const c: any[] = [];
      React.Children.map(children, (child: any) => {
        c.push(child?.props);
      });
      return {
        childrenList: c,
      };
    }
    return null;
  }

  componentDidMount() {
    const { closeOnClickOutside = true } = this.props;
    this.getNodeLocation();
    closeOnClickOutside && document.addEventListener('click', this.bodyClick);
  }

  componentWillUnmount() {
    const { closeOnClickOutside = true } = this.props;
    closeOnClickOutside && document.removeEventListener('click', this.bodyClick);
  }

  bodyClick = () => {
    this.setState({ visible: false });
  }

  getNode = (node: HTMLDivElement) => {
    this.node = node;
  }

  handleSelect = (value: string) => {
    const { idx, childrenList } = this.state;
    const current = { ...childrenList[idx] };
    if (current) {
      Object.assign(current, {
        value,
      });
    }
    childrenList.splice(idx, 1, current);
    this.setState({ childrenList });
  };

  getNodeLocation = () => {
    const { direction = 'down' } = this.props;
    setTimeout(() => {
      if (this.node?.getBoundingClientRect) {
        const {
          height, top,
        } = this.node.getBoundingClientRect();
        // const offsetTop = window.pageXOffset + top;
        this.setState({
          top: direction === 'down' ? top + height : top,
        });
      }
    }, 100);
  }

  handleClick = (index: number, item: any) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    const { selected, visible } = this.state;
    if (!item.disabled) {
      this.setState({ selected: !selected, idx: index, visible: !visible });
      this.getNodeLocation();
    }
  }

  handleMask = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.currentTarget === e.target) {
      const { closeOnClickOverlay = true } = this.props;
      if (closeOnClickOverlay) {
        this.bodyClick();
      } else {
        e.stopPropagation();
      }
    }
  };

  renderDropdownMenu = ({ getPrefixCls }: ConfigConsumerProps) => {
    const {
      prefixCls,
      overlay = true,
      style,
      dropContentStyle,
      direction = 'down',
      activeColor,
    } = this.props;
    const {
      childrenList,
      selected, top, visible, idx,
    } = this.state;
    const dropWrapper = getPrefixCls('dropdown-menu', prefixCls);
    const menuItem = classNames(`${dropWrapper}-item`);
    const itemPreix = getPrefixCls('dropdown-item', prefixCls);
    const itemcontainter = classNames(itemPreix, {
      [`${itemPreix}-show`]: visible,
    });

    const renderValue = (source: any) => {
      let text = '';
      if (source.value) {
        const loopOption = (data: any) => data.forEach((i: any) => {
          if (i.value === source.value) {
            text = i.text;
          }
          if (i.children && i.children.length > 0) {
            loopOption(i.children);
          }
        });
        loopOption(source.options || []);
      }
      return text;
    };

    return (
      <div className={dropWrapper} style={style} ref={this.getNode}>
        {(childrenList || []).map((item, index) => (
          <div key={index} className={`${dropWrapper}-content`}>
            <div
              className={`${menuItem} ${item.disabled ? `${dropWrapper}-item-disabled` : undefined}`}
              onClick={this.handleClick(index, item)}
            >
              {renderValue(item)}
              <Icon
                type={selected && idx === index ? 'up' : 'down'}
                className={`${menuItem}-icon`}
              />
            </div>
            {idx === index && visible && (
            <div
              className={itemcontainter}
              style={{
                top: direction === 'down' ? top : 0,
                left: 0,
                bottom: direction === 'down' ? 0 : `calc(100% - ${top}px)`,
                backgroundColor: !overlay ? 'transparent' : 'rgba(0,0,0, 0.8)',
              }}
              onClick={this.handleMask}
            >
              <DropdownItem
                {...item}
                closeDrop={this.bodyClick}
                onSelect={this.handleSelect}
                itemValue={item.value}
                dropContentStyle={dropContentStyle}
                visible={visible}
                direction={direction}
                activeColor={activeColor}
              />
            </div>
            )}
          </div>
        ))}
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

export default DropdownMenu;
