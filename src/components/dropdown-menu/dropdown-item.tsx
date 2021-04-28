/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import classNames from 'classnames';
import CurrentItem from './current';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider';

export interface Option {
  text: string;
  value: string;
  icon?: React.ReactNode | string;
  card?: string | React.ReactNode;
}

export interface DropdownItemProps {
  value?: string;
  prefixCls?: string;
  options?: Option[];
  onSelect?: (value: string) => void;
  onChange?: (value: string) => void;
  itemValue?: string;
  /* 设置每一行的样式 */
  dropItemStyle?: React.CSSProperties;
  /* 是否禁用菜单 */
  disabled?: boolean;
  /* 下拉列表内容样式 */
  dropContentStyle?: React.CSSProperties;
  visible?: boolean;
  direction?: 'down' | 'up',
  activeColor?: string;
  /* 是否展示下拉菜单 */
  toggle?: boolean;
  /* 菜单文字标题 */
  title?: string;
  /* 点击item时触发 */
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  transitionEnd?: boolean;
  hasCard?: boolean;
}

export interface DropdownItemState {
  expandKeys: string[];
}

class DropdownItem extends React.Component<DropdownItemProps, DropdownItemState> {
  constructor(props: DropdownItemProps) {
    super(props);
    this.state = {
      expandKeys: [],
    };
  }

  handleChange = (value: string) => {
    const { onChange, onSelect } = this.props;
    onSelect && onSelect(value);
    onChange && onChange(value);
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

  renderCurrent = (data: Option[] | any) => {
    const { expandKeys } = this.state;
    const {
      itemValue, dropItemStyle, activeColor,
    } = this.props;
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
              itemValue={itemValue}
              dropItemStyle={dropItemStyle}
              activeColor={activeColor}
            />
          </div>
        ))}
      </>
    );
  }

  handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { children } = this.props;
    if (children) {
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
    }
  };

  renderDropdownItem = ({ getPrefixCls }: ConfigConsumerProps) => {
    const {
      prefixCls,
      options,
      dropContentStyle = {},
      visible,
      direction,
      children,
      transitionEnd,
      hasCard,
    } = this.props;
    const wrapper = getPrefixCls('dropdown-item-content', prefixCls);
    const content = classNames(wrapper, {
      [`${wrapper}-show`]: visible,
      [`${wrapper}-up`]: direction === 'up',
      [`${wrapper}-hidden`]: transitionEnd && visible,
    });

    return (
      <div className={content} style={{ backgroundColor: hasCard ? '#F5F6F6' : '#fff', ...dropContentStyle }} onClick={this.handleClick}>
        {children || this.renderCurrent(options || [])}
      </div>
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

export default DropdownItem;
