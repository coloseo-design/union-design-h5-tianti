/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react/no-array-index-key */
import React, {
  CSSProperties, memo, ReactNode, useCallback, useMemo, useRef, useState,
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
  const {
    children,
    left,
    right,
    autoClose = true,
    disabled = false,
    onOpen,
    onClose,
  } = props ?? {};

  const leftRef = useRef<HTMLDivElement>(null);

  const rightRef = useRef<HTMLDivElement>(null);

  const { current: store } = useRef({
    timer: null as NodeJS.Timeout | null,
    /** 滑动的距离 */
    diff: 0,
    lastDiff: 0,
    /** 开始滑动时 的 x 坐标 */
    startX: null as number | null,
    /** 滑动的方向 */
    position: null as 'left' | 'right' | null,
    /** 滑动的状态 */
    status: 'close' as 'close' | 'open' | 'needClose' | 'needOpen',
    lastStatus: 'close' as 'close' | 'open' | 'needClose' | 'needOpen',
  });

  const [style, setStyle] = useState({
    leftStyle: {} as CSSProperties,
    rightStyle: {} as CSSProperties,
    contentStyle: {} as CSSProperties,
  });

  const getPrefixClass = useGetPrefixClass('swipe-cell');

  const wrapClassName = useMemo(() => getPrefixClass(), [getPrefixClass]);

  const handleStart = useCallback((num: number) => {
    if (disabled) return;
    store.startX = num;
    store.lastDiff = store.diff;
    store.lastStatus = store.status;
  }, [store, disabled]);

  const handleMove = useCallback((num: number) => {
    if (store.timer) {
      clearTimeout(store.timer);
      store.timer = null;
    }

    if (!store.startX) return;
    let needUpdate = false;
    let diff = num - store.startX + store.lastDiff;

    const tempLeftStyle = { ...style.leftStyle };
    const tempRigthStyle = { ...style.rightStyle };

    if ('transition' in tempLeftStyle) delete tempLeftStyle.transition;
    if ('transition' in tempRigthStyle) delete tempRigthStyle.transition;

    tempLeftStyle.maxWidth ??= leftRef.current?.offsetWidth ?? 0;
    tempRigthStyle.maxWidth ??= rightRef.current?.offsetWidth ?? 0;

    if (diff > 0 && left) {
      store.position = 'right';
      const leftMaxWidth = tempLeftStyle.maxWidth as number;
      diff = diff > leftMaxWidth ? leftMaxWidth : diff;
      tempLeftStyle.width = diff;
      needUpdate = true;
      if (diff / leftMaxWidth > 0.3) store.status = 'needOpen';
      else store.status = 'needClose';
    }

    if (diff < 0 && right) {
      store.position = 'left';
      const rightMaxWidth = tempRigthStyle.maxWidth as number;
      diff = diff < -rightMaxWidth ? -rightMaxWidth : diff;
      tempRigthStyle.width = -diff;
      needUpdate = true;
      if ((-diff) / rightMaxWidth > 0.3) store.status = 'needOpen';
      else store.status = 'needClose';
    }

    if (needUpdate) {
      store.diff = diff;
      setStyle({
        leftStyle: tempLeftStyle,
        rightStyle: tempRigthStyle,
        contentStyle: { transform: `translateX(${store.diff}px)` },
      });
    }
  }, [store, style, left, right]);

  const open = useCallback(() => {
    if (store.status === 'open') return;

    store.startX = null;
    store.status = 'open';

    const tempLeftStyle = { ...style.leftStyle };
    const tempRightStyle = { ...style.rightStyle };
    const tempContentStyle = { ...style.contentStyle };

    if (store.position === 'left') {
      tempRightStyle.width = style.rightStyle.maxWidth;
      tempRightStyle.transition = 'all 0.2s ease-in-out';
      tempLeftStyle.width = 0;
      tempContentStyle.transition = 'all 0.2s ease-in-out';
      tempContentStyle.transform = `translateX(-${tempRightStyle.width}px)`;
      store.diff = tempRightStyle.width as number;
    }

    if (store.position === 'right') {
      tempLeftStyle.width = style.leftStyle.maxWidth;
      tempLeftStyle.transition = 'all 0.2s ease-in-out';
      tempRightStyle.width = 0;
      tempContentStyle.transition = 'all 0.2s ease-in-out';
      tempContentStyle.transform = `translateX(${tempLeftStyle.width}px)`;
      store.diff = tempLeftStyle.width as number;
    }

    setStyle({
      leftStyle: tempLeftStyle,
      rightStyle: tempRightStyle,
      contentStyle: tempContentStyle,
    });

    store.position = null;
    onOpen?.();
  }, [store, style, onOpen]);

  const close = useCallback(() => {
    store.diff = 0;
    store.lastDiff = 0;

    if (store.status === 'close') return;

    store.position = null;
    store.status = 'close';
    store.lastStatus = 'close';

    const tempStyle = { transition: 'all 0.2s ease-in-out' } as CSSProperties;

    setStyle({
      leftStyle: { ...tempStyle, width: 0 },
      rightStyle: { ...tempStyle, width: 0 },
      contentStyle: { ...tempStyle, transform: 'translateX(0px)' },
    });

    store.timer = setTimeout(() => {
      store.timer = null;
      setStyle({
        leftStyle: {},
        rightStyle: {},
        contentStyle: {},
      });
    }, 200);

    onClose?.();
  }, [store, onClose]);

  const handleEnd = useCallback(() => {
    store.startX = null;
    if (store.lastStatus === 'open' && store.status === 'needOpen') close();
    else if (store.status === 'needClose') close();
    else if (store.status === 'needOpen') open();
    else close();
  }, [store, close, open]);

  const itemOnClick = useCallback((cb?: () => void) => {
    cb?.();
    autoClose && close();
  }, [autoClose, close]);

  const onMouseDown: NonNullable<DivEvent['onMouseDown']> = useCallback((event) => handleStart(event.clientX), [handleStart]);

  const onMouseMove: NonNullable<DivEvent['onMouseMove']> = useCallback((event) => handleMove(event.clientX), [handleMove]);

  const onTouchStart: DivEvent['onTouchStart'] = useCallback((event) => {
    const [one] = Object.values(event.touches);
    one && handleStart((one as Touch).clientX);
  }, [handleStart]);

  const onTouchMove: DivEvent['onTouchMove'] = useCallback((event) => {
    const [one] = Object.values(event.touches);
    one && handleMove((one as Touch).clientX);
  }, [handleMove]);

  return (
    <div className={wrapClassName} onMouseLeave={handleEnd}>
      {left && (
        <div style={style.leftStyle} className="left" ref={leftRef}>
          {left.map((item, index) => (
            <div
              className={item.className}
              style={item.style}
              key={index}
              onClick={() => itemOnClick(item.onPress)}
            >
              {item.content}
            </div>
          ))}
        </div>
      )}
      {right && (
        <div style={style.rightStyle} className="right" ref={rightRef}>
          {right.map((item, index) => (
            <div
              className={item.className}
              style={item.style}
              key={index}
              onClick={() => itemOnClick(item.onPress)}
            >
              {item.content}
            </div>
          ))}
        </div>
      )}
      <div
        style={style.contentStyle}
        className="content"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={handleEnd}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={handleEnd}
      // onTransitionEnd={onTransitionEnd}
      >
        {children}
      </div>
    </div>
  );
});

export default SwipeCell;
