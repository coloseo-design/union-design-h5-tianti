/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-array-index-key */
import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';
import Icon from '../icon';
import { DropDownMenuContext } from './context';
import CurrentItem from './current';
import { uuid } from '../utils/uuid';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider';

export interface Option {
  text: string;
  value: string;
  icon?: React.ReactNode | string;
  card?: string | React.ReactNode;
}

export interface DropdownItemProps extends Omit<HTMLAttributes<HTMLElement>, 'value'|'onChange'> {
  value?: string;
  prefixCls?: string;
  options?: Option[];
  onChange?: (value: string) => void;
  itemValue?: string;
  /* 设置每一行的样式 */
  dropItemStyle?: React.CSSProperties;
  /* 是否禁用菜单 */
  disabled?: boolean;
  /* 下拉列表内容样式 */
  dropContentStyle?: React.CSSProperties;
  toggle?: boolean;
  /* 菜单文字标题 */
  title?: string;
  /* 点击item时触发 */
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export interface DropdownItemState {
  expandKeys: string[];
  selectedValue: string;
  visible: boolean;
  transitionEnd: boolean;
  onlyid: string;
}

class DropdownItem extends React.Component<DropdownItemProps, DropdownItemState> {
  constructor(props: DropdownItemProps) {
    super(props);
    this.state = {
      expandKeys: [],
      selectedValue: props.value || '',
      visible: false,
      transitionEnd: false,
      onlyid: uuid(),
    };
  }

  componentDidMount() {
    const { getNodeLocation, closeOnClickOutside = true } = this.context;
    getNodeLocation();
    closeOnClickOutside && document.addEventListener('click', this.bodyClick);
    document.addEventListener('scroll', this.DocumentScroll);
  }

  componentDidUpdate(preProps: DropdownItemProps) {
    const { value, toggle } = this.props;
    const { changeParentState, getNodeLocation } = this.context;
    const { onlyid } = this.state;
    if (value !== preProps.value) {
      this.setState({ selectedValue: value || '' });
    }
    if (toggle !== preProps.toggle) {
      if (toggle) {
        changeParentState({ currentTargetId: onlyid });
        this.setState({ visible: true });
        getNodeLocation();
      } else {
        this.setState({ transitionEnd: true });
        setTimeout(() => {
          this.setState({ transitionEnd: false, visible: false });
        }, 300);
      }
    }
  }

  componentWillUnmount() {
    const { closeOnClickOutside = true } = this.context;
    document.removeEventListener('scroll', this.DocumentScroll);
    closeOnClickOutside && document.removeEventListener('click', this.bodyClick);
  }

  DocumentScroll = () => {
    const { visible } = this.state;
    const { bodyScroll } = this.context;
    if (visible) {
      bodyScroll();
    }
  }

  handleChange = (value: string) => {
    const { onChange } = this.props;
    this.setState({ selectedValue: value });
    onChange && onChange(value);
    this.bodyClick();
  }

  onExpand = (value: string) => {
    const { expandKeys } = this.state;
    let list = expandKeys;
    if (expandKeys.indexOf(value) >= 0 || expandKeys.indexOf(`${value}`) >= 0) {
      list = expandKeys.filter((i: string | number) => i !== value);
    } else {
      list.push(value);
    }
    this.setState({ expandKeys: list });
  }

  handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { children } = this.props;
    if (children) {
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
    }
  };

  handleInput = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    const {
      getNodeLocation, changeParentState, currentTargetId,
    } = this.context;
    const { toggle, onClick, disabled } = this.props;
    const { visible, onlyid } = this.state;
    if (typeof toggle !== 'undefined') {
      onClick && onClick(e);
    } else if (!disabled && !toggle) {
      if (visible && currentTargetId === onlyid) {
        this.setState({ transitionEnd: true });
        setTimeout(() => {
          this.setState({ transitionEnd: false, visible: false });
        }, 300);
      } else {
        changeParentState({ currentTargetId: onlyid });
        this.setState({ visible: true });
        getNodeLocation();
      }
    }
  };

  handleMask =(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    const { toggle } = this.props;
    const { closeOnClickOverlay = true } = this.context;
    if (typeof toggle === 'undefined') {
      if (e.currentTarget === e.target) {
        if (closeOnClickOverlay) {
          this.bodyClick();
        }
      }
    }
  };

  bodyClick = () => {
    this.setState({ transitionEnd: true });
    setTimeout(() => {
      this.setState({ visible: false, transitionEnd: false });
    }, 300);
  }

  renderCurrent = (data: Option[] | any) => {
    const { expandKeys } = this.state;
    const { dropItemStyle } = this.props;
    const { activeColor } = this.context;
    const { selectedValue } = this.state;
    return (
      <>
        {(data || []).map((item: any, index: number) => (
          <div key={index}>
            <CurrentItem
              {...item}
              isExpand={(expandKeys || []).some((i: string) => `${i}` === `${item.value}`)}
              current={item}
              onExpand={this.onExpand}
              onChange={this.handleChange}
              itemValue={selectedValue}
              dropItemStyle={dropItemStyle}
              activeColor={activeColor}
            />
          </div>
        ))}
      </>
    );
  }

  renderDropdownItem = ({ getPrefixCls }: ConfigConsumerProps) => {
    const {
      options,
      dropContentStyle = {},
      children,
      disabled,
      title,
    } = this.props;
    const {
      selectedValue, visible, transitionEnd, onlyid,
    } = this.state;
    const renderValue = () => {
      const current = options?.find((item: Option) => item.value === selectedValue);
      return current ? current.text : '';
    };

    return (
      <DropDownMenuContext.Consumer>
        {({
          activeColor, prefixCls, dropWrapper, top, overlay, direction, currentTargetId,
        }) => {
          const wrapper = getPrefixCls('dropdown-item-content', prefixCls);
          const content = classNames(wrapper, {
            [`${wrapper}-show`]: visible,
            [`${wrapper}-up`]: direction === 'up',
            [`${wrapper}-hidden`]: transitionEnd && visible,
          });
          const menuItem = classNames(`${dropWrapper}-item`);
          const itemPreix = getPrefixCls('dropdown-item', prefixCls);
          const itemcontainter = classNames(itemPreix, {
            [`${itemPreix}-show`]: visible,
            [`${itemPreix}-hidden`]: transitionEnd && visible,
          });

          return (
            <div className={`${dropWrapper}-content`}>
              <div
                className={classNames(menuItem, {
                  [`${dropWrapper}-item-disabled`]: disabled,
                  [`${dropWrapper}-item-select`]: visible && selectedValue && currentTargetId === onlyid,
                })}
                title={title || renderValue()}
                onClick={this.handleInput}
                id={onlyid}
              >
                <span
                  className={`${dropWrapper}-item-text`}
                  style={{ color: disabled ? '#C8CCCC' : (activeColor || undefined) }}
                >
                  {title || renderValue()}
                </span>
                <Icon
                  type={visible && currentTargetId === onlyid ? 'up' : 'down'}
                  className={`${menuItem}-icon`}
                />
              </div>
              {visible && currentTargetId === onlyid
                && (
                <div
                  className={itemcontainter}
                  style={{
                    top: direction === 'down' ? top : 0,
                    left: 0,
                    bottom: direction === 'down' ? 0 : `calc(100% - ${top}px)`,
                  }}
                >

                  <div
                    style={{
                      backgroundColor: !overlay ? 'transparent' : 'rgba(0,0,0, 0.2)',
                      width: '100%',
                      height: '100%',
                    }}
                    onClick={this.handleMask}
                  >
                    <div
                      className={content}
                      style={{ ...dropContentStyle }}
                      onClick={this.handleClick}
                    >
                      {children || this.renderCurrent(options || [])}
                    </div>
                  </div>
                </div>
                )}
            </div>
          );
        }}
      </DropDownMenuContext.Consumer>
    );
  }

  render() {
    return (
      <ConfigConsumer>
        {this.renderDropdownItem}
      </ConfigConsumer>
    );
  }
}

DropdownItem.contextType = DropDownMenuContext;

export default DropdownItem;
