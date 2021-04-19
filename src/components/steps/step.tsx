import React from 'react';
import classNames from 'classnames';
import Avatar from '../avatar';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider/context';

export type StatusT = 'success' | 'error' | 'info' | undefined;
export interface StepProps {
  prefixCls?: string;
  /* 标题 */
  title?: string | React.ReactNode;
  /* steps传过来的status */
  parentStatus?: StatusT
  /* 流程状态 可以覆盖父级的status */
  status?: StatusT;
  /* 详情描述 */
  description?: string | React.ReactNode;
  type?: 'card' | 'browse';
  isLast?: boolean;
  /* 姓名或者人员头像链接 */
  nameSrc?: string;
  /* 子标题 */
  subTitle?: string | React.ReactNode;
  /* 当前step的索引 */
  currentIndex?: number;
  /* 父级传过来的当前流程 */
  current?: number;
  /*  */
  onChange?: (current: number) => void;
}

class Step extends React.Component<StepProps> {
  handleClick = () => {
    const { onChange, currentIndex } = this.props;
    onChange && onChange(currentIndex || 0);
  };

  renderStep = ({ getPrefixCls }: ConfigConsumerProps) => {
    const {
      prefixCls,
      type = 'card',
      isLast,
      status,
      title,
      description,
      nameSrc,
      subTitle,
      currentIndex = 0,
      current,
      parentStatus,
    } = this.props;
    const prex = getPrefixCls('steps-item', prefixCls);

    const dotContent = classNames(`${prex}-dot-content`);
    const dot = classNames(`${dotContent}-icon`);
    const line = classNames(`${dotContent}-line`);
    const content = classNames(`${prex}-content`);
    const statusS = status || (currentIndex === current ? parentStatus : undefined);
    const descriptionStyle = classNames(`${content}-description`, {
      [`${content}-description-${statusS}`]: statusS,
    });

    return (
      <div className={prex} onClick={this.handleClick}>
        <div className={dotContent}>
          {type === 'card' && <div className={dot} />}
          {type === 'browse' && <Avatar size={32} type={statusS}>{nameSrc}</Avatar>}
          {!isLast && <div className={line} style={{ top: type === 'card' ? 12 : 36 }} />}
        </div>
        {
          type === 'card' && (
            <div className={content} style={{ marginBottom: 32, position: 'relative' }}>
              <div className={`${content}-cardtitle`}>
                <div>{title}</div>
                <div className={`${content}-title-sub`}>{subTitle}</div>
              </div>
              <div className={`${content}-card`}>
                <Avatar size={32}>{nameSrc}</Avatar>
                <span className={`${content}-card-name`}>{nameSrc}</span>
              </div>
              {!isLast && <div style={{ borderBottom: '1px solid #EEF0F0', marginTop: 16 }} />}
            </div>
          )
        }
        {
         type === 'browse' && (
         <div className={content}>
           <div className={`${content}-title`}>
             <div>{title}</div>
             <div className={`${content}-title-sub`}>{subTitle}</div>
           </div>
           {type === 'browse' && (
           <div className={descriptionStyle}>
             {description}
           </div>
           )}
         </div>
         )
       }
      </div>
    );
  }

  render() {
    return (
      <ConfigConsumer>
        {this.renderStep}
      </ConfigConsumer>
    );
  }
}

export default Step;
