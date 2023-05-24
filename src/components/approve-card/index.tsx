import React, { HtmlHTMLAttributes, ReactNode, useContext } from 'react';
import { ConfigContext } from '../config-provider/context';

interface ApproveCardProps extends Omit<HtmlHTMLAttributes<HTMLDivElement>, 'title'> {
  title: string | ReactNode;
  status?: string | ReactNode;
  description?: string | ReactNode;
}
const ApproveCard: React.FC<ApproveCardProps> = (props) => {
  const {
    title, status, description, ...rest
  } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  const prefix = getPrefixCls('approve-card');
  return (
    <div className={prefix} {...rest}>
      <div title={title as string} className={`${prefix}-title`}>{title}</div>
      <div className={`${prefix}-sub`}>
        <div className={`${prefix}-sub-status`}>{status}</div>
        <div className={`${prefix}-sub-description`}>{description}</div>
      </div>
    </div>
  );
};

export default ApproveCard;
