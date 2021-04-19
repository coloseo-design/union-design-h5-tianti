import React, {
  Component,
} from 'react';
import classNames from 'classnames';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider/context';
import Column from './column';
import {
  BasePickerProps,
  CascaderProps,
  Option,
  PickerState,
} from './type';

class Picker extends Component<BasePickerProps, PickerState> {
  static defaultProps: BasePickerProps = {
    itemHeight: 44,
    visibleItemCount: 6,
    swipeDuration: 1000,
    options: [],
    renderItem: (item) => item.value,
  };

  static Cascader: React.FC<CascaderProps>;

  constructor(props: BasePickerProps) {
    super(props);
    // 劫持value
    const { defaultValue, value, options } = props;
    const firstValue = options.map((item) => (item[0] ? item[0].value : ''));
    this.state = {
      value: value || defaultValue || firstValue,
    };
  }

  componentDidUpdate(props: BasePickerProps) {
    const { value } = this.props;
    if (value && props.value !== value) {
      this.setState({
        value,
      });
    }
  }

  onChange = (index: number) => (item: Option) => {
    const { value } = this.state;
    const { options } = this.props;
    value[index] = item.value;
    // 如果有些列的value为空，那么则默认用第一个的value
    const newValue = options.map((v, idx) => {
      if (!value[idx]) {
        return v[0] ? v[0].value : '';
      }
      return value[idx];
    });
    this.setState({
      value: newValue,
    });
    const { onChange } = this.props;
    onChange && onChange(newValue);
  };

  renderPicker = ({ getPrefixCls }: ConfigConsumerProps) => {
    const {
      prefixCls,
      options,
      style,
      itemHeight = 44,
      visibleItemCount,
      renderItem,
    } = this.props;

    const prefix = getPrefixCls('picker', prefixCls);
    const pickerCls = classNames(prefix, {});
    const bodyCls = classNames(`${prefix}-body`);
    const containerHeight = visibleItemCount * itemHeight;

    const offsetY = (itemHeight * (visibleItemCount - 1)) / 2;
    const { value = [] } = this.state;
    return (
      <div className={pickerCls}>
        <div
          className={bodyCls}
          style={{ ...style, height: containerHeight }}
        >
          {
            options.map((option, index) => {
              const selectedIndex = option.findIndex((item) => item.value === value[index]);
              return (
                <Column
                  // eslint-disable-next-line react/no-array-index-key
                  key={`${index}`}
                  data={option}
                  itemHeight={itemHeight}
                  visibleItemCount={visibleItemCount}
                  index={selectedIndex >= 0 ? selectedIndex : 0}
                  onChange={this.onChange(index)}
                  renderItem={renderItem}
                  sectionIndex={index}
                />
              );
            })
          }
          <div className={`${bodyCls}-mask`} style={{ backgroundSize: `100% ${offsetY}px` }} />
          <div className={`${bodyCls}-hairline-top-bottom`} style={{ height: itemHeight }} />
        </div>
      </div>
    );
  }

  render() {
    return (
      <ConfigConsumer>
        {(context) => this.renderPicker(context)}
      </ConfigConsumer>
    );
  }
}

export default Picker;
