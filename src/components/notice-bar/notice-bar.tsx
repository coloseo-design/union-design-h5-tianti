/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable max-classes-per-file */
import React, { CSSProperties, ReactElement, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { BaseComponent, BaseProps } from '../common/base-component';
import Icon from '../icon';

export type NoticeBarType = 'base' | 'grey' | 'success' | 'error' | 'warning' | 'supplement';

export type NoticeBarConf = BaseProps<{
  /** 通知栏唯一标识 用于关闭指定的通知栏 */
  id: string;
  /** 左边图标 */
  leftIcon: ReactNode;
  /** 右边图标 */
  rightIcon: ReactNode;
  /** 通知栏内容 */
  text: string;
  /** 通知栏类型 */
  type: NoticeBarType;
  /** 是否显示多行文本 */
  multiline: boolean;
  /** 样式 */
  style: CSSProperties;
  /** 样式 */
  className: string;
  /** 自动关闭的延时，单位秒。设为 0 时不自动关闭 */
  duration: number;
  /** 文本点击事件 */
  textOnClick: () => void;
  /** 左边图标点击事件 */
  leftIconOnClick: () => void;
  /** 右边图标点击事件 */
  rightIconOnClick: () => void;
  container?: () => HTMLElement | null;
  zIndex?: number;
  only?: string;
}>;

export class NoticeBarComponent extends BaseComponent<NoticeBarConf> {
  protected classPrefix = 'notice-bar';

  constructor(props: NoticeBarConf) {
    super(props);

    const { id, duration } = props;
    if (duration) {
      const timer = setTimeout(() => {
        clearTimeout(timer);
        NoticeBar.close(id);
        const container = document.querySelector('.notice-bar-container');
        container && props.container?.()?.removeChild(container);
      }, duration * 1000);
    }
  }

  protected view = () => {
    const {
      style, className, text, type, leftIcon, rightIcon, multiline,
      leftIconOnClick, rightIconOnClick, textOnClick,
    } = this.props;

    return (
      <div
        style={style}
        className={this.classNames(className, `${this.getPrefixClass()}-${type}`)}
      >
        {leftIcon && (
          <div
            className={this.gpc('left-icon')}
            onClick={leftIconOnClick}
          >
            {typeof leftIcon === 'string' ? (
              <Icon type={leftIcon} />
            ) : leftIcon}
          </div>
        )}
        <div
          onClick={textOnClick}
          className={this.classNames(this.gpc('text'), {
            [this.gpc('text-multiline')]: multiline,
            [this.gpc('text-oneline')]: !multiline,
          })}
        >
          {text}
        </div>
        {rightIcon && (
          <div
            className={this.gpc('right-icon')}
            onClick={rightIconOnClick}
          >
            {typeof rightIcon === 'string' ? (
              <Icon type={rightIcon} />
            ) : rightIcon}
          </div>
        )}
      </div>
    );
  };
}

export default class NoticeBar {
  static noticeBarArr: { conf: NoticeBarConf, el: ReactElement }[] = [];

  static success = (conf: NoticeBarConf) => NoticeBar.open({
    ...conf,
    type: 'success',
    leftIcon: <Icon type="checkout" />,
  });

  static error = (conf: NoticeBarConf) => NoticeBar.open({
    ...conf,
    type: 'error',
    leftIcon: <Icon type="close" />,
  });

  static warning = (conf: NoticeBarConf) => NoticeBar.open({
    ...conf,
    type: 'warning',
    leftIcon: <Icon type="exclamation-circle" />,
  });

  static supplement = (conf: NoticeBarConf) => NoticeBar.open({
    ...conf,
    type: 'supplement',
    leftIcon: <Icon type="exclamation-circle" />,
  });

  static grey = (conf: NoticeBarConf) => NoticeBar.open({ ...conf, type: 'grey' });

  static open = (conf: NoticeBarConf) => {
    const newConf = { ...conf };
    newConf.id ??= `${(new Date()).getTime()}`;
    newConf.type ??= 'base';
    newConf.duration ??= 3;
    newConf.multiline ??= false;

    NoticeBar.noticeBarArr.push({
      conf: newConf,
      el: <NoticeBarComponent key={newConf.id} {...newConf} />,
    });
    NoticeBar.render();
  };

  static close = (id?: string) => {
    if (id) {
      const newDialogArr = [...NoticeBar.noticeBarArr].filter((i) => i.conf.id !== id);
      NoticeBar.noticeBarArr = newDialogArr;
    } else {
      NoticeBar.noticeBarArr = [];
    }
    NoticeBar.render();
  };

  static render = () => {
    const map = new Map<HTMLElement, ReactNode[]>();
    if (NoticeBar.noticeBarArr.length > 0) {
      NoticeBar.noticeBarArr.forEach((i) => {
        const container = i.conf.container?.() || document.body;
        const temp = map.get(container);
        if (temp) {
          temp.push(i.el);
        } else {
          (container as any).dataZIndex = i.conf.zIndex;
          map.set(container, [i.el]);
        }
      });
      Array.from(map).forEach(([k, v]) => {
        let container: HTMLElement | null = null;
        const temp = k.querySelectorAll('div.notice-bar-container');
        const arr = Array.from(temp);
        for (let i = 0; i < arr.length; i += 1) {
          if (arr[i].parentElement === k) {
            container = arr[i] as HTMLElement;
            break;
          }
        }
        if (!container) {
          container = document.createElement('div');
          container.className = 'notice-bar-container';
          if (k.nodeName !== 'BODY') {
            (container as any).style.position = 'absolute';
          }
          if ((k as any).dataZIndex) {
            (container as any).style.zIndex = (k as any).dataZIndex;
          }
          k.append(container);
        }
        ReactDOM.render(<>{v}</>, container);
      });
    } else {
      const container = document.querySelectorAll('.notice-bar-container');
      (container || []).forEach((i) => {
        i && i.remove?.();
      });
    }
  };
}
