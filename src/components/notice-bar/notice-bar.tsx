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

const div = document.createElement('div');
div.className = 'notice-bar-container';

const temp = document.createElement('div');
temp.className = 'notice-bar-container';

export default class NoticeBar {
  static noticeBarArr: { conf: NoticeBarConf, el: ReactElement }[] = [];

  static noticeContainer: (HTMLElement | null)[] = [];

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

    const c = conf.container?.();
    if (c) {
      if (c && !c.contains(temp)) {
        temp.setAttribute('style', `position: absolute; z-index: ${conf.zIndex || 100}`);
        c && c.appendChild(temp.cloneNode(true));
      }
      !NoticeBar.noticeContainer.includes(c) && NoticeBar.noticeContainer.push(c);
    } else {
      if (!document.body.contains(div)) {
        div.setAttribute('style', `z-index: ${conf.zIndex || 100}`);
        document.body.appendChild(div);
      }
      !NoticeBar.noticeContainer.includes(div) && NoticeBar.noticeContainer.push(div);
    }

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

  static getObj = (
    key: number | string,
    obj: any,
    i: HTMLElement | null,
    j: {conf: NoticeBarConf, el: ReactElement},
  ) => {
    if (!(obj.body?.child || []).some(((m: any) => m.key === j.conf.id))) {
      Object.assign(obj, {
        [key]: {
          child: (obj[key]?.child || []).concat(j.el),
          container: key === 'body' ? div : i,
          conf: j.conf,
        },
      });
    }
  };

  static render = () => {
    const obj: any = {};
    NoticeBar.noticeContainer.forEach((i, index) => {
      NoticeBar.noticeBarArr.forEach((j) => {
        if (j.conf.container?.() && i === j.conf.container?.()) {
          NoticeBar.getObj(index, obj, i, j);
        }
        if (!j.conf.container?.()) {
          NoticeBar.getObj('body', obj, i, j);
        }
      });
    });

    Object.entries(obj).forEach(([key, value]) => {
      if (key === 'body') {
        ReactDOM.render(<>{(value as any).child}</>, (value as any).container);
      } else {
        const container = ((value as any).container as HTMLElement).querySelector('div.notice-bar-container');
        if (container) {
          ReactDOM.render(
            <>
              {(value as any).child}
            </>, container,
          );
        }
      }
    });

    const values = (Object.values(obj) || []).map((i: any) => i.container);
    const current: HTMLElement | undefined | null = NoticeBar.noticeContainer.find((i) => !values.includes(i));
    if (current) {
      if (current === div) {
        ReactDOM.render(<></>, div);
      } else {
        const currentNotice = current.querySelector('div.notice-bar-container');
        currentNotice && ReactDOM.render(<></>, currentNotice);
      }
      NoticeBar.noticeContainer = NoticeBar.noticeContainer.filter((i) => i !== current);
    }
  };
}
