import React from 'react';
import PickerBase from './picker-base';
import {
  CascaderProps, Option, PickerProps, PickerState,
} from './type';

export default class Picker extends React.Component<PickerProps, PickerState> {
  static Cascader: React.FC<CascaderProps>;

  constructor(props: PickerProps) {
    super(props);
    this.state = {
      value: props.value || props.defaultValue || [],
    };
  }

  componentDidUpdate(props: PickerProps) {
    const { value } = this.props;
    if (value !== props.value) {
      this.setState({
        value,
      });
    }
  }

  onChange = (item: Option, index: number) => {
    const { options, onChange } = this.props;
    const { value } = this.state;
    value[index] = item.value;
    const newValue = options.map((v, idx) => {
      if (!value[idx]) {
        return v[0] ? v[0].value : '';
      }
      return value[idx];
    });
    this.setState({
      value: newValue,
    });
    onChange && onChange(newValue);
  }

  render() {
    const { value } = this.state;
    return (
      <PickerBase {...this.props} value={value} onChange={this.onChange} />
    );
  }
}
