/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import classNames from 'classnames';
import Icon from '../icon';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider';

export interface CurrentItemProps {
  value: string;
  icon?: string | React.ReactNode;
  prefixCls?: string;
  current?: any;
  isExpand?: boolean;
  onExpand?: (value: string) => void;
  onChange?: (value: string) => void;
  itemValue?: string;
  dropItemStyle?: React.CSSProperties;
  activeColor?: string;
}

class CurrentItem extends React.Component<CurrentItemProps> {
  handleExpan = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.stopPropagation();
    const { current, onExpand } = this.props;
    onExpand && onExpand(`${current.value}`);
  }

  handleSelect = () => {
    const { current, onChange } = this.props;
    onChange && onChange(current.value);
  }

  renderDropdownItem = ({ getPrefixCls }: ConfigConsumerProps) => {
    const {
      prefixCls,
      current,
      children,
      isExpand,
      itemValue,
      icon,
      dropItemStyle = {},
      activeColor,
    } = this.props;
    const wrapper = getPrefixCls('dropdown-item-content', prefixCls);
    const currentStyle = classNames(`${wrapper}-current`, {
      [`${wrapper}-current-selected`]: current ? current.value && itemValue === current.value : undefined,
    });

    return (
      <div className={`${wrapper}-inner`}>
        <div
          className={currentStyle}
          style={{
            ...dropItemStyle,
            color: current && itemValue === current.value ? activeColor : undefined,
          }}
          onClick={this.handleSelect}
        >
          <div>
            {icon
              && (
              <span style={{ paddingRight: 12 }}>
                {React.isValidElement(icon) ? icon : <img src={`${icon}` || ''} style={{ width: 16 }} alt="icon" />}
              </span>
              )}
            {current && current.text}
          </div>
          {current && current.children && current.children.length > 0
            && (
            <div
              style={{
                width: 22,
                height: 22,
                borderRadius: '50%',
                border: '2px solid rgba(0,0,0,0.65)',
                textAlign: 'center',
              }}
            >
              <Icon
                type={isExpand ? 'down' : 'up'}
                style={{ fontSize: 18, marginTop: isExpand ? 1 : -3, marginLeft: -1 }}
                onClick={this.handleExpan}
              />
            </div>
            )}
        </div>
        {children}
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

export default CurrentItem;
