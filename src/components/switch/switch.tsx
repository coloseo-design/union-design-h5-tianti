/* eslint-disable react/button-has-type */
/* eslint-disable no-nested-ternary */
import React from 'react';
import classNames from 'classnames';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider/context';

export interface BaseSwitchProps {
   prefixCls?: string;
   checked?: boolean,
   className?: string,
   defaultChecked?: boolean,
   color?: 'red' | 'green'
   onChange?: (value:boolean, event:React.MouseEvent<HTMLElement>) => void;
}

export interface BaseSwitchState {
  checked: boolean;
}

class Switch extends React.Component<BaseSwitchProps, BaseSwitchState> {
  static defaultProps: BaseSwitchProps = {
    checked: undefined,
    defaultChecked: false,
  };

  constructor(props:BaseSwitchProps) {
    super(props);
    this.state = {
      checked: props.checked || props.defaultChecked || false,
    };
  }

  componentDidUpdate(prevProps: BaseSwitchProps) {
    const { checked } = this.props;
    if (checked !== undefined && checked !== prevProps.checked) {
      this.setState({ checked });
    }
  }

  handleClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { checked } = this.state;
    const { onChange } = this.props;
    if (!('checked' in this.props)) {
      this.setState({ checked: !checked });
    }
    if (onChange) {
      onChange(!checked, e);
    }
  };

  renderSwitch = ({ getPrefixCls }: ConfigConsumerProps) => {
    const {
      className, prefixCls, color = '',
    } = this.props;
    const { checked } = this.state;
    const prefix = getPrefixCls('switch-mobile', prefixCls);

    const classname = classNames(`${prefix}-parent`, {
      [`${prefix}-checked`]: checked,
      [`${prefix}-checked-${color}`]: checked && color,
    }, className);
    return (
      <button
        className={classname}
        onClick={this.handleClick}
        type="button"
      >
        <div className={`${prefix}-round`} />
      </button>
    );
  };

  render() {
    return (
      <ConfigConsumer>
        {this.renderSwitch}
      </ConfigConsumer>
    );
  }
}

export default Switch;
