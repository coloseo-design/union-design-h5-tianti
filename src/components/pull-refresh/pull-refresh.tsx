/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-nested-ternary */
import React, { HTMLAttributes, ReactNode, createRef } from 'react';
import classNames from 'classnames';
import Loading from '../loading';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider/context';

export interface PullRefreshProps extends HTMLAttributes<HTMLElement> {
  /* 是否在加载中 */
  // loading?: boolean;
  /* 自定义前缀 */
  prefixCls?: string;
  /* 下拉过程提示文案 */
  pullingText?: string | ReactNode;
  /* 释放过程提示文案 */
  loosingText?: string | ReactNode;
  /* 刷新成功提示文案 */
  successText?: string | ReactNode;
  /* 加载过程提示文案 */
  loadingText?: string | ReactNode;
  /* 顶部内容高度 */
  headHeight?: number;
  /* 成功提示时长 */
  successDuration?: number;
  /* 下拉刷新时触发 */
  onRefresh: () => Promise<any>;
  style?: React.CSSProperties;
  className?: string;
}

export type PullRefreshStatus =
  | 'normal'
  | 'loading'
  | 'loosing'
  | 'pulling'
  | 'success';

export interface PullRefreshState {
  status: PullRefreshStatus;
  distance: number;
  startY: number;
  isTop?: boolean;
}
class PullRefresh extends React.Component<PullRefreshProps, PullRefreshState> {
  contentRef = createRef<HTMLDivElement>();

  constructor(props: PullRefreshProps) {
    super(props);
    this.state = {
      status: 'normal',
      distance: 0,
      startY: 0,
      isTop: false,
    };
  }

  componentWillUnmount() {
    this.setState({
      status: 'normal',
      distance: 0,
      startY: 0,
    });
  }

  renderStatus = () => {
    const { status } = this.state;
    const {
      pullingText = '下拉即可刷新...',
      loosingText = '释放即可刷新...',
      successText = '刷新成功',
      loadingText,
    } = this.props;
    switch (status) {
      case 'loading': {
        return loadingText || <Loading style={{ backgroundColor: 'none' }}>加载中....</Loading>;
      }
      case 'loosing': return loosingText;
      case 'pulling': return pullingText;
      case 'success': return successText;
      default: return '';
    }
  }

  onTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    event.nativeEvent.stopImmediatePropagation();
    if (this.contentRef.current) { // 只有在顶部的时候才会触发
      const info = this.contentRef.current.getBoundingClientRect();
      if (info.y >= 0) {
        this.setState({ isTop: true });
        const { status } = this.state;
        if (event && event.touches && event.touches[0] && (status !== 'loading' && status !== 'success')) {
          const currentY = event.touches[0].pageY;
          this.setState({
            startY: currentY,
            status: 'pulling',
          });
        }
      } else {
        this.setState({ isTop: false });
      }
    }
  };

  onTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    event.nativeEvent.stopImmediatePropagation();
    const { startY, status, isTop } = this.state;
    const { headHeight = 96 } = this.props;
    if (isTop) {
      if (event && event.touches && event.touches[0] && (status !== 'loading' && status !== 'success')) {
        const currentY = event.touches[0].pageY;
        this.setState({
          distance: currentY - startY,
          status: (currentY - startY) > headHeight ? 'loosing' : 'pulling',
        });
      }
    }
  };

  initState = () => {
    this.setState({
      status: 'normal',
      distance: 0,
      isTop: false,
    });
  }

  onTouchEnd = async (event: React.TouchEvent<HTMLDivElement>) => {
    event.nativeEvent.stopImmediatePropagation();
    const { distance, isTop } = this.state;
    const { headHeight = 96, onRefresh, successDuration = 300 } = this.props;
    if (isTop) {
      if (distance > headHeight) {
        this.setState({ status: 'loading', distance: headHeight });
        await onRefresh?.();
        this.setState({
          status: 'success',
        });
        const timer = setTimeout(() => {
          clearTimeout(timer);
          this.initState();
        }, successDuration);
      } else {
        this.initState();
      }
    } else {
      this.initState();
    }
  }

  renderPullRefresh = ({ getPrefixCls }: ConfigConsumerProps) => {
    const {
      prefixCls,
      children,
      style = {},
      className,
    } = this.props;
    const { distance } = this.state;
    const prefix = getPrefixCls('pull-refresh', prefixCls);
    const wrapper = classNames(prefix, className);
    const content = classNames(`${prefix}-content`);
    return (
      <div
        style={style}
        className={wrapper}
        onTouchStart={this.onTouchStart}
        onTouchMove={this.onTouchMove}
        onTouchEnd={this.onTouchEnd}
      >
        <div
          className={`${prefix}-head`}
          style={{
            height: distance === 0 ? 0 : undefined,
            minHeight: distance > 0 ? distance : undefined,
          }}
        >
          {this.renderStatus()}
        </div>
        <div ref={this.contentRef} className={content}>{children}</div>
      </div>
    );
  }

  render() {
    return (
      <ConfigConsumer>
        {this.renderPullRefresh}
      </ConfigConsumer>
    );
  }
}

export default PullRefresh;
