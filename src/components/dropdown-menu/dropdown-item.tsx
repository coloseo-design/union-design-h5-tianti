/* eslint-disable react/no-array-index-key */
import React from 'react';
import classNames from 'classnames';
import CurrentItem from './current';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider';

export interface Option {
  text: string;
  value: string;
  icon?: React.ReactNode | string;
  children?: Option[];
}

export interface DropdownItemProps {
  value?: string;
  prefixCls?: string;
  options?: Option[];
  closeDrop?: () => void;
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
  toggle?: boolean;
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

  renderCurrent = (data: Option[]) => {
    const { expandKeys } = this.state;
    const {
      closeDrop, itemValue, dropItemStyle, activeColor,
    } = this.props;
    return (
      <>
        {(data || []).map((item, index) => (
          <div key={index}>
            <CurrentItem
              {...item}
              current={item}
              isExpand={(expandKeys || []).some((i: string) => `${i}` === `${item.value}`)}
              onExpand={this.onExpand}
              closeDrop={closeDrop}
              onChange={this.handleChange}
              itemValue={itemValue}
              dropItemStyle={dropItemStyle}
              activeColor={activeColor}
            >
              {
                expandKeys.indexOf(`${item.value}`) >= 0
                && item.children
                && item.children.length > 0
                && this.renderCurrent(item.children)
              }
            </CurrentItem>
          </div>
        ))}
      </>
    );
  }

  renderDropdownItem = ({ getPrefixCls }: ConfigConsumerProps) => {
    const {
      prefixCls,
      options,
      dropContentStyle,
      visible,
      direction,
    } = this.props;
    const wrapper = getPrefixCls('dropdown-item-content', prefixCls);
    const content = classNames(wrapper, {
      [`${wrapper}-show`]: visible,
      [`${wrapper}-up`]: direction === 'up',
    });

    return (
      <div className={content} style={dropContentStyle}>
        {this.renderCurrent(options || [])}
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
