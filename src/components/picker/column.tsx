/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import classNames from 'classnames';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider/context';
import { Option, PickerColumnProps, PickerColumnState } from './type';

let lastX = 0;
let lastY = 0;
const DEFAULT_DURATION = 300;
// TODO: onTouchEnd和onClick会冲突
let isTouchMove = false;

class PickerColumn extends React.Component<PickerColumnProps, PickerColumnState> {
  constructor(props: PickerColumnProps) {
    super(props);
    // 劫持value
    const { index = 0, itemHeight, visibleItemCount } = props;
    const start = (itemHeight * (visibleItemCount - 1)) / 2;
    const offsetY = start - (itemHeight * index);
    this.state = {
      offsetY,
      duration: 0,
    };
  }

  getStartOffset = () => {
    const { itemHeight, visibleItemCount } = this.props;
    return (itemHeight * (visibleItemCount - 1)) / 2;
  }

  getRange = () => {
    const { itemHeight, data = [] } = this.props;
    const start = this.getStartOffset();
    const end = start - (itemHeight * (data.length));
    return [start, end];
  };

  adjustOffsetY = (offsetY: number) => {
    const { itemHeight } = this.props;
    const start = this.getStartOffset();
    const offset = (start - offsetY) % itemHeight;
    return offsetY + offset;
  }

  getIndexFromOffsetY = (offsetY: number) => {
    const { itemHeight } = this.props;
    const start = this.getStartOffset();
    return (start - offsetY) / itemHeight;
  };

  onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    e.nativeEvent.stopImmediatePropagation();
    const { offsetY } = this.state;
    if (e && e.touches && e.touches[0]) {
      lastX = e.touches[0].pageX;
      lastY = e.touches[0].pageY - offsetY;
    }
  }

  onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    e.nativeEvent.stopImmediatePropagation();
    isTouchMove = true;
    if (e && e.touches && e.touches[0]) {
      const currentX = e.touches[0].pageX;
      const currentY = e.touches[0].pageY;
      const tx = currentX - lastX;
      const ty = (currentY - lastY);
      if (Math.abs(tx) <= Math.abs(ty)) {
        const [start, end] = this.getRange();
        if (ty <= start && ty >= end) {
          this.setState({ offsetY: ty, duration: DEFAULT_DURATION });
        }
      }
    }
  }

  onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (!isTouchMove) return;
    const { onChange, data } = this.props;
    e.nativeEvent.stopImmediatePropagation();
    const { offsetY } = this.state;
    const adjusted = this.adjustOffsetY(offsetY);
    this.setState({ offsetY: adjusted, duration: DEFAULT_DURATION });
    const index = this.getIndexFromOffsetY(adjusted);
    onChange && onChange(data[index]);
    isTouchMove = false;
  }

  onClick = (idx: number, item: Option) => (evt: React.MouseEvent<HTMLDivElement>) => {
    evt.preventDefault();
    const { onChange, itemHeight } = this.props;
    const start = this.getStartOffset();
    const offsetY = start - (itemHeight * idx);
    this.setState({
      duration: DEFAULT_DURATION,
      offsetY,
    });
    onChange && onChange(item);
  }

  renderColumn = ({ getPrefixCls }: ConfigConsumerProps) => {
    const {
      prefixCls = '',
      itemHeight = 44,
      data,
      renderItem,
      sectionIndex,
    } = this.props;
    const { offsetY, duration } = this.state;
    const prefix = getPrefixCls('picker-body-column', prefixCls);
    const mainClass = classNames(prefix, {});
    return (
      <div
        className={mainClass}
        onTouchStart={this.onTouchStart}
        onTouchMove={this.onTouchMove}
        onTouchEnd={this.onTouchEnd}
        onTouchCancel={this.onTouchEnd}
      >
        <ul
          className={`${prefix}-wrapper`}
          style={{
            transform: `translate3d(0px, ${offsetY}px, 0px)`,
            transitionDuration: `${duration}ms`,
            transitionProperty: duration ? 'all' : 'none',
          }}
        >
          {(data || []).map((item, i) => (
            <li
              key={item.key}
              className={`${prefix}-item`}
              style={{ height: itemHeight }}
              onClick={this.onClick(i, item)}
            >
              {renderItem(item, { column: sectionIndex, row: i })}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  render() {
    return (
      <ConfigConsumer>
        {
          (config) => this.renderColumn(config)
        }
      </ConfigConsumer>
    );
  }
}

export default PickerColumn;
