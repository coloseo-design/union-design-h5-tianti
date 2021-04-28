import React from 'react';
import classnames from 'classnames';
import warning from '../utils/warning';
import { withGlobalConfig } from '../config-provider';
import { CheckboxProps, CheckboxState } from './type';
import Group, { withCheckboxGrooupConsumer } from './group';

@withCheckboxGrooupConsumer
@withGlobalConfig
export default class Checkbox extends React.Component<CheckboxProps, CheckboxState> {
  static Group: typeof Group;

  static defaultProps:CheckboxProps = {
    checked: false,
    getPrefixCls: (input: string) => input,
  }

  constructor(props: CheckboxProps) {
    super(props);
    this.state = {
      checked: props.checked || false,
    };
  }

  componentDidUpdate(props: CheckboxProps) {
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
      onChange, disabled, checkboxGroupContext, value = '',
    } = this.props;
    if (checkboxGroupContext && checkboxGroupContext.disabled) return;
    if (disabled) return;
    if (checkboxGroupContext && checkboxGroupContext.onChange) {
      checkboxGroupContext.onChange(value);
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
      checkboxGroupContext,
      value = '',
    } = this.props;

    let { checked } = this.state;
    // 如果value在checkboxGroup的value中，则选中
    if (checkboxGroupContext && checkboxGroupContext.value) {
      warning(!value, 'Checkbox嵌套在Group中须提供value');
      checked = checkboxGroupContext.value.indexOf(value) >= 0;
    }
    const prefix = getPrefixCls('checkbox', customizedPrefixCls);
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

Checkbox.Group = Group;
