import React from 'react';
import Icon from '../icon';
import { useGetPrefixClass, useClassNames } from '../common/base-component';

export type LevelType = 1 | 2 | 'normal';
export interface NavBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /* class前缀 */
  prefixCls?: string;
  /* 左侧文案  */
  leftText?: string | React.ReactNode;
  /* 右侧文案  */
  rightText?: string | React.ReactNode;
  /* 是否显示左侧箭头 */
  leftArrow?: boolean;
  /* 标题 */
  title?: string;
  /* 点击左侧按钮触发 */
  onLeftClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  /* 点击右侧按钮触发 */
  onRightClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  /* 是否展示后置标题 */
  showBackTitle?: boolean;
  /* 用户头像或者 标题前的图标 */
  icon?: React.ReactNode;
  /* 右侧按钮颜色 */
  rightTextColor?: string;
  home?: boolean;
  /* 标题大小 */
  typeSize?: 'lg' | 'md' | 'sm' | 'xs';
}

const NavBar = (props: NavBarProps) => {
  const {
    prefixCls,
    leftText,
    rightText,
    leftArrow,
    title,
    icon,
    onLeftClick,
    onRightClick,
    rightTextColor,
    showBackTitle,
    home,
    typeSize = 'md',
    ...rest
  } = props;

  const prefix = useGetPrefixClass('navbar', prefixCls);
  const classNames = useClassNames();
  const wrapper = classNames(prefix(), {
    [`${prefix()}-${typeSize}`]: typeSize,
    [`${prefix()}-home`]: home,
  });
  const rightStyle = classNames(`${prefix()}-right`);
  const handleLeft = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    onLeftClick && onLeftClick(e);
  };

  const handleRight = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    onRightClick && onRightClick(e);
  };
  const renderSize = () => {
    if (typeSize === 'lg') {
      return 20;
    }
    if (typeSize === 'md') {
      return 16;
    }
    if (typeSize === 'xs') {
      return 12;
    }
    return 14;
  };

  return (
    <div {...rest} className={wrapper}>
      {home
        ? <div className={`${prefix()}-home-content`} />
        : (
          <>
            {(leftArrow || leftText) && (
            <div className={rightStyle} onClick={handleLeft}>
              {leftArrow && <Icon type="left" style={{ fontSize: 16, paddingRight: 8 }} />}
              {leftText}
            </div>
            )}
            <div
              className={`${prefix()}-title`}
              style={{
                fontSize: renderSize(),
                color: showBackTitle ? '#A6A8A9' : '#1C1D1D',
                fontWeight: showBackTitle ? 400 : 500,
              }}
            >
              {icon && <span style={{ paddingRight: 16 }}>{icon}</span>}
              <div className={`${prefix()}-title-name`}>{title}</div>
            </div>
            <div onClick={handleRight} style={{ color: rightTextColor }}>{rightText}</div>
          </>
        )}
    </div>
  );
};

export default NavBar;
