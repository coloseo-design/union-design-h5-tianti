import React, { ReactNode, useContext } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/context';

export interface TitleProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  title: string | ReactNode;
  leftIcon?: string | ReactNode;
  rightIcon?: string | ReactNode;
  size?: 'default' |'md',
}
const Title: React.FC<TitleProps> = (props: TitleProps) => {
  const {
    title, leftIcon, rightIcon, size = 'default', ...rest
  } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  const prefix = getPrefixCls('title');
  return (
    <div
      {...rest}
      className={classNames(prefix, {
        [`${prefix}-${size}`]: size === 'md',
      })}
    >
      <div className={`${prefix}-left`}>
        <div className={`${prefix}-left-icon`}>{leftIcon}</div>
        {title}
      </div>
      {rightIcon}
    </div>
  );
};

export default Title;
