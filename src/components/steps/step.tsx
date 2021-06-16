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
  /* 人员头像 */
  src?: string
  /* 人员姓名 */
  text?: string;
  /* 子标题 */
  subTitle?: string | React.ReactNode;
  /* 当前step的索引 */
  currentIndex?: number;
  /* 父级传过来的当前流程 */
  current?: number;
  /*  */
  onChange?: (current: number) => void;
  style?: React.CSSProperties;
  className?: string;
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
      subTitle,
      currentIndex = 0,
      current,
      parentStatus,
      src,
      style,
      className,
      text,
    } = this.props;
    const prex = getPrefixCls('steps-item', prefixCls);
    const wrapper = classNames(prex, className);
    const dotContent = classNames(`${wrapper}-dot-content`);
    const dot = classNames(`${dotContent}-icon`);
    const line = classNames(`${dotContent}-line`);
    const content = classNames(`${wrapper}-content`);
    const statusS = status || (currentIndex === current ? parentStatus : undefined);
    const descriptionStyle = classNames(`${content}-description`, {
      [`${content}-description-${statusS}`]: statusS,
    });

    return (
      <div className={wrapper} style={style} onClick={this.handleClick}>
        <div className={dotContent}>
          {type === 'card' && <div className={dot} />}
          {type === 'browse' && <Avatar text={text || ''} size={40} src={src} type={statusS} />}
          {!isLast && <div className={line} style={{ top: type === 'card' ? '0.75em' : '2.25em' }} />}
        </div>
        {
          type === 'card' && (
            <div className={content} style={{ width: 'calc(100% - 24px)', marginBottom: '16px', position: 'relative' }}>
              <div className={`${content}-cardtitle`}>
                <div>{title}</div>
                {subTitle && <div className={`${content}-title-sub`}>{subTitle}</div>}
              </div>
              <div className={`${content}-card`}>
                <Avatar size={32} text={text || ''} src={src} />
                <span className={`${content}-card-name`}>{description}</span>
              </div>
              {!isLast && <div style={{ borderBottom: '1px solid #EEF0F0', marginTop: '1em', marginBottom: 6 }} />}
            </div>
          )
        }
        {
         type === 'browse' && (
         <div className={content} style={{ width: 'calc(100% - 56px)' }}>
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
