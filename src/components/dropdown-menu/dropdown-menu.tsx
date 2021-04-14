/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import classNames from 'classnames';
import Icon from '../icon';
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
  valuesList: string[];
  optionList: any[];
  disabledList: boolean[];
  toggleList?: any[];
  originToggle?: any[];
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
      valuesList: [],
      optionList: [],
      disabledList: [],
    };
  }

  static getDerivedStateFromProps(nextProps: DropdownMenuProps, nextState: DropdownMenuState) {
    const { children } = nextProps;
    const { optionList } = nextState;
    if (children && optionList.length === 0) {
      const opL: any[] = [];
      const vuL: string[] = [];
      const dis: boolean[] = [];
      const tog: any[] = [];
      React.Children.map(children, (child: any) => {
        vuL.push(child?.props.value ? child?.props.value : '');
        opL.push(child?.props.options || []);
        dis.push(child?.props.disabled);
        tog.push(child?.props.toggle);
      });
      return {
        valuesList: vuL,
        optionList: opL,
        disabledList: dis,
        toggleList: tog,
        originToggle: tog,
      };
    }
    return null;
  }

  componentDidMount() {
    const { closeOnClickOutside = true } = this.props;
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
    const { idx, valuesList } = this.state;
    const tem = [...valuesList];
    tem[idx] = value;
    this.setState({ valuesList: tem });
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

  handleClick = (index: number) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    const { selected, visible, disabledList } = this.state;
    if (!disabledList[index]) {
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
      children,
      overlay = true,
      style,
      dropContentStyle,
      direction = 'down',
      activeColor,
    } = this.props;
    const {
      selected, top, visible, idx, valuesList, optionList, disabledList,
    } = this.state;
    const dropWrapper = getPrefixCls('dropdown-menu', prefixCls);
    const menuItem = classNames(`${dropWrapper}-item`);
    const itemPreix = getPrefixCls('dropdown-item', prefixCls);
    const itemcontainter = classNames(itemPreix, {
      [`${itemPreix}-show`]: visible,
    });
    const child = React.Children.toArray(children);

    const renderButton = (index: number, current: string) => {
      let text = '';
      if (current !== '') {
        const loopOption = (data: any) => data.forEach((i: any) => {
          if (i.value === current) {
            text = i.text;
          }
          if (i.children && i.children.length > 0) {
            loopOption(i.children);
          }
        });
        loopOption(optionList[index] || []);
      }
      return text;
    };

    return (
      <>
        <div className={dropWrapper} style={style} ref={this.getNode}>
          {(valuesList || []).map((item: string, index: number) => (
            <div
              key={index}
              className={`${menuItem} ${disabledList[index] ? `${dropWrapper}-item-disabled` : null}`}
              onClick={this.handleClick(index)}
              style={{ color: !disabledList[index] && activeColor && valuesList[index] && valuesList[index] !== '' ? activeColor : undefined }}
            >
              {renderButton(index, item)}
              <Icon type={selected && idx === index ? 'up' : 'down'} className={`${menuItem}-icon`} />
            </div>
          ))}
        </div>
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
          {
              child[idx] && React.isValidElement(child[idx])
                ? React.cloneElement(child[idx], {
                  closeDrop: this.bodyClick,
                  onSelect: this.handleSelect,
                  itemValue: valuesList[idx],
                  dropContentStyle,
                  visible,
                  direction,
                  activeColor,
                })
                : null
            }
        </div>
      </>
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
