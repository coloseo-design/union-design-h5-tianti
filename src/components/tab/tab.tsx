/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, {
  createContext,
  CSSProperties, memo, ReactNode, useCallback, useContext, useEffect, useMemo, useRef, useState,
} from 'react';
import { useClassNames, useGetPrefixClass } from '../common/base-component';

export type TabProps = {
  /** 整体样式 */
  style?: CSSProperties;
  /** 整体样式 */
  className?: string;

  /** 风格 */
  type?: 'normal' | 'card' | 'label' | 'task';
  defaultSelectedKey?: string;
  selectedKey?: string;
  /** 标签个数 有值是固定标签（值只会限制最大标签个数） 没值是滑动标签 */
  tabNum?: number;
  /** 标签栏样式 */
  tabStyle?: CSSProperties;
  /** 标签栏样式 */
  tabClassName?: string;
  /** 标签被点击的回调 */
  onTabClick?: (key: string) => void;
  /** 标签变化的回调 */
  onTabChange?: (key: string) => void;

  /** 是否显示底部条 */
  line?: boolean;
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

  children: ReactNode;

  _key?: string;
  _index?: number;
};

export type TabType = React.NamedExoticComponent<TabProps>
  & { Item: React.NamedExoticComponent<TabItemProps> };

type TabContextType = {
  selectedKey: string;
  selectedIndex: number;
  setSelectedTab: (key: string, index: number) => void;
};

const TabContext = createContext<Partial<TabContextType>>({});

const Tab = memo<TabProps>((props) => {
  const {
    children,
    type = 'normal',
    line = false,
    tabNum,
    style,
    className,
    tabStyle,
    tabClassName,
    lineStyle,
    lineClassName,
    defaultSelectedKey,
  } = props ?? {};

  const tabRef = useRef<HTMLDivElement>(null);

  const [state, setState] = useState({
    selectedKey: defaultSelectedKey,
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
          content.push(child.props.children);
          return React.cloneElement(child, { _key: key, _index: index });
        }
        return null;
      },
    );

    if (tabNum && tabNum > 0) {
      return [
        tab.slice(0, tabNum),
        content.slice(0, tabNum),
      ];
    }

    return [tab, content];
  }, [children, tabNum]);

  const wrapDivClassName = useMemo(() => classNames(
    getPrefixClass(), className,
  ), [getPrefixClass, classNames, className]);

  const tabDivClassName = useMemo(() => classNames(
    'tab', tabClassName, type, { line, scroll: !tabNum, fixed: !!tabNum },
  ), [classNames, tabClassName, type, line, tabNum]);

  const tabLineDivStyle = useMemo(() => ({
    ...lineStyle,
    ...tabLineStyle,
  }), [tabLineStyle, lineStyle]);

  const tabLineDivClassName = useMemo(() => classNames(
    'line', lineClassName,
  ), [classNames, lineClassName]);

  const tabContextProvider = useMemo(() => ({
    ...state,
    setSelectedTab: (key: string, index: number) => setState((obj) => ({
      ...obj,
      selectedKey: key,
      selectedIndex: index,
    })),
  }), [state]);

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

    if (isScroll && !tabNum) {
      const scrollLeft = selectedDomLeft - (tabDomWidth - selectedDomWidth) / 2;
      if (scrollLeft > 0) tabDom.scrollTo({ left: scrollLeft });
      else tabDom.scrollTo({ left: 0 });
    }

    if (line) {
      const { offsetWidth: tabLineDomWidth } = lineDom ?? {};
      const tabLineLeft = selectedDomLeft + (selectedDomWidth - tabLineDomWidth) / 2;
      setTabLineStyle({
        transition: 'all 0.2s ease-in-out',
        marginLeft: tabLineLeft,
      });
    }
  }, [line, state, tabRef, tabNum]);

  return (
    <TabContext.Provider value={tabContextProvider}>
      <div style={style} className={wrapDivClassName}>
        <div style={tabStyle} ref={tabRef} className={tabDivClassName}>
          <div className="content">{tabView}</div>
          {line && <div style={tabLineDivStyle} className={tabLineDivClassName} />}
        </div>
        <div className="content">
          {contentView}
        </div>
        {!tabNum && <div className="overlay-left" style={{ height: tabRef.current?.offsetHeight }} />}
        {!tabNum && <div className="overlay-right" style={{ height: tabRef.current?.offsetHeight }} />}
      </div>
    </TabContext.Provider>
  );
}) as TabType;

Tab.Item = memo((props) => {
  const { title, _key, _index } = props ?? {};

  const { selectedKey, selectedIndex, setSelectedTab } = useContext(TabContext);

  const classNames = useClassNames();

  const onClick = useCallback(
    () => setSelectedTab!(_key!, _index!),
    [setSelectedTab, _key, _index],
  );

  const wrapClassName = useMemo(
    () => classNames('item', { active: (selectedKey === _key) || (selectedIndex === _index) }),
    [classNames, selectedKey, selectedIndex, _key, _index],
  );

  return (
    <div onClick={onClick} className={wrapClassName}>
      {title}
    </div>
  );
});

Tab.Item.displayName = 'TabItem';

export default Tab;
