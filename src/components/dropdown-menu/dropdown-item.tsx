/* eslint-disable max-len */
/* eslint-disable no-useless-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-array-index-key */
import React, { HTMLAttributes, createRef } from 'react';
import classNames from 'classnames';
import omit from 'omit.js';
import Icon from '../icon';
import { DropDownMenuContext } from './context';
import CurrentItem from './current';
import { uuid } from '../utils/uuid';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider';

export interface Option {
  text: string;
  value: string;
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
  onToggleChange?: (toggle: boolean) => void;
  /* 自定义的title是否标红 */
  customTitleActive?: boolean;
}

export interface DropdownItemState {
  selectedValue: string;
  visible: boolean;
  transitionEnd: boolean;
  onlyId: string;
}

class DropdownItem extends React.Component<DropdownItemProps, DropdownItemState> {
  public maskRef = createRef<HTMLDivElement>();

  public childRef = createRef<HTMLDivElement>();

  public itemRef = createRef<HTMLDivElement>();

  constructor(props: DropdownItemProps) {
    super(props);
    this.state = {
      selectedValue: props.value || '',
      visible: false,
      transitionEnd: false,
      onlyId: uuid(),
    };
  }

  componentDidMount() {
    const { getNodeLocation, closeOnClickOutside = true } = this.context;
    getNodeLocation();
    closeOnClickOutside && document.addEventListener('click', this.bodyClick, true);
    document.addEventListener('scroll', this.DocumentScroll);
  }

  componentDidUpdate(preProps: DropdownItemProps) {
    const { value, toggle } = this.props;
    const { changeParentState, getNodeLocation } = this.context;
    const { onlyId } = this.state;
    if (value !== preProps.value) {
      this.setState({ selectedValue: value || '' });
    }
    if (toggle !== preProps.toggle) {
      if (toggle) {
        changeParentState({ currentTargetId: onlyId });
        this.setState({ visible: true });
        getNodeLocation();
      } else {
        this.close();
      }
    }
  }

  componentWillUnmount() {
    const { closeOnClickOutside = true } = this.context;
    document.removeEventListener('scroll', this.DocumentScroll);
    closeOnClickOutside && document.removeEventListener('click', this.bodyClick, true);
  }

  DocumentScroll = () => {
    const { visible } = this.state;
    const { bodyScroll } = this.context;
    if (visible) {
      bodyScroll();
    }
  }

  handleChange = (value: string) => {
    const { onChange, onToggleChange } = this.props;
    this.setState({ selectedValue: value });
    onChange?.(value);
    this.close();
    onToggleChange?.(false);
  }

  close = () => {
    this.setState({ transitionEnd: true });
    const timer = setTimeout(() => {
      clearTimeout(timer);
      this.setState({ visible: false, transitionEnd: false });
    }, 300);
  }

  handleInput = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const {
      getNodeLocation, changeParentState, currentTargetId,
    } = this.context;
    const {
      toggle, onClick, disabled, onToggleChange,
    } = this.props;
    const { visible, onlyId } = this.state;
    !disabled && onClick?.(e);
    if (!disabled && !toggle) {
      if (visible && currentTargetId === onlyId) {
        this.close();
        onToggleChange?.(false);
      } else {
        changeParentState({ currentTargetId: onlyId });
        this.setState({ visible: true });
        getNodeLocation();
        onToggleChange?.(true);
      }
    }
  };

  handleMask =(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { closeOnClickOverlay = true } = this.context;
    const { onToggleChange } = this.props;
    if (e.currentTarget === e.target) {
      if (closeOnClickOverlay) {
        this.close();
        onToggleChange?.(false);
      }
    }
  };

  bodyClick = (e: any) => {
    const { onToggleChange } = this.props;
    const { target } = e;
    if (this.itemRef.current && this.itemRef.current.contains(target)) return; // 点击item
    if (this.childRef.current && this.childRef.current.contains(target)) return; // 点击弹窗内容
    if (this.maskRef.current && this.maskRef.current.contains(target) && !this.childRef.current?.contains(target)) return; // 点击蒙层
    this.close();
    onToggleChange?.(false);
  }

  renderCurrent = (data: Option[] | any) => {
    const { dropItemStyle } = this.props;
    const { activeColor } = this.context;
    const { selectedValue } = this.state;
    return (
      <>
        {(data || []).map((item: any, index: number) => (
          <div key={index}>
            <CurrentItem
              {...item}
              current={item}
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
      customTitleActive,
      ...rest
    } = this.props;
    const {
      selectedValue, visible, transitionEnd, onlyId,
    } = this.state;
    const renderValue = () => {
      const current = options?.find((item: Option) => item.value === selectedValue);
      return current ? current.text : '';
    };

    const omitRest = omit(rest, ['onChange', 'toggle', 'onClick', 'onToggleChange']);
    const showActive = (customTitleActive && title) || selectedValue;
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
          const itemPrefix = getPrefixCls('dropdown-item', prefixCls);
          const itemContainer = classNames(itemPrefix, {
            [`${itemPrefix}-show`]: visible,
            [`${itemPrefix}-hidden`]: transitionEnd && visible,
          });

          return (
            <div {...omitRest} className={`${dropWrapper}-content`}>
              <div
                className={classNames(menuItem, {
                  [`${dropWrapper}-item-disabled`]: disabled,
                  [`${dropWrapper}-item-select`]: visible && showActive && currentTargetId === onlyId,
                })}
                title={title || renderValue()}
                onClick={this.handleInput}
                id={onlyId}
                ref={this.itemRef}
              >
                <span
                  className={`${dropWrapper}-item-text`}
                  style={{
                    color: disabled ? '#C8CCCC' : (activeColor || undefined),
                  }}
                >
                  {title || renderValue()}
                </span>
                <Icon
                  type={visible && currentTargetId === onlyId ? 'up2-line' : 'down2-line'}
                  className={`${menuItem}-icon`}
                />
              </div>
              {visible && currentTargetId === onlyId
                && (
                <div
                  className={itemContainer}
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
                    ref={this.maskRef}
                  >
                    <div
                      className={content}
                      style={{ ...dropContentStyle }}
                      ref={this.childRef}
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
