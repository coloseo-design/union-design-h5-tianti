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
}>;

export class NoticeBarComponent extends BaseComponent<NoticeBarConf> {
    protected classPrefix = 'notice-bar';

    constructor(props: NoticeBarConf) {
      super(props);

      const { id, duration } = props;

      if (duration) {
        setTimeout(() => {
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

export default class NoticeBar {
    static bodyNoticeBarNode: HTMLDivElement = document.createElement('div');

    static noticeBarArr: ReactElement[] = [];

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

      NoticeBar.noticeBarArr.push(<NoticeBarComponent key={newConf.id} {...newConf} />);

      NoticeBar.render();
    };

    static close = (id?: string) => {
      if (id) {
        const newDialogArr = [...NoticeBar.noticeBarArr];
        const index = (() => {
          let arrIndex = -1;
          const arrLen = newDialogArr.length;
          for (let i = 0; i < arrLen; i += 1) {
            if (newDialogArr[i].props.id === id) {
              arrIndex = i;
              break;
            }
          }
          return arrIndex;
        })();

        if (index !== -1) {
          newDialogArr.splice(index, 1);
          NoticeBar.noticeBarArr = newDialogArr;
        }
      } else {
        NoticeBar.noticeBarArr = [];
      }

      NoticeBar.render();
    };

    static render = () => {
      if (!document.body.contains(NoticeBar.bodyNoticeBarNode)) {
        document.body.appendChild(NoticeBar.bodyNoticeBarNode);
        NoticeBar.bodyNoticeBarNode.className = 'notice-bar-container';
      }

      ReactDOM.render(<>{NoticeBar.noticeBarArr}</>, NoticeBar.bodyNoticeBarNode);
    };
}
