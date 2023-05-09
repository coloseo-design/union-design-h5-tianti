/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-nested-ternary */
import React, { HTMLAttributes, ReactNode } from 'react';
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
}
class PullRefresh extends React.Component<PullRefreshProps, PullRefreshState> {
  constructor(props: PullRefreshProps) {
    super(props);
    this.state = {
      status: 'normal',
      distance: 0,
      startY: 0,
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
        return <div>{loadingText || <Loading style={{ backgroundColor: 'none' }}>加载中....</Loading>}</div>;
      }
      case 'loosing': return <div>{loosingText}</div>;
      case 'pulling': return <div>{pullingText}</div>;
      case 'success': return <div>{successText}</div>;
      default: return '';
    }
  }

  onTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    event.nativeEvent.stopImmediatePropagation();
    const { status } = this.state;
    if (event && event.touches && event.touches[0] && (status !== 'loading' && status !== 'success')) {
      const currentY = event.touches[0].pageY;
      this.setState({
        startY: currentY,
        status: 'pulling',
      });
    }
  };

  onTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    event.nativeEvent.stopImmediatePropagation();
    const { startY, status } = this.state;
    const { headHeight = 96 } = this.props;
    if (event && event.touches && event.touches[0] && (status !== 'loading' && status !== 'success')) {
      const currentY = event.touches[0].pageY;
      this.setState({
        distance: currentY - startY,
        status: (currentY - startY) > headHeight ? 'loosing' : 'pulling',
      });
    }
  };

  onTouchEnd = async (event: React.TouchEvent<HTMLDivElement>) => {
    event.nativeEvent.stopImmediatePropagation();
    const { distance } = this.state;
    const { headHeight = 96, onRefresh, successDuration = 300 } = this.props;
    if (distance > headHeight) {
      this.setState({ status: 'loading', distance: headHeight });
      await onRefresh?.();
      this.setState({
        status: 'success',
      });
      const timer = setTimeout(() => {
        clearTimeout(timer);
        this.setState({
          status: 'normal',
          distance: 0,
        });
      }, successDuration);
    } else {
      this.setState({ distance: 0, status: 'normal' });
    }
  }

  renderPullrefresh = ({ getPrefixCls }: ConfigConsumerProps) => {
    const {
      prefixCls,
      children,
      headHeight = 96,
      style = {},
      className,
    } = this.props;
    const { distance } = this.state;
    const prefix = getPrefixCls('pull-refresh', prefixCls);
    const wrapper = classNames(prefix, className);
    const content = classNames(`${wrapper}-content`);
    return (
      <div
        style={style}
        className={wrapper}
      >
        <div
          className={content}
          onTouchStart={this.onTouchStart}
          onTouchMove={this.onTouchMove}
          onTouchEnd={this.onTouchEnd}
          style={{ minHeight: headHeight + 10, transform: `translateY(${distance}px)`, transition: 'transform 0.3s linear' }}
        >
          <div className={`${content}-head`} style={{ height: headHeight }}>
            {this.renderStatus()}
          </div>
          {children}
        </div>
      </div>
    );
  }

  render() {
    return (
      <ConfigConsumer>
        {this.renderPullrefresh}
      </ConfigConsumer>
    );
  }
}

export default PullRefresh;
