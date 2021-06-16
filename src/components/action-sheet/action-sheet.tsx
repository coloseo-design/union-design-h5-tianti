/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import { useGetPrefixClass, useClassNames } from '../common/base-component';

export type Option = {
  name?: string;
  src?: string | React.ReactNode;
  color?: string;
  type?: string;
  mainOperation?: boolean;
}

export type ColT = {
  image?: number,
  icon?: number,
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
  /* 指定图片，图标默认每行几个换行(在multiple为true时有效) */
  currentCol?: ColT;
}

const ActionSheet: React.FC<ActionSheetProps> = (props: ActionSheetProps) => {
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
    cancelText,
    currentCol = {},
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
    backgroundColor: type !== 'basic' ? '#F5F6F6' : undefined,
    borderTopLeftRadius: type !== 'basic' ? 12 : undefined,
    borderTopRightRadius: type !== 'basic' ? 12 : undefined,
  };

  const array = (len: number) => {
    const list = Array.from({ length: len }).map((_, index) => index) || [];
    return list;
  };

  const renderData = (data: Option[] = [], isImg?: boolean) => (
    <>
      {data.map((option: any, index) => (
        <div
          key={`${index}`}
          className={`${containter}-inner-option`}
          onClick={handleSelect(option)}
          style={{ paddingRight: isImg ? 12 : 24 }}
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
    </>
  );

  const renderPanel = (data: Option[] = [], isImg?: boolean) => {
    let dataC: number[] = [];
    const tem = isImg ? currentCol.image || 3 : currentCol.icon || 4;
    if (multiple) {
      dataC = isImg ? array(Math.ceil(data.length / tem)) : array(Math.ceil(data.length / tem));
      return (
        <>
          {(dataC || []).map((item: number) => (
            <div
              className={`${containter}-inner`}
              key={item}
              style={{ borderBottom: item === dataC.length - 1 ? undefined : '1px solid #DBDDDD' }}
            >
              {renderData(data.slice(item * tem, item === 0 ? tem : tem * (item + 1)), isImg)}
            </div>
          ))}
        </>
      );
    }
    if (data && data.length > 0) {
      return (
        <div className={`${containter}-inner`}>
          {renderData(data, isImg)}
        </div>
      );
    }
    return null;
  };

  return (
    <>
      {visible
        ? (
          <div
            className={mask}
            style={{ backgroundColor: overlay ? 'rgba(0,0,0,0.2)' : 'transparent' }}
            onClick={handleMask}
          >
            <div className={wrapper} style={wrapStyle}>
              { type !== 'basic' ? (
                <div className={containter}>
                  {title && <div className={`${containter}-title`}>{title}</div>}
                  {
                    type === 'upload' ? ( // 上传样式
                      <>
                        {renderPanel((options || []).filter((i: any) => i.type === 'img'), true)}
                        {(options || []).filter((i: any) => i.type !== 'img').length > 0
                          && <div style={{ width: '100%', borderTop: '1px solid #DBDDDD', margin: 8 }} />}
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
                      style={{ color: option.color }}
                    >
                      {option.name}
                    </div>
                  ))}
                </div>
              )}
              {type === 'basic' && <div style={{ height: 10, backgroundColor: 'transparent' }} />}
              <div className={footer} onClick={handleCancel}>
                <div style={{ borderTop: '1px solid #DBDDDD' }}>{cancelText || '取消'}</div>
              </div>
            </div>
          </div>
        )
        : null}
    </>
  );
};

export default ActionSheet;
