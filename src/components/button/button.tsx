import React, { useContext, useEffect, useState } from 'react';
import omit from 'omit.js';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/context';
import Icon from '../icon';
import { AnchorButtonProps, ButtonProps, NativeButtonProps } from './type';

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { getPrefixCls } = useContext(ConfigContext);
  const ButtonSizeMap = {
    large: 'lg',
    small: 'sm',
    default: '',
  } as any;
  const {
    children,
    size = 'default',
    className, // 自定义的className
    type,
    shape,
    icon,
    block = false,
    ghost,
    prefixCls: customizedPrefixCls,
    forwardedRef,
    onClick: onClickFromProps,
    loading: loadingFromProps = false,
    ...rest
  } = props;
  let sizeCls = '';
  if (size) {
    sizeCls = ButtonSizeMap[size];
  }
  const [loading, setLoading] = useState(loadingFromProps);
  const prefixCls = getPrefixCls('btn', customizedPrefixCls);

  const onClick: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement> = (e) => {
    if (loading) return;
    if (onClickFromProps) {
      (onClickFromProps as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)(e);
    }
  };

  useEffect(() => {
    setLoading(loadingFromProps);
  }, [loadingFromProps]);

  const classes: string = classNames(prefixCls, className, {
    [`${prefixCls}-${sizeCls}`]: sizeCls,
    [`${prefixCls}-${type}`]: type,
    [`${prefixCls}-${shape}`]: shape,
    [`${prefixCls}-loading`]: !!loading,
    [`${prefixCls}-background-ghost`]: ghost,
    [`${prefixCls}-block`]: block,
  });
  const iconName = loading ? 'loading-circle' : icon;
  const iconElement = iconName ? <Icon type={iconName} /> : undefined;
  const linkButtonRestProps = omit(rest, ['htmlType']) as AnchorButtonProps;
  // link-like button
  if (typeof linkButtonRestProps.href !== 'undefined') {
    return (
      <a
        {...linkButtonRestProps}
        className={classes}
        href={linkButtonRestProps.href}
        onClick={onClick}
        ref={forwardedRef as React.ForwardedRef<HTMLAnchorElement>}
      >
        {iconElement}
        <span>{children}</span>
      </a>
    );
  }
  // TODO: htmlType属性将来用于form中进行劫持
  const { htmlType = 'button', ...otherProps } = rest as NativeButtonProps;
  // loading作用于图标
  /* eslint react/button-has-type: 0 */
  return (
    <button
      {...(otherProps)}
      type={htmlType}
      className={classes}
      onClick={onClick}
      ref={forwardedRef as React.ForwardedRef<HTMLButtonElement>}
    >
      {iconElement}
      <span>{children}</span>
    </button>
  );
};

export default Button;
