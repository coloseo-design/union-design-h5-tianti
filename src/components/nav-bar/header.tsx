import React, { useContext } from 'react';
import classNames from 'classnames';
import { NavBarProps } from './nav-bar';
import { ConfigContext } from '../config-provider/context';

export type NavHeaderProps = NavBarProps & {icon?: React.ReactNode; };

const NavBarHeader: React.FC<NavHeaderProps> = (props: NavHeaderProps) => {
  const {
    prefixCls, titleStyle, icon, title, rightText, onRightClick, rightTextColor, ...rest
  } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  const prefix = getPrefixCls('navbar', prefixCls);

  return (
    <div {...rest} className={classNames(prefix, `${prefix}-header`)}>
      <div
        className={`${prefix}-header-title`}
        style={titleStyle}
      >
        {icon && <span style={{ marginRight: 8 }}>{icon}</span>}
        <div>{title}</div>
      </div>
      <div onClick={onRightClick} className={`${prefix}-header-right`} style={{ color: rightTextColor }}>{rightText}</div>
    </div>
  );
};

export default NavBarHeader;
