import React, { ReactNode, useContext } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/context';

export interface CellProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  // 小标题
  subtitle?: string | ReactNode;
  // 标题
  title?: string | ReactNode;
  // 内容
  content?: string | ReactNode;
  // 底部内容
  footer?: string | ReactNode;
}

const Cell: React.FC<CellProps> = (props: CellProps) => {
  const {
    subtitle, title, content, footer, className, ...rest
  } = props;

  const { getPrefixCls } = useContext(ConfigContext);
  const prefix = getPrefixCls('cell');
  const mainClass = classNames(prefix, className, {

  });

  return (
    <div {...rest} className={mainClass}>
      {subtitle && <div className={`${prefix}-subtitle`}>{subtitle}</div>}
      {title && <div className={`${prefix}-title`}>{title}</div>}
      {content && <div className={`${prefix}-content`}>{content}</div>}
      {footer && <div className={`${prefix}-footer`}>{footer}</div>}
    </div>
  );
};

export default Cell;
