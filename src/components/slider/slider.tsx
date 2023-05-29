import React from 'react';
import classnames from 'classnames';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider';

export interface SliderProps {
  /* 默认值 */
  defaultValue?: number;
  /* 滑块取值，默认为0 */
  value?: number;
  /* 滑块拖拽事件 */
  onChange?: (value: number) => void;
  /** 自定义类名称 */
  className?: string;
  /** 自定义类前缀 */
  prefixCls?: string;
  /* 滑块的最大区间，默认为0 */
  min?: number;
  /* 滑块的最大区间，默认为10 */
  max?: number;
}

export interface SliderState {
  value: number;
  canDrop: boolean;
}

class Slider extends React.Component<SliderProps, SliderState> {
  node?: HTMLSpanElement | undefined;

  constructor(props: SliderProps) {
    super(props);
    this.state = {
      value: props.value || props.defaultValue || 0,
      canDrop: false,
    };
  }

  componentDidUpdate(props: SliderProps) {
    const { value = 0 } = this.props;
    if (value !== props.value) {
      this.setState({
        value,
      });
    }
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
  }

  getNode = (node: HTMLDivElement) => {
    this.node = node;
  }

  translateOffsetToValue = (evt: MouseEvent) => {
    const { pageXOffset } = window;
    const { max = 100, min = 0 } = this.props;
    if (this.node) {
      const { width: containerWidth, left } = this.node.getBoundingClientRect();
      const offsetX = evt.pageX - left - pageXOffset;
      const value = (offsetX / containerWidth) * max;
      let formattedValue = value;
      if (formattedValue > max) {
        formattedValue = max;
      }
      if (formattedValue < min) {
        formattedValue = min;
      }
      return formattedValue;
    }
    return 0;
  }

  onRailClick = (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const formattedValue = this.translateOffsetToValue(evt as unknown as MouseEvent);
    const { onChange } = this.props;
    onChange && onChange(this.formateValue(formattedValue));
    this.setState({
      value: formattedValue,
    });
  };

  onMouseMove = (evt: MouseEvent) => {
    const { canDrop } = this.state;
    if (canDrop) {
      const formattedValue = this.translateOffsetToValue(evt);
      const { onChange } = this.props;
      onChange && onChange(this.formateValue(formattedValue));
      this.setState({
        value: formattedValue,
      });
    }
  }

  formateValue = (value: number) => Math.round(value)

  onMouseUp = (evt: MouseEvent) => {
    evt.stopPropagation();
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
    this.setState({
      canDrop: false,
    });
  }

  onMouseDown = (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    evt.stopPropagation();
    evt.preventDefault();
    this.setState({
      canDrop: true,
    });
    document.addEventListener('mousemove', this.onMouseMove, true);
    document.addEventListener('mouseup', this.onMouseUp, true);
  }

  getPosition = (value = 0) => {
    const { max = 100 } = this.props;
    const barWidthPercentage: number = (value / max) * 100;
    const barWidthCss = `${barWidthPercentage}%`;
    return barWidthCss;
  }

  renderSlider = ({ getPrefixCls }: ConfigConsumerProps) => {
    const {
      className, prefixCls,
    } = this.props;
    const { value = 0 } = this.state;
    const prefix = getPrefixCls?.('slider-mobile', prefixCls);
    const wrapperClass = classnames(prefix, className);
    const dotClass = classnames(`${prefix}-dot`, {});
    return (
      <div className={wrapperClass} ref={this.getNode} onClick={this.onRailClick}>
        <div className={`${prefix}-rail`} />
        <div className={`${prefix}-bar`} style={{ width: this.getPosition(value) }} onClick={this.onRailClick} />
        <div
          className={dotClass}
          style={{ left: this.getPosition(value), zIndex: 1 }}
          onMouseDown={this.onMouseDown}
        />
      </div>
    );
  }

  render() {
    return (
      <ConfigConsumer>
        {this.renderSlider}
      </ConfigConsumer>
    );
  }
}

export default Slider;
