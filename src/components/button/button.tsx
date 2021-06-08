import React, { useContext, useEffect, useState } from 'react';
import omit from 'omit.js';
import classNames from 'classnames';
import { ConfigConsumerProps, ConfigContext } from '../config-provider/context';
import Icon from '../icon';
import { tuple, Omit } from '../utils/type';

/**
 * button样式是基于以下一些状态的组合：
 * 5种基础按钮：默认按钮, 主按钮， 虚线按钮，文本按钮，链接按钮
 * 4种状态按钮：危险，幽灵，加载，禁用
 * 3种尺寸：默认，大号, 小号
 * 2种形状: circle, round
 */
const ButtonTypes = tuple('default', 'primary', 'ghost', 'link');
const ButtonShapes = tuple('circle', 'round');
const ButtonSizes = tuple('default', 'large', 'small');
const ButtonHTMLTypes = tuple('submit', 'button', 'reset');
const ButtonTargets = tuple('_blank', '_parent', '_self', '_top');

export type ButtonType = (typeof ButtonTypes)[number];
export type ButtonShape = (typeof ButtonShapes)[number];
export type ButtonSize = (typeof ButtonSizes)[number];
export type ButtonHTMLType = (typeof ButtonHTMLTypes)[number];
export type ButtonTargetType = (typeof ButtonTargets)[number];

export interface BaseButtonProps {
  type?: ButtonType;
  /* 按钮的name属性，用于显示在按钮文本前 */
  icon?: string;
  /* 按钮形状 */
  shape?: ButtonShape;
  /* 按钮尺寸 */
  size?: ButtonSize;
  /* 加载中 */
  loading?: boolean;
  /* 用户自定义类前缀，默认uni-btn */
  prefixCls?: string;
  /* 用户自定义类 */
  className?: string;
  /* 是否为幽灵按钮 */
  ghost?: boolean;
  /* 是否占满父级元素 */
  block?: boolean;
  children?: React.ReactNode;
  forwardedRef: React.ForwardedRef<HTMLAnchorElement | HTMLButtonElement>;
}

/**
 * 链接按钮属性，当type='link', 用button模拟出a标签
 * 忽略掉mine类型约束属性type, 此属性仅当设置href才有效
 */
export type AnchorButtonProps = {
  /* 跳转链接 */
  href: string;
  /* 类似于a标签的target */
  target?: ButtonTargetType;
  /* 单击行为 */
  onClick?: React.MouseEventHandler<HTMLElement>;
} & Omit<React.AnchorHTMLAttributes<unknown>, 'type' | 'onClick'>;

/**
 * form中的原始button按钮角色
 * 当设置htmlType属性生效
 */
export type NativeButtonProps = {
  htmlType: ButtonHTMLType;
  onClick: React.MouseEventHandler<HTMLElement>;
} & Omit<React.ButtonHTMLAttributes<unknown>, 'type' | 'onClick'>;

export type ButtonProps = Partial<
  BaseButtonProps & AnchorButtonProps & NativeButtonProps & ConfigConsumerProps
>;

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { getPrefixCls } = useContext(ConfigContext);
  const ButtonSizeMap = {
    large: 'lg',
    small: 'sm',
    default: '',
  };
  const {
    children,
    size,
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
  const iconElement = iconName ? <Icon type={iconName} spin={iconName === 'loading-circle'} /> : undefined;
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
