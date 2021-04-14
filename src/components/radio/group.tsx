import React from 'react';
import Radio from './radio';
import {
  RadioGroupContextProps, RadioGroupOption, RadioGroupOptions, RadioGroupProps, RadioGroupState,
} from './type';

const Context = React.createContext<RadioGroupContextProps>({});
const { Consumer: RadioGroupConsumer, Provider } = Context;

export default class RadioGroup extends React.Component<RadioGroupProps, RadioGroupState> {
  static getDerivedStateFromProps(nextProps: RadioGroupProps) {
    if ('value' in nextProps) {
      return {
        value: nextProps.value,
      };
    }
    return null;
  }

  constructor(props: RadioGroupProps) {
    super(props);
    const { value, defaultValue } = props;
    this.state = {
      value: value || defaultValue || '',
    };
  }

  onGroupChange = (value: string) => {
    const { onChange } = this.props;
    this.setState({
      value,
    });
    onChange && onChange(value);
  };

  formateOptions = (options: RadioGroupOptions) => {
    const { disabled } = this.props;
    return options.map((item: string | RadioGroupOption) => {
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
    const { value } = this.state;
    const contextValue = {
      onChange: this.onGroupChange,
      disabled,
      value,
    };
    console.log('contextValue', contextValue);
    if (options.length > 0) {
      children = this.formateOptions(options).map((item) => (
        <Radio
          key={item.value}
          checked={value === item.value}
          disabled={item.disabled}
          value={item.value}
        >
          {item.label}
        </Radio>
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
const withRadioGrooupConsumer = <T extends RadioGroupContextProps>(Component: React.FC<T> | React.Component<T>) => (props: T) => (
  <RadioGroupConsumer>
    {
      (checkboxGroupContext: RadioGroupContextProps) => <Component {...props} radioGroupContext={checkboxGroupContext} />
    }
  </RadioGroupConsumer>
);

export {
  withRadioGrooupConsumer,
};
