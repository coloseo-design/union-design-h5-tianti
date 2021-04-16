import React, {
  Component,
} from 'react';
import classNames from 'classnames';
import { Button } from '../index';
import { withGlobalConfig } from '../config-provider/context';
import PickerColumn from './pickerColumn';
import { BasePickerProps, Option, PickerState } from './type';

@withGlobalConfig
class Picker extends Component<BasePickerProps, PickerState> {
  static defaultProps: BasePickerProps = {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
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
    this.setState({
      value: [...value],
    });
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
      confirmButtonText,
      cancelButtonText,
      onConfirm,
      onCancel,
      title,
    } = this.props;

    const prefix = getPrefixCls('picker', prefixCls);
    const pickerCls = classNames(prefix, {});
    const bodyCls = classNames(`${prefix}-body`);
    const footerCls = classNames(`${prefix}-footer`);
    const containerHeight = visibleItemCount * itemHeight;

    const offsetY = (itemHeight * (visibleItemCount - 1)) / 2;
    const { value = [] } = this.state;
    return (
      <div className={pickerCls}>
        <div className={`${prefix}-title`}>{title}</div>
        <div
          className={bodyCls}
          style={{ ...style, height: containerHeight }}
        >
          {
            options.map((option, index) => {
              const selectedIndex = option.findIndex((item) => item.value === value[index]);
              return (
                <PickerColumn
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
        <div className={footerCls}>
          <Button onClick={onCancel}>{cancelButtonText}</Button>
          <Button onClick={onConfirm} type="primary">{confirmButtonText}</Button>
        </div>
      </div>
    );
  }
}

export default Picker;
