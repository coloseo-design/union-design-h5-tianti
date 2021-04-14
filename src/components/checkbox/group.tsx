import React from 'react';
import Checkbox from './checkbox';
import {
  CheckboxGroupProps,
  CheckboxGroupContextProps,
  CheckboxGroupOption,
  CheckboxGroupOptions,
  CheckboxGroupState,
} from './type';

const Context = React.createContext<CheckboxGroupContextProps>({});
const { Consumer: CheckboxGroupConsumer, Provider } = Context;

export default class CheckboxGroup extends React.Component<CheckboxGroupProps, CheckboxGroupState> {
  static defaultProps: CheckboxGroupProps = {
    value: [],
    disabled: false,
  };

  static getDerivedStateFromProps(nextProps: CheckboxGroupProps) {
    if ('value' in nextProps) {
      return {
        value: nextProps.value,
      };
    }
    return null;
  }

  constructor(props: CheckboxGroupProps) {
    super(props);
    const { value, defaultValue } = props;
    this.state = {
      value: value || defaultValue || [],
    };
  }

  onGroupChange = (value: string) => {
    const { value: valueOfState = [] } = this.state;
    const { onChange } = this.props;
    const index = valueOfState.indexOf(value);
    if (index >= 0) {
      valueOfState.splice(index, 1);
    } else {
      valueOfState.push(value);
    }
    const newState = [...valueOfState];
    this.setState({
      value: newState,
    });
    onChange && onChange(newState);
  };

  formateOptions = (options: CheckboxGroupOptions) => {
    const { disabled } = this.props;
    return options.map((item: string | CheckboxGroupOption) => {
      if (typeof (item) === 'string') {
        return {
          label: item,
          value: item,
          disabled,
        };
      }
      return {
        ...item,
        disabled: disabled || item.disabled,
      };
    });
  }

  render() {
    const { options = [], disabled = false } = this.props;
    let { children } = this.props;
    const { value = [] } = this.state;
    const contextValue = {
      onChange: this.onGroupChange,
      disabled,
      value,
    };
    if (options.length > 0) {
      children = this.formateOptions(options).map((item) => (
        <Checkbox
          key={item.value}
          checked={value.indexOf(item.value) >= 0}
          disabled={item.disabled}
          value={item.value}
        >
          {item.label}
        </Checkbox>
      ));
    }
    return (
      <Provider value={contextValue}>
        {
          children
        }
      </Provider>
    );
  }
}

/* eslint max-len: 0 */
/* eslint react/display-name: 0 */
const withCheckboxGrooupConsumer = <T extends CheckboxGroupContextProps>(Component: React.FC<T> | React.Component<T>) => (props: T) => (
  <CheckboxGroupConsumer>
    {
      (checkboxGroupContext: CheckboxGroupContextProps) => <Component {...props} checkboxGroupContext={checkboxGroupContext} />
    }
  </CheckboxGroupConsumer>
);

export {
  withCheckboxGrooupConsumer,
};
