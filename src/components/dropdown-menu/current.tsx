/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import classNames from 'classnames';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider';

export interface CurrentItemProps {
  value: string;
  prefixCls?: string;
  current?: any;
  onChange?: (value: string) => void;
  itemValue?: string;
  dropItemStyle?: React.CSSProperties;
  activeColor?: string;
}

class CurrentItem extends React.Component<CurrentItemProps> {
  handleSelect = () => {
    const { current, onChange } = this.props;
    onChange && onChange(current.value);
  }

  renderDropdownItem = ({ getPrefixCls }: ConfigConsumerProps) => {
    const {
      prefixCls,
      current,
      itemValue,
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
          {current?.text}
        </div>
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
