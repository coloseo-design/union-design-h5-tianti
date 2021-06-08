import classNames from 'classnames';
import React, { useContext } from 'react';
import { ConfigContext } from '../config-provider/context';
import { BaseColProps, ColProps } from './type';
import { GridContext, breakpoints } from './utils';
import { Breakpoint, BreakPointMap } from './utils/grid-media-query';

const Col: React.FC<ColProps> = (props: ColProps) => {
  const {
    children,
    span,
    order,
    offset,
    className,
    style: customStyle,
    ...rest
  } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  const prefix = getPrefixCls('col');
  const { gutter } = useContext(GridContext);
  // TODO: 处理断点的值
  const breakpointCls = breakpoints.reduce((composd, size: Breakpoint) => {
    const valueOfSize = (rest as BreakPointMap)[size];
    const sizeProps: Partial<BaseColProps> = {};
    if (typeof valueOfSize === 'number') {
      Object.assign(sizeProps, {
        span: valueOfSize,
      });
    }
    if (typeof valueOfSize === 'object') {
      Object.assign(sizeProps, valueOfSize);
    }
    Object.assign(composd, {
      [`${prefix}-${size}-${sizeProps.span}`]: !!sizeProps.span,
      [`${prefix}-${size}-offset-${sizeProps.offset}`]: !!sizeProps.offset,
      [`${prefix}-${size}-order-${sizeProps.order}`]: !!sizeProps.order,
    });
    delete (rest as any)[size];
    return composd;
  }, {});
  const colClassName = classNames(prefix, {
    [`${prefix}-${span}`]: span,
    [`${prefix}-order-${order}`]: order,
    [`${prefix}-offset-${offset}`]: offset,
  }, className, breakpointCls);
  const horizontalGap = gutter[0] / 2;
  const verticalGap = gutter[1] / 2;
  const style = {
    ...customStyle,
    ...(horizontalGap > 0 ? {
      paddingLeft: horizontalGap,
      paddingRight: horizontalGap,
    } : {}),
    ...(verticalGap > 0 ? {
      paddingTop: verticalGap,
      paddingBottom: verticalGap,
    } : {}),
  };
  return (<div {...rest} className={colClassName} style={style}>{children}</div>);
};

export default Col;
