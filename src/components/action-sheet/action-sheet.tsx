/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import { useGetPrefixClass, useClassNames } from '../common/base-component';
import Divider from '../divider';

export type Option = {
  name?: string;
  src?: string | React.ReactNode;
}
export interface ActionSheetProps {
  /* class前缀 */
  prefixCls?: string;
  /* options */
  options?: Option[];
  /* 顶部标题 */
  title?: string;
  /* 取消按钮文字 */
  cancelText?: string | React.ReactNode;
  /* 标题下方的辅助文字 */
  description?: string | React.ReactNode;
  /* 是否显示遮罩层 */
  overlay?: boolean;
  /* 是否显示上拉菜单 */
  visible?: boolean;
  /* props className */
  className?: string;
  /* 点击遮罩层是否关闭 */
  closeOnClickOverlay?: boolean;
  /* 点击取消 或者蒙层时触发 */
  onCancel?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  /* 上拉菜单type */
  type?: 'basic' | 'upload' | 'share',
  /* 点击选项时候触发 */
  onSelect?: (option: any) => void;
  /* 多行展示 */
  multiple?: boolean;
}

const ActionSheet = (props: ActionSheetProps) => {
  const {
    prefixCls,
    className,
    overlay = true,
    visible: propsVisible,
    options,
    type = 'basic',
    onCancel,
    closeOnClickOverlay = true,
    onSelect,
    title,
    multiple,
  } = props;

  const [visible, setVisible] = React.useState(propsVisible);
  const [anmitionEnd, setAnmitionEnd] = React.useState(false);

  useEffect(() => {
    if (propsVisible) {
      setVisible(propsVisible);
    } else {
      setAnmitionEnd(true);
      setTimeout(() => {
        setVisible(false);
        setAnmitionEnd(false);
      }, 300);
    }
  }, [propsVisible]);

  const handleMask = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget && closeOnClickOverlay) {
      onCancel && onCancel(event);
    }
  };

  const prefix = useGetPrefixClass('action-sheet', prefixCls);
  const classNames = useClassNames();
  const mask = classNames(prefix(), className, {
    [`${prefix()}-show`]: visible,
    [`${prefix()}-hidden`]: anmitionEnd && visible,
  });
  const wrapper = classNames(`${prefix()}-wrapper`, {
    [`${prefix()}-wrapper-show`]: visible,
    [`${prefix()}-wrapper-hidden`]: anmitionEnd && visible,
  });
  const content = classNames(`${prefix()}-content`);
  const footer = classNames(`${prefix()}-footer`, {
    [`${prefix()}-footer-${type}`]: type,
  });

  const containter = classNames(`${prefix()}-containter`);

  const optionStyle = (item: any) => {
    let cls = `${prefix()}-content-option`;
    if (item.mainOperation) {
      cls = `${prefix()}-content-option ${prefix()}-content-option-main`;
    }
    return cls;
  };

  const handleCancel = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    onCancel && onCancel(event);
  };

  const handleSelect = (option: any) => (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    onSelect && onSelect(option);
    onCancel && onCancel(event);
  };

  const wrapStyle = {
    backgroundColor: type !== 'basic' ? '#fff' : undefined,
    borderTopLeftRadius: type !== 'basic' ? 12 : undefined,
    borderTopRightRadius: type !== 'basic' ? 12 : undefined,
  };

  const renderPanel = (data: Option[] = []) => (
    <div
      style={{ flexWrap: multiple ? 'wrap' : 'nowrap', overflowX: multiple ? undefined : 'auto' }}
      className={`${containter}-inner`}
    >
      {data.map((option: any, index) => (
        <div
          key={`${index}`}
          className={`${containter}-inner-option`}
          onClick={handleSelect(option)}
        >
          <div className={option.type === 'img' ? `${containter}-inner-option-image` : undefined}>
            {option.src && typeof option.src === 'string' ? <img src={option.src} alt="img" /> : option.src}
          </div>
          {option.name && (
          <span className={`${containter}-inner-option-name`}>
            {option.name}
          </span>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <>
      {visible
        ? (
          <div
            className={mask}
            style={{ backgroundColor: overlay ? 'rgba(0,0,0,0.8)' : 'transparent' }}
            onClick={handleMask}
          >
            <div className={wrapper} style={wrapStyle}>
              { type !== 'basic' ? (
                <div className={containter}>
                  {title && <div className={`${containter}-title`}>{title}</div>}
                  {
                    type === 'upload' ? ( // 上传样式
                      <>
                        {renderPanel((options || []).filter((i: any) => i.type === 'img'))}
                        <Divider style={{ borderColor: '#DBDDDD' }} />
                        {renderPanel((options || []).filter((i: any) => i.type !== 'img'))}
                      </>
                    ) : ( // 分享样式
                      <>{renderPanel(options)}</>
                    )
                  }
                </div>
              ) : ( // 基础样式
                <div className={content}>
                  {(options || []).map((option, index) => (
                    <div
                      key={`${index}`}
                      className={optionStyle(option)}
                      onClick={handleSelect(option)}
                    >
                      {option.name}
                    </div>
                  ))}
                </div>
              )}
              {type === 'basic' && <div style={{ height: 20, backgroundColor: 'rgba(0,0,0,0.8)' }} />}
              <div className={footer} onClick={handleCancel}>取消</div>
            </div>
          </div>
        )
        : null}
    </>
  );
};

export default ActionSheet;
