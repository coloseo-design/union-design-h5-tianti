import React from 'react';
import { useGetPrefixClass } from '../common/base-component';

export interface NavBarProps extends React.HTMLAttributes<HTMLDivElement> {
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
}

const NavBar = () => {
  const wrapper = useGetPrefixClass('navbar');
  const a: any = 1;
  return (
    <div className={wrapper()}>
      xsd
      {a}
    </div>
  );
};

export default NavBar;
