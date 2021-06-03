import React, {
  CSSProperties, FC, memo, ReactNode, useCallback, useEffect, useMemo, useRef, useState,
} from 'react';
import { useClassNames, useGetPrefixClass } from '../common/base-component';

export type SwipeProps = {
  /** 样式 */
  style?: CSSProperties;
  /** 样式 */
  className?: string;
  /** 自动轮播间隔，单位为 ms */
  autoplay?: number;
  /** 动画时长，单位为 ms */
  duration?: number;
  /** 初始位置索引值 */
  defaultIndex?: number;
  /** 滑块宽度 */
  width?: number | string;
  /** 滑块高度 */
  height?: number | string;

  children?: ReactNode;
};

const Swipe: FC<SwipeProps> = (props) => {
  const {
    children = [],
    style,
    className,
    autoplay = 3000,
    duration = 600,
    defaultIndex = 0,
    width = '100%',
    height = '100%',
  } = props ?? {};
  const containerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(defaultIndex);
  const [transition, setTransition] = useState(true);
  const classNames = useClassNames();
  const getPrefixClass = useGetPrefixClass('swipe');
  const swipeClass = useMemo(getPrefixClass, [getPrefixClass]);

  const childrenView = useMemo(() => {
    if (React.isValidElement(children)) {
      return [children];
    }
    return children as ReactNode[];
  }, [children]);

  const onTransitionEnd = useCallback(() => {
    if (index >= childrenView.length) {
      setTimeout(() => {
        setTransition(false);
        setIndex(0);
      });
    }
  }, [index, childrenView]);

  const tip = useMemo(() => {
    const childrenLen = childrenView.length;
    const tempIndex = index === childrenLen ? 0 : index;

    return `${tempIndex + 1}/${childrenLen}`;
  }, [index, childrenView]);

  const contentStyle = useMemo(() => ({
    transition: transition ? `all ${duration / 1000}s ease-in-out` : 'unset',
    transform: `translateX(-${index * 100}%)`,
  }), [transition, index, duration]);

  const swipeStyle = useMemo(() => ({
    ...style,
    width,
    height,
  }), [style, width, height]);

  const swipeClassName = useMemo(() => classNames(swipeClass, className),
    [classNames, className, swipeClass]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTransition(true);
      setIndex((num) => num + 1);
    }, autoplay);

    return () => {
      clearInterval(timer);
    };
  }, [autoplay]);

  return (
    <div className={swipeClassName} style={swipeStyle}>
      <div
        className={`${swipeClassName}-content`}
        ref={containerRef}
        style={contentStyle}
        onTransitionEnd={onTransitionEnd}
      >
        {React.Children.map(childrenView, (item) => <div className="item">{item}</div>)}
        <div className="item">{childrenView[0]}</div>
      </div>
      <div className="tip">{tip}</div>
    </div>
  );
};

export default memo(Swipe);
