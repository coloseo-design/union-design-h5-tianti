import React, {
  Component,
} from 'react';
import classNames from 'classnames';
import { withGlobalConfig } from '../config-provider/context';
import Column from './column';
import { BasePickerProps, Option, PickerState } from './type';

@withGlobalConfig
class Picker extends Component<BasePickerProps, PickerState> {
  static defaultProps: BasePickerProps = {
    itemHeight: 44,
    visibleItemCount: 6,
    swipeDuration: 1000,
    getPrefixCls: (input: string) => input,
    options: [],
    renderItem: (item) => item.value,
  };

  constructor(props: BasePickerProps) {
    super(props);
    // 劫持value
    const { defaultValue, value } = props;
    this.state = {
      value: value || defaultValue || [],
    };
  }

  onChange = (index: number) => (item: Option) => {
    const { value } = this.state;
    value[index] = item.value;
    const newValue = [...value];
    this.setState({
      value: newValue,
    });
    const { onChange } = this.props;
    onChange && onChange(newValue);
  };

  render() {
    const {
      prefixCls,
      options,
      style,
      itemHeight = 44,
      getPrefixCls,
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
}

export default Picker;
