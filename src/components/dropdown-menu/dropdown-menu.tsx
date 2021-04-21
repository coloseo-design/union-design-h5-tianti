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
  className?: string;
}

export interface DropdownMenuState {
  visible: boolean;
  selected: boolean;
  top: number;
  idx: number;
  bottom?: number;
  originToggle?: any[];
  childrenList: any[];
  valueList: any[];
  toogleList: any[];
  transitionEnd?: boolean;
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
      valueList: [],
      toogleList: [],
      transitionEnd: false,
    };
  }

  static getDerivedStateFromProps(nextProps: DropdownMenuProps, nextState: DropdownMenuState) {
    const { children } = nextProps;
    const { childrenList } = nextState;
    if (children && childrenList.length === 0) {
      const c: any[] = [];
      const val: any[] = [];
      const tog: any[] = [];
      React.Children.map(children, (child: any) => {
        c.push(child?.props);
        val.push(child?.props.value);
        tog.push(child?.props.toggle);
      });
      return {
        childrenList: c,
        valueList: val,
        toogleList: tog,
      };
    }
    return null;
  }

  componentDidMount() {
    const { closeOnClickOutside = true } = this.props;
    this.getNodeLocation();
    closeOnClickOutside && document.addEventListener('click', this.bodyClick);
  }

  componentDidUpdate(prevProps: DropdownMenuProps) {
    const { idx, valueList, toogleList } = this.state;
    const { children: prevChildren } = prevProps;
    const { children } = this.props;
    const PrevC = prevChildren ? React.Children.toArray(prevChildren) : [];
    const lastPrevC = (PrevC || []).map((i: any) => i.props);
    const c = children ? React.Children.toArray(children) : [];
    const lastC = (c || []).map((i: any) => i.props);
    if (lastC[idx] && lastPrevC[idx] && lastC[idx].value !== lastPrevC[idx].value) {
      const list = [...valueList];
      list.splice(idx, 1, lastC[idx].value);
      this.setState({
        valueList: list,
      });
    }
    if (lastC[idx] && lastPrevC[idx] && (lastC[idx].toggle !== lastPrevC[idx].toggle)) {
      const list = [...toogleList];
      list.splice(idx, 1, lastC[idx].toggle);
      if (lastC[idx].toggle === false) {
        this.setState({ transitionEnd: true });
        setTimeout(() => {
          this.setState({
            toogleList: list,
            transitionEnd: false,
          });
        }, 300);
      } else {
        this.setState({
          toogleList: list,
        });
      }
    }
  }

  componentWillUnmount() {
    const { closeOnClickOutside = true } = this.props;
    closeOnClickOutside && document.removeEventListener('click', this.bodyClick);
  }

  bodyClick = () => {
    this.setState({ transitionEnd: true });
    setTimeout(() => {
      this.setState({ visible: false, transitionEnd: false });
    }, 300);
  }

  getNode = (node: HTMLDivElement) => {
    this.node = node;
  }

  handleSelect = (value: string) => {
    const { idx, childrenList, valueList } = this.state;
    valueList.splice(idx, 1, value);
    this.setState({ childrenList, valueList });
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
    if (item.toggle !== undefined) {
      const { onClick } = item;
      onClick && onClick(e);
    }
    if (!item.disabled && !item.toggle) {
      if (visible) {
        this.setState({ transitionEnd: true });
        setTimeout(() => {
          this.setState({ transitionEnd: false, visible: false });
        }, 300);
      } else {
        this.setState({ visible: true });
        this.getNodeLocation();
      }
    }
    this.setState({ selected: !selected, idx: index });
  }

  handleMask = (item: any) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    if (item.toggle === undefined) {
      if (e.currentTarget === e.target) {
        const { closeOnClickOverlay = true } = this.props;
        if (closeOnClickOverlay) {
          this.bodyClick();
        } else {
          e.stopPropagation();
        }
      }
    } else {
      e.stopPropagation();
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
      // className,
    } = this.props;
    const {
      childrenList,
      selected, top, visible, idx,
      toogleList,
      valueList,
      transitionEnd,
    } = this.state;
    const dropWrapper = getPrefixCls('dropdown-menu', prefixCls);
    const menuItem = classNames(`${dropWrapper}-item`);
    const itemPreix = getPrefixCls('dropdown-item', prefixCls);
    const itemcontainter = classNames(itemPreix, {
      [`${itemPreix}-show`]: visible,
      [`${itemPreix}-hidden`]: transitionEnd && visible,
    });

    const renderValue = (source: any, index: number) => {
      let text = '';
      if (valueList[index]) {
        const loopOption = (data: any) => data.forEach((i: any) => {
          if (i.value === valueList[index]) {
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
              className={`${menuItem} ${item.disabled && `${dropWrapper}-item-disabled`}`}
              onClick={this.handleClick(index, item)}
            >
              <span style={{ color: activeColor || undefined }}>
                {item.title ? item.title : renderValue(item, index)}
              </span>
              <Icon
                type={selected && idx === index ? 'up' : 'down'}
                className={`${menuItem}-icon`}
              />
            </div>
            {idx === index && (item.toggle !== undefined ? toogleList[index] : visible) && (
            <div
              className={itemcontainter}
              style={{
                top: direction === 'down' ? top : 0,
                left: 0,
                bottom: direction === 'down' ? 0 : `calc(100% - ${top}px)`,
                // backgroundColor: !overlay ? 'transparent' : 'rgba(0,0,0, 0.8)',
              }}
            >
              <div
                style={{ backgroundColor: !overlay ? 'transparent' : 'rgba(0,0,0, 0.8)', width: '100%', height: '100%' }}
                onClick={this.handleMask(item)}
              >
                <DropdownItem
                  {...item}
                  onSelect={this.handleSelect}
                  itemValue={item.value}
                  dropContentStyle={dropContentStyle}
                  visible={visible}
                  direction={direction}
                  activeColor={activeColor}
                  isChildren={item.children}
                  transitionEnd={transitionEnd}
                />
              </div>
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
