import React, {
  CSSProperties, useContext, createContext,
  memo, ReactNode, useMemo, useState, useCallback,
} from 'react';
import { useClassNames, useGetPrefixClass } from '../common/base-component';
import Icon from '../icon';

export type TabbarProps = {
  /** tabbar 位置 */
  position?: 'top' | 'bottom';
  /** 样式 */
  style?: CSSProperties;
  /** 样式 */
  className?: string;
  /** 图标对应内容的样式 */
  contentStyle?: CSSProperties;
  /** 图标对应内容的内容样式 */
  contentClassName?: string;
  /** 图标容器样式 */
  itemStyle?: CSSProperties;
  /** 图标容器样式 */
  itemClassName?: string;
  /** 默认选择的Key */
  initKey?: string;

  children?: ReactNode;
};

export type TabbarItemProps = {
  /** 唯一标识 */
  key?: string;
  /** 徽标数 */
  badge?: number | string;
  /** 是否在右上角显示小红点（在设置badge的情况下失效） */
  dot?: boolean;
  /** 默认展示图片 */
  icon?: ReactNode;
  /** 选中后的展示图片 */
  selectedIcon?: ReactNode;
  /** 标题文字 */
  title?: string;
  /** 样式 */
  style?: CSSProperties;
  /** 样式 */
  className?: string;
  /** 标题样式 */
  titleStyle?: CSSProperties;
  /** 标题样式 */
  titleClassName?: string;
  /** 图标样式 */
  iconStyle?: CSSProperties;
  /** 图标样式 */
  iconClassName?: string;
  /** 选中样式 */
  selectedStyle?: CSSProperties;
  /** 选中样式 */
  selectedClassName?: string;
  /** 选中标题样式 */
  selectedTitleStyle?: CSSProperties;
  /** 选中标题样式 */
  selectedTitleClassName?: string;
  /** 选中图标样式 */
  selectedIconStyle?: CSSProperties;
  /** 选中图标样式 */
  selectedIconClassName?: string;

  children?: ReactNode;
  _key?: string;
};

export type TabbarType = React.NamedExoticComponent<TabbarProps>
  & { Item: React.NamedExoticComponent<TabbarItemProps> };

type TabbarContextType = {
  selectedKey: string;
  setSelectedKey: (key: string) => void;
};

const TabbarContext = createContext<Partial<TabbarContextType>>({});

const Tabbar = memo((props) => {
  const {
    children,
    style,
    position = 'bottom',
    className,
    contentStyle,
    contentClassName,
    itemStyle,
    itemClassName,
    initKey,
  } = props ?? {};
  const [selectedKey, setSelectedKey] = useState(initKey ?? '');
  const getPrefixClass = useGetPrefixClass('tabbar');
  const classNames = useClassNames();
  const tabbarClassName = useMemo(() => classNames(
    className,
    getPrefixClass(),
    getPrefixClass(position),
  ), [classNames, getPrefixClass, className, position]);

  const [content, item] = useMemo(() => {
    const contentArr = {} as { [key: string]: ReactNode };
    const itemArr = React.Children.map(
      (children as JSX.Element[]) ?? [],
      (child: JSX.Element, index: number) => {
        if (child?.type?.displayName === 'TabbarItem') {
          const key = child.key ?? `${index}`;
          contentArr[key] = child.props.children;
          return React.cloneElement(child, { _key: key });
        }
        return null;
      },
    );
    return [contentArr, itemArr];
  }, [children]);

  const contentView = useMemo(() => {
    if (!(selectedKey in content)) return Object.values(content)[0];
    return content[selectedKey];
  }, [content, selectedKey]);

  const tabbarContextProvider = useMemo<TabbarContextType>(() => ({
    selectedKey: selectedKey === '' ? Object.keys(content)[0] : selectedKey,
    setSelectedKey,
  }), [setSelectedKey, selectedKey, content]);

  return (
    <TabbarContext.Provider value={tabbarContextProvider}>
      <div style={style} className={tabbarClassName}>
        <div style={contentStyle} className={classNames('uni-tabbar-content', contentClassName)}>
          {contentView}
        </div>
        <div style={itemStyle} className={classNames('item', itemClassName)}>
          {item}
        </div>
      </div>
    </TabbarContext.Provider>
  );
}) as TabbarType;

Tabbar.Item = memo((props) => {
  const {
    title,
    icon,
    dot,
    badge,
    selectedIcon,
    style = {},
    className,
    iconStyle = {},
    iconClassName,
    titleStyle = {},
    titleClassName,
    selectedStyle = {},
    selectedClassName,
    selectedIconStyle = {},
    selectedIconClassName,
    selectedTitleStyle = {},
    selectedTitleClassName,
    _key,
  } = props ?? {};
  const classNames = useClassNames();
  const { setSelectedKey, selectedKey } = useContext(TabbarContext);

  const onClick = useCallback(() => setSelectedKey?.(_key ?? '-1'), [setSelectedKey, _key]);

  const iconView = useMemo(() => {
    const tempIcon = _key === selectedKey ? (selectedIcon ?? icon) : icon;
    if (React.isValidElement(tempIcon)) return tempIcon;
    if (typeof tempIcon === 'string') {
      return (
        <Icon
          type={tempIcon}
        />
      );
    }
    return <div />;
  }, [_key, icon, selectedKey, selectedIcon]);

  const itemWrapStyle = useMemo(
    () => ({ ...style, ..._key === selectedKey && selectedStyle }),
    [style, selectedStyle, selectedKey, _key],
  );

  const itemIconStyle = useMemo(
    () => ({ ...iconStyle, ..._key === selectedKey && selectedIconStyle }),
    [iconStyle, selectedIconStyle, selectedKey, _key],
  );

  const itemTitleStyle = useMemo(
    () => ({ ...titleStyle, ..._key === selectedKey && selectedTitleStyle }),
    [titleStyle, selectedTitleStyle, selectedKey, _key],
  );

  const itemWrapClassName = useMemo(
    () => classNames('item-wrap', className, { [`${selectedClassName}`]: _key === selectedKey }),
    [classNames, className, selectedClassName, selectedKey, _key],
  );

  const itemIconClassName = useMemo(
    () => classNames(
      'icon',
      iconClassName, {
        'tabbar-select-icon': _key === selectedKey,
        [`${selectedIconClassName}`]: _key === selectedKey,
      },
    ),
    [classNames, iconClassName, selectedIconClassName, selectedKey, _key],
  );

  const itemTitleClassName = useMemo(
    () => classNames(
      'title',
      titleClassName, {
        'tabbar-select-title': _key === selectedKey,
        [`${selectedTitleClassName}`]: _key === selectedKey,
      },
    ),
    [classNames, titleClassName, selectedTitleClassName, selectedKey, _key],
  );

  return (
    <div
      style={itemWrapStyle}
      className={itemWrapClassName}
      onClick={onClick}
    >
      <div style={itemIconStyle} className={itemIconClassName}>
        {iconView}
        {dot && !badge && <div className="dot" />}
        {!!badge && <div className="badge">{badge}</div>}
      </div>
      <div style={itemTitleStyle} className={itemTitleClassName}>
        {title}
      </div>
    </div>
  );
});

Tabbar.Item.displayName = 'TabbarItem';

export default Tabbar;
