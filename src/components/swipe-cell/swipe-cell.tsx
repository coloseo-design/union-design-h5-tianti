import React, {
  CSSProperties, memo, ReactNode, useCallback, useEffect, useMemo, useRef, useState,
} from 'react';
import { DivEvent, useGetPrefixClass } from '../common/base-component';

export type SwipeCellButton = {
  /** 按钮 */
  content?: ReactNode;
  /** 样式 */
  style?: CSSProperties;
  /** 样式 */
  className?: string;
  /** 点击事件 */
  onPress?: () => void;
};

export type SwipeCellProps = {
  /** 左侧按钮组 */
  left?: SwipeCellButton[];
  /** 右侧按钮组 */
  right?: SwipeCellButton[];
  /** 点击按钮后自动隐藏按钮 */
  autoClose?: boolean;
  /** 禁用 */
  disabled?: boolean;
  /** 打开时回调函数 */
  onOpen?: () => void;
  /** 关闭时回调函数 */
  onClose?: () => void;

  children?: ReactNode;
};

const SwipeCell = memo<SwipeCellProps>((props) => {
  const { children, left, right } = props ?? {};
  const swipeRef = useRef<HTMLDivElement>(null);
  const { current: store } = useRef({
    startX: null as number | null,
    position: null as 'left' | 'right' | null,
  });
  const [contentStyle, setContentStyle] = useState({
    transition: 'all 0.2s ease-in-out',
    transform: 'translateX(0px)',
  });
  const getPrefixClass = useGetPrefixClass('swipe-cell');

  const wrapClassName = useMemo(() => getPrefixClass(), [getPrefixClass]);

  const handleStart = useCallback((num: number) => { store.startX = num; }, [store]);
  const handleEnd = useCallback(() => { store.startX = null; }, [store]);
  const handleMove = useCallback((num: number) => {
    if (!store.startX) return;
    const diff = num - store.startX;
    if (diff < 0 && left) {
      store.position = 'left';
      setContentStyle({
        // transition: 'all 0.2s ease-in-out',
        transition: 'unset',
        transform: `translateX(${diff}px)`,
      });
      return;
    }
    if (diff > 0 && right) {
      store.position = 'right';
      setContentStyle({
        transition: 'all 0.2s ease-in-out',
        transform: `translateX(${diff}px)`,
      });
    }
  }, [store, left, right]);

  const onMouseDown: NonNullable<DivEvent['onMouseDown']> = useCallback((event) => handleStart(event.clientX), [handleStart]);
  const onMouseMove: NonNullable<DivEvent['onMouseMove']> = useCallback((event) => handleMove(event.clientX), [handleMove]);

  const onTouchStart: DivEvent['onTouchStart'] = useCallback((event) => {
    const [one] = Object.values(event.touches);
    if (one) {
      console.log(one);
    }
  }, []);
  const onTouchMove: DivEvent['onTouchMove'] = useCallback((event) => {
    const [one] = Object.values(event.touches);
    if (one) {
      console.log(one);
    }
  }, []);

  const swipeView = useMemo(() => {
    if (store.position === 'left') {
      return <>1</>;
    }
    if (store.position === 'right') {
      return <>2</>;
    }
    return <></>;
  }, [store, left, right]);

  return (
    <div className={wrapClassName}>
      <div
        style={{}}
        ref={swipeRef}
        className="swipe"
      >
        {swipeView}
      </div>
      <div
        style={contentStyle}
        className="content"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={handleEnd}
      >
        {children}
      </div>
    </div>
  );
});

export default SwipeCell;
