import React from 'react';
import classnames from 'classnames';
import { warning } from '../utils/warning';
import { withGlobalConfig } from '../config-provider';
import { RadioProps, RadioState } from './type';
import Group, { withRadioGrooupConsumer } from './group';

@withRadioGrooupConsumer
@withGlobalConfig
export default class Radio extends React.Component<RadioProps, RadioState> {
  static Group: typeof Group;

  static defaultProps: RadioProps = {
    checked: false,
    defaultChecked: false,
    getPrefixCls: (input: string) => input,
  }

  constructor(props: RadioProps) {
    super(props);
    const { checked, defaultChecked } = props;
    this.state = {
      checked: checked || defaultChecked || false,
    };
  }

  componentDidUpdate(props: RadioProps) {
    const { checked = false } = this.props;
    if (checked !== props.checked) {
      this.setState({
        checked,
      });
    }
  }

  onClick = () => {
    const { checked } = this.state;
    const {
      onChange, disabled, radioGroupContext, value = '',
    } = this.props;
    if (radioGroupContext && radioGroupContext.disabled) return;
    if (disabled) return;
    if (radioGroupContext && radioGroupContext.onChange) {
      radioGroupContext.onChange(value);
    }
    const toggleChecked = !checked;
    this.setState({
      checked: toggleChecked,
    });
    onChange && onChange(toggleChecked);
  }

  render() {
    const {
      getPrefixCls,
      prefixCls: customizedPrefixCls,
      disabled,
      children,
      radioGroupContext,
      value = '',
    } = this.props;

    let { checked } = this.state;
    // 如果value在checkboxGroup的value中，则选中
    if (radioGroupContext && radioGroupContext.value) {
      warning(!value, 'Radio嵌套在Group中须提供value');
      checked = radioGroupContext.value === value;
    }
    console.log('checked', checked);
    const prefix = getPrefixCls('radio', customizedPrefixCls);
    const className = classnames(prefix, {
      [`${prefix}-checked`]: checked,
      [`${prefix}-disabled`]: disabled,
    });
    const iconClassName = `${prefix}-icon`;
    return (
      <div className={className} onClick={this.onClick}>
        <div className={iconClassName} />
        <span>
          {
            children
          }
        </span>

      </div>
    );
  }
}

Radio.Group = Group;
