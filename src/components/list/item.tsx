/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import classNames from 'classnames';
import Icon from '../icon';
import { useGetPrefixClass } from '../common/base-component';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider';

const ListItemContext = React.createContext<{
  itemLayout?: 'vertical' | 'horizontal';
  icon?: React.ReactNode;
  extra?: React.ReactNode;
  arrow?: 'arrow' | React.ReactNode;
  onIconClick?:(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
    }>({});

export interface ListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  prefixCls?: string;
  renderedEl?: any;
  itemLayout?: 'vertical' | 'horizontal';
  icon?: React.ReactNode;
  extra?: React.ReactNode;
  arrow?: 'arrow' | React.ReactNode;
  /* 点击右侧箭头事件 */
  onIconClick?: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number,
  src?: string,
  text?: string,
  shape?: 'circle' | 'square',
  style?: React.CSSProperties;
  children?: any;
}

class ListItem extends React.Component<ListItemProps> {
  static Content: (props: React.HTMLAttributes<HTMLDivElement>) => JSX.Element;

  static Title: (props: React.HTMLAttributes<HTMLDivElement>) => JSX.Element;

  static Avatar: (props: AvatarProps) => JSX.Element;

  static SubTitle: (props: React.HTMLAttributes<HTMLDivElement>) => JSX.Element;

  static CheckType: (props: React.HTMLAttributes<HTMLDivElement>) => JSX.Element;

  renderListItem = ({ getPrefixCls }: ConfigConsumerProps) => {
    const {
      prefixCls,
      children,
      itemLayout,
      icon,
      extra,
      arrow,
      className,
      onIconClick,
      ...rest
    } = this.props;
    const prefix = getPrefixCls('list-item', prefixCls);
    const itemStyle = classNames(prefix, className);
    return (
      <div {...rest} className={itemStyle}>
        <ListItemContext.Provider
          value={{
            icon,
            itemLayout,
            extra,
            arrow,
            onIconClick,
          }}
        >
          {children}
        </ListItemContext.Provider>
      </div>
    );
  };

  render() {
    return (
      <ConfigConsumer>
        {this.renderListItem}
      </ConfigConsumer>
    );
  }
}
const CheckType = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const { children, className, ...rest } = props;
  const getPrefixClass = useGetPrefixClass('list-item-check');
  return (
    <div {...rest} className={classNames(getPrefixClass(), className)}>{children}</div>
  );
};

const Avatar = (props: AvatarProps) => {
  const {
    style, size, text, src, children,
    shape = 'circle',
    className,
    ...rest
  } = props;
  const width = size || 32;
  const height = size || 32;
  const getPrefixClass = useGetPrefixClass('list-item-avatar');
  const fontSize = width <= 20 ? 12 : Math.ceil(width / 2.56);
  const avaStyle = {
    ...style,
    width,
    height,
    lineHeight: `${height}px`,
    borderRadius: shape === 'circle' ? '50%' : '8px',
    fontSize,
  };
  if (text) {
    Object.assign(avaStyle, {
      backgroundImage: 'linear-gradient(135deg, #FF3958 0%, #F31D39 100%)',
    });
  }
  return (
    <span
      {...rest}
      className={classNames(getPrefixClass(), className)}
      style={avaStyle}
    >
      {src ? (
        <img src={src} alt="avatar" />
      ) : (text || children)}
    </span>
  );
};

const Title = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const { children, className, ...rest } = props;
  const getPrefixClass = useGetPrefixClass('list-item-content-title');
  return (
    <div {...rest} className={classNames(getPrefixClass(), className)}>{children}</div>
  );
};

const SubTitle = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const { children, className, ...rest } = props;
  const getPrefixClass = useGetPrefixClass('list-item-content-subtitle');
  return (
    <div {...rest} className={classNames(getPrefixClass(), className)}>{children}</div>
  );
};

const Content = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const {
    children,
    className,
    ...rest
  } = props;
  const {
    itemLayout, extra, onIconClick, arrow,
  } = React.useContext(ListItemContext);
  const getPrefixClass = useGetPrefixClass('list-item-content');
  const contentStyle = {
    flex: 1,
    width: 0,
  };
  if (itemLayout === 'horizontal') {
    Object.assign(contentStyle, {
      display: 'flex',
      justifyContent: 'space-between',
    });
  }
  const handleClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    onIconClick && onIconClick(e);
  };

  return (
    <div
      {...rest}
      className={classNames(getPrefixClass(), className)}
    >
      <div style={contentStyle}>
        <div>{children}</div>
        {extra}
      </div>
      {arrow
      && (
      <>
        {arrow === 'arrow' ? <Icon type="right2-line" onClick={handleClick} style={{ fontSize: '16px', color: '#646566' }} /> : arrow}
      </>
      )}
    </div>
  );
};

ListItem.Avatar = Avatar;
ListItem.Content = Content;
ListItem.Title = Title;
ListItem.SubTitle = SubTitle;
ListItem.CheckType = CheckType;

export default ListItem;
