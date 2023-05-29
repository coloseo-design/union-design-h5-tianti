import React, {
  HtmlHTMLAttributes, ReactNode, useContext, isValidElement,
} from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/context';

interface ApproveCardProps extends Omit<HtmlHTMLAttributes<HTMLDivElement>, 'title'> {
  title: string | ReactNode;
  status?: 'progress' | 'rejected' | 'success' | ReactNode;
  description?: string | ReactNode;
}
const ApproveCard: React.FC<ApproveCardProps> = (props) => {
  const {
    title, status, description, ...rest
  } = props;
  const statusMap: {[x: string]: string} = {
    progress: '进行中',
    rejected: '已拒绝',
    success: '已通过',
  };
  const { getPrefixCls } = useContext(ConfigContext);
  const prefix = getPrefixCls('approve-card');
  return (
    <div className={prefix} {...rest}>
      <div title={title as string} className={`${prefix}-title`}>{title}</div>
      <div className={`${prefix}-sub`}>
        {isValidElement(status) ? status : (
          <div className={classNames(`${prefix}-sub-status`, {
            [`${prefix}-sub-${status}`]: status,
          })}
          >
            {statusMap[status as string]}
          </div>
        )}
        <div className={`${prefix}-sub-description`}>{description}</div>
      </div>
    </div>
  );
};

export default ApproveCard;
