/* eslint-disable react/no-array-index-key */
import React, {
  // CSSProperties,
  FC, HTMLAttributes, memo, ReactNode, useCallback, useEffect, useMemo, useRef, useState,
} from 'react';
import { useClassNames, useGetPrefixClass } from '../common/base-component';

export interface SwipeProps extends Omit<HTMLAttributes<HTMLElement>, 'onChange'> {
  /** 是否自动轮播 */
  autoplay?: boolean;
  /** 自动轮播间隔 单位为 ms */
  autotiming?: number;
  /** 动画时长，单位为 ms */
  duration?: number;
  /** 初始位置索引值 */
  defaultIndex?: number;
  /** 滑块宽度 */
  width?: number | string;
  /** 滑块高度 */
  height?: number | string;
  /* 轮播内容改变 */
  onChange?: (idx: number, direction?: string) => void;
  /* 是否展示当前数量面板 */
  isTips?: boolean;
  /* 自己定义展示当前第几个 */
  isCustomList?: boolean;
}

let start = 0;

let moveDiff = 0;

let timer = null as NodeJS.Timeout | null;

const Swipe: FC<SwipeProps> = (props: SwipeProps) => {
  const {
    children = [],
    style,
    className,
    autotiming = 3000,
    duration = 300,
    defaultIndex = 0,
    width = '100%',
    height = '100%',
    autoplay = true,
    isTips = true,
    isCustomList,
    onChange,
  } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(defaultIndex);
  const [transition, setTransition] = useState(autoplay);
  const [touchDiff, setTouchDiff] = useState(0);
  const [touch, setTouch] = useState(false);
  const [swipeList, setList] = useState<ReactNode[]>([]);
  const [swipeIndex, setSwipeIndex] = useState(1);
  const [isHalf, setHalf] = useState(false);
  const [directionMove, setDirection] = useState(0);
  const classNames = useClassNames();
  const getPrefixClass = useGetPrefixClass('swipe');
  const swipeClass = useMemo(getPrefixClass, [getPrefixClass]);
  const [targetWidth, setWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const { width: t } = containerRef.current?.getBoundingClientRect();
      setWidth(t);
    }
  }, [containerRef]);

  const childrenView = useMemo(() => {
    if (React.isValidElement(children)) {
      return [children];
    }
    return children as ReactNode[];
  }, [children]);

  useEffect(() => {
    const c = React.isValidElement(children) ? [children] : children as ReactNode[];
    if (c.length === 1) {
      setList(c);
    } else if (c.length > 1) {
      if (isCustomList) {
        setList(c);
      } else {
        setList([
          c[index - 1 < 0 ? c.length - 1 : index - 1],
          c[index],
          c[index + 1 > c.length - 1 ? 0 : index + 1],
        ]);
      }
    }
    setSwipeIndex(1);
  }, [index, children]);

  const onTransitionEnd = useCallback(() => {
    const leftIndex = index + 1 > childrenView.length - 1 ? 0 : index + 1;
    const rightIndex = index - 1 < 0 ? childrenView.length - 1 : index - 1;
    if (autoplay) {
      setIndex(leftIndex);
      setTransition(false);
      onChange && onChange(leftIndex + 1, 'next');
    }
    if (touch && isHalf) {
      setTransition(false);
      setIndex(directionMove > 0 ? rightIndex : leftIndex);
      const idx = directionMove > 0 ? rightIndex : leftIndex;
      onChange && onChange(idx + 1, directionMove > 0 ? 'prev' : 'next');
      setDirection(0);
      setTouch(false);
    }
  }, [isHalf, swipeIndex]);

  const tip = useMemo(() => {
    const childrenLen = childrenView.length;
    const tempIndex = index === childrenLen ? 0 : index;

    return `${tempIndex + 1}/${childrenLen}`;
  }, [index, childrenView]);

  const contentStyle = useMemo(() => {
    const move = childrenView.length === 1 ? '0px' : `calc(-${swipeIndex * 100}% + ${touchDiff}px)`;
    return {
      transition: transition ? `all ${duration / 1000}s ease-in-out` : 'unset',
      transform: `translateX(${move})`,
    };
  }, [transition, swipeIndex, duration, touchDiff]);

  const swipeStyle = useMemo(() => ({
    ...style,
    width,
    height,
  }), [style, width, height]);

  const swipeClassName = useMemo(() => classNames(swipeClass, className),
    [classNames, className, swipeClass]);

  const AutoInterval = () => {
    timer = setInterval(() => {
      setTransition(true);
      setSwipeIndex(2);
    }, autotiming);
  };

  useEffect(() => {
    if (autoplay) {
      AutoInterval();
    }

    return () => {
      timer && clearInterval(timer);
    };
  }, [autotiming]);

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTransition(false);
    setTouch(true);
    setHalf(false);
    const temTouch = e.targetTouches[0];
    start = temTouch.pageX;
    if (autoplay) {
      timer && clearInterval(timer);
    }
  };

  const onTouchMove = useCallback((evt: React.TouchEvent<HTMLDivElement>) => {
    const moveTouch = evt.targetTouches[0];
    const diff = moveTouch.pageX - start;
    if (Math.abs(diff) > targetWidth) {
      const w = diff > 0 ? targetWidth : -targetWidth;
      moveDiff = w;
      setTouchDiff(w);
      setDirection(w);
    } else {
      moveDiff = diff;
      setTouchDiff(diff);
      setDirection(diff);
    }
  }, [start]);

  const onTouchEnd = useCallback(() => {
    setTransition(true);
    setTouchDiff(0);
    const swipeLeft = swipeIndex + 1 > 2 ? 0 : swipeIndex + 1;
    const swipeRight = swipeIndex - 1 < 0 ? 2 : swipeIndex - 1;
    const swx = moveDiff > 0 ? swipeRight : swipeLeft;
    if (Math.abs(moveDiff) >= targetWidth / 2) {
      setHalf(true);
      setSwipeIndex(swx);
    } else {
      setHalf(false);
      setSwipeIndex(1);
    }
    if (autoplay) {
      AutoInterval();
    }
  }, [moveDiff]);

  return (
    <div className={swipeClassName} style={swipeStyle} ref={containerRef}>
      <div
        className={`${swipeClassName}-content`}
        style={contentStyle}
        onTransitionEnd={onTransitionEnd}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {swipeList.map((item: ReactNode, idx: number) => <div key={idx} className={`${swipeClassName}-item`}>{item}</div>)}
      </div>
      {isTips && <div className={`${swipeClassName}-tip`}>{tip}</div>}
    </div>
  );
};

export default memo(Swipe);
