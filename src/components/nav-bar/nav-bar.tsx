/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { CSSProperties } from 'react';
import Icon from '../icon';
import { useGetPrefixClass } from '../common/base-component';
import NavBarHeader from './header';

export type LevelType = 1 | 2 | 'normal';
export interface NavBarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /* class前缀 */
  prefixCls?: string;
  /* 左侧文案  */
  leftText?: string | React.ReactNode;
  /* 右侧文案  */
  rightText?: string | React.ReactNode;
  /* 是否显示左侧箭头 */
  leftArrow?: boolean;
  /* 标题 */
  title?: string | React.ReactNode;
  /* 点击左侧按钮触发 */
  onLeftClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  /* 点击右侧按钮触发 */
  onRightClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  /* 右侧按钮颜色 */
  rightTextColor?: string;
  titleStyle?: CSSProperties;
  closeable?: boolean;
}

const NavBar: React.FC<NavBarProps> = (props: NavBarProps) => {
  const {
    prefixCls,
    leftText,
    rightText,
    leftArrow,
    title,
    onLeftClick,
    onRightClick,
    rightTextColor,
    titleStyle = {},
    closeable = true,
    ...rest
  } = props;

  const prefix = useGetPrefixClass('navbar', prefixCls);

  return (
    <div {...rest} className={prefix()}>
      <div className={`${prefix()}-left`} onClick={onLeftClick}>
        {leftArrow && <Icon type="left2-line" className={`${prefix()}-left-icon`} />}
        {leftText}
      </div>
      <div
        className={`${prefix()}-title`}
        style={titleStyle}
      >
        <div className={`${prefix()}-title-name`}>{title}</div>
      </div>
      <div
        onClick={onRightClick}
        className={`${prefix()}-right`}
        style={{ color: rightTextColor }}
      >
        {rightText || (closeable && <Icon type="close2-line" style={{ fontSize: 20 }} />)}
      </div>
    </div>
  );
};

const ComposedNavBar = NavBar as typeof NavBar & {
  Header: typeof NavBarHeader;
};
ComposedNavBar.Header = NavBarHeader;

export default ComposedNavBar;
