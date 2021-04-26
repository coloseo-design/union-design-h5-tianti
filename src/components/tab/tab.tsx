/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, {
  createContext,
  CSSProperties, memo, ReactNode, useCallback, useContext, useEffect, useMemo, useRef, useState,
} from 'react';
import Icon from '../icon';
import { useClassNames, useGetPrefixClass } from '../common/base-component';

export type TabProps = {
  /** 整体样式 */
  style?: CSSProperties;
  /** 整体样式 */
  className?: string;

  /** 模式 */
  mode?: 'scroll' | 'fixed';
  /** 风格 */
  type?: 'normal' | 'card' | 'label' | 'task';
  /** 处始选择哪个 */
  defaultSelectedKey?: string;
  /** 双向绑定选择哪个 */
  selectedKey?: string;
  /** 标签个数 有值是固定标签（值只会限制最大标签个数） 没值是滑动标签 */
  tabNum?: number;
  /** 标签栏样式 */
  tabStyle?: CSSProperties;
  /** 标签栏样式 */
  tabClassName?: string;
  /** 标签变化的回调 */
  onTabChange?: (key: string, index: number) => void;

  /** 底部条样式 */
  lineStyle?: CSSProperties;
  /** 底部条样式 */
  lineClassName?: string;

  children: ReactNode;
};

export type TabItemProps = {
  /** 唯一标识 */
  key?: string;
  /** 标题 */
  title?: string;
  /** 标题最大长度 */
  titleNum?: number;
  /** TabProps type为task 时候的数字 */
  taskNum?: number;
  /** TabProps type为task 时候的数字颜色 不重要内容：1 重要内容：2 */
  taskWeight?: 1 | 2;
  /** 右上角红点 */
  dot?: boolean;

  children: ReactNode;

  _key?: string;
  _index?: number;
};

export type TabConfigItem = {
  /** mode:fixed 标签个数 */
  tabNum?: number | null,
  /** 标签文字长度 */
  textNum?: number | null | Array<number | null>,
};

export type TabType = React.NamedExoticComponent<TabProps>
  & { Item: React.NamedExoticComponent<TabItemProps> }
  & {
    Config: {
      normal?: TabConfigItem,
      card?: TabConfigItem,
      label?: TabConfigItem,
      task?: TabConfigItem,
    }
  };

type TabContextType = {
  type: 'normal' | 'card' | 'label' | 'task';
  curTabNum: number;
  selectedKey: string;
  selectedIndex: number;
  setSelectedTab: (key: string, index: number) => void;
};

const TabContext = createContext<Partial<TabContextType>>({});

const Tab = memo<TabProps>((props) => {
  const {
    children,
    mode = 'scroll',
    type = 'normal',
    tabNum,
    style,
    className,
    tabStyle,
    tabClassName,
    lineStyle,
    lineClassName,
    selectedKey,
    defaultSelectedKey,
    onTabChange,
  } = props ?? {};

  const tabRef = useRef<HTMLDivElement>(null);

  const [state, setState] = useState({
    mode: 'scroll' as 'scroll' | 'fixed',
    line: false,
    curTabNum: 0,
    selectedKey: defaultSelectedKey ?? selectedKey,
    selectedIndex: 0,
  });

  const [tabLineStyle, setTabLineStyle] = useState({} as CSSProperties);

  const getPrefixClass = useGetPrefixClass('tab');

  const classNames = useClassNames();

  const [tabView, contentView] = useMemo(() => {
    const content = [] as JSX.Element[];

    const tab = React.Children.map(
      (children as JSX.Element[]) ?? [],
      (child: JSX.Element, index: number) => {
        if (child?.type?.displayName === 'TabItem') {
          const key = child.key ?? `${index}`;
          content.push(child.props.children ?? <div />);
          return React.cloneElement(child, { _key: key, _index: index });
        }
        return null;
      },
    );

    if (state.mode === 'fixed') {
      const len = tabNum ?? Tab.Config[type]?.tabNum ?? tab.length;
      return [
        tab.slice(0, len),
        content.slice(0, len),
      ];
    }

    return [tab, content];
  }, [children, state.mode, type, tabNum]);

  const wrapDivClassName = useMemo(() => classNames(
    getPrefixClass(), className,
  ), [getPrefixClass, classNames, className]);

  const tabDivClassName = useMemo(() => classNames(
    'tab', tabClassName, type,
    {
      line: state.line,
      scroll: state.mode === 'scroll',
      fixed: state.mode === 'fixed',
    },
  ), [classNames, tabClassName, type, state.line, state.mode]);

  const tabLineDivStyle = useMemo(() => ({
    ...lineStyle,
    ...tabLineStyle,
  }), [tabLineStyle, lineStyle]);

  const tabLineDivClassName = useMemo(() => classNames(
    'line', lineClassName,
  ), [classNames, lineClassName]);

  const tabContextProvider = useMemo(() => ({
    ...state,
    type,
    setSelectedTab: (key: string, index: number) => setState((obj) => ({
      ...obj,
      selectedKey: key,
      selectedIndex: index,
    })),
  }), [state, type]);

  /**
   * 处理 tab 滚动
   * 屏幕:|---------f---------|
   * 内容:|---------f-----------f---------|
   * 可滚动长度 = 内容 - 屏幕
   */
  useEffect(() => {
    const tabDom = tabRef.current;
    if (!tabDom) return;
    const {
      offsetWidth: tabDomWidth,
      scrollWidth: tabDomScrollWidth,
    } = tabDom;
    const isScroll = tabDomScrollWidth - tabDomWidth > 0;

    const [contentDom, lineDom] = (tabDom.children ?? []) as unknown as HTMLDivElement[];
    if (!contentDom) return;

    const { selectedIndex } = state;
    const selectedDom = contentDom.children[selectedIndex] as HTMLDivElement;
    if (!selectedDom) return;
    const {
      offsetLeft: selectedDomLeft,
      offsetWidth: selectedDomWidth,
    } = selectedDom;

    if (isScroll && state.mode === 'scroll') {
      const scrollLeft = selectedDomLeft - (tabDomWidth - selectedDomWidth) / 2;
      if (scrollLeft > 0) tabDom.scrollTo({ left: scrollLeft });
      else tabDom.scrollTo({ left: 0 });
    }

    if (state.line) {
      const { offsetWidth: tabLineDomWidth } = lineDom ?? {};
      const tabLineLeft = selectedDomLeft + (selectedDomWidth - tabLineDomWidth) / 2;
      setTabLineStyle({
        transition: 'all 0.2s ease-in-out',
        marginLeft: tabLineLeft,
      });
    }
  }, [state.line, state, tabRef, state.mode]);

  useEffect(() => {
    const temp = {
      mode,
      curTabNum: tabView.length,
    } as typeof state;

    if (['normal', 'task'].includes(type)) {
      temp.line = true;
    }

    if (['card', 'task'].includes(type)) {
      temp.mode = 'fixed';
    }

    if (Object.values(temp).length > 0) {
      setState((obj) => ({ ...obj, ...temp }));
    }
  }, [type, mode, tabView]);

  useEffect(
    () => { state.selectedKey && onTabChange?.(state.selectedKey, state.selectedIndex); },
    [onTabChange, state.selectedKey, state.selectedIndex],
  );

  useEffect(() => {
    let index = -1;
    const len = tabView.length;
    for (let i = 0; i < len; i += 1) {
      // eslint-disable-next-line no-underscore-dangle
      if (tabView[i].props._key === selectedKey) {
        index = i;
        break;
      }
    }

    if (index > -1) {
      setState((obj) => ({
        ...obj,
        selectedKey,
        selectedIndex: index,
      }));
    }
  }, [selectedKey, tabView]);

  return (
    <TabContext.Provider value={tabContextProvider}>
      <div style={style} className={wrapDivClassName}>
        <div style={tabStyle} ref={tabRef} className={tabDivClassName}>
          <div className="content">{tabView}</div>
          {state.line && <div style={tabLineDivStyle} className={tabLineDivClassName} />}
        </div>
        <div className="content">
          {contentView[state.selectedIndex]}
        </div>
        {state.mode === 'scroll' && (
          <>
            <div className="overlay-left" style={{ height: tabRef.current?.offsetHeight }} />
            <div className="overlay-right" style={{ height: tabRef.current?.offsetHeight }} />
          </>
        )}
      </div>
    </TabContext.Provider>
  );
}) as TabType;

Tab.Item = memo((props) => {
  const {
    title = '',
    titleNum,
    taskNum = 0,
    taskWeight = 1,
    dot = false,
    _key,
    _index,
  } = props ?? {};

  const {
    type,
    curTabNum,
    selectedKey,
    selectedIndex,
    setSelectedTab,
  } = useContext(TabContext);

  const classNames = useClassNames();

  const onClick = useCallback(
    () => setSelectedTab!(_key!, _index!),
    [setSelectedTab, _key, _index],
  );

  const wrapClassName = useMemo(
    () => classNames('item', {
      active: (selectedKey === _key) || (selectedIndex === _index),
      ...type === 'task' && { [`weight${taskWeight}`]: true },
    }),
    [classNames, taskWeight, type, selectedKey, selectedIndex, _key, _index],
  );

  const [num, numOverflow] = useMemo(() => {
    if (taskNum > 99) return [99, true];
    return [taskNum, false];
  }, [taskNum]);

  const text = useMemo(() => {
    const tempLen = titleNum ?? Tab.Config[type!]?.textNum;

    if (tempLen) {
      if (typeof tempLen === 'number') {
        return title.slice(0, tempLen);
      }

      if (Array.isArray(tempLen)) {
        const len = tempLen[curTabNum! - 1] ?? title.length;
        return title.slice(0, len);
      }
    }

    return title;
  }, [title, titleNum, type, curTabNum]);

  if (type === 'task') {
    return (
      <div onClick={onClick} className={wrapClassName}>
        <div className="num">
          {num}
          {numOverflow && (
            <span className="overflow">
              <Icon type="add" />
            </span>
          )}
        </div>
        <div className="title">{text}</div>
      </div>
    );
  }

  return (
    <div onClick={onClick} className={wrapClassName}>
      {text}
      {dot && <div className="dot" />}
    </div>
  );
});

Tab.Item.displayName = 'TabItem';

Tab.Config = {
  normal: {
    tabNum: 4,
    textNum: 4,
  },
  card: {
    tabNum: 4,
    textNum: [null, 9, 6, 4],
  },
  label: {
    tabNum: 4,
    textNum: 5,
  },
  task: {
    tabNum: 4,
    textNum: 5,
  },
};

export default Tab;
