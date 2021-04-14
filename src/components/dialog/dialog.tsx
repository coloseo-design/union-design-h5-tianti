/* eslint-disable max-classes-per-file */
import React, { CSSProperties, ReactElement, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { BaseComponent, BaseProps } from '../common/base-component';

export type DialogAction = Partial<{
    /** 按钮上的文字 */
    name: string;
    /** 样式 */
    style: CSSProperties;
    /** 样式 */
    className: string;
    /** 按钮的 点击 事件 */
    onClick: () => void;
}>;

export type DialogConf = BaseProps<{
    /**  唯一标识，可以用来关闭 */
    id: string;
    /** 标题 */
    title: string;
    /** 内容 */
    content: ReactNode;
    /** 底部的btns */
    actions: DialogAction[];
    /** 通知类型按钮 */
    notice: DialogAction;
    /** 是否显示蒙层 */
    mask: boolean;
    /** 点击蒙层是否允许关闭 */
    maskClosable: boolean;
    /** 蒙层样式 */
    maskStyle: CSSProperties;
    /** 蒙层样式 */
    maskClassName: string;
    /** 弹窗样式 */
    style: CSSProperties;
    /** 弹窗样式 */
    className: string;
}>;

class DialogComponent extends BaseComponent<DialogConf> {
    protected classPrefix = 'dialog';

    protected view = () => {
      const { mask } = this.props;

      if (mask) return this.mask(this.dialog());

      return this.dialog();
    };

    private mask = (view: ReactNode) => {
      const {
        maskClosable, id, maskStyle, maskClassName,
      } = this.props;

      return (
        <div
          style={maskStyle}
          className={`${this.getPrefixClass('mask')} ${maskClassName}`}
          onClick={() => {
            maskClosable && Dialog.close(id);
          }}
        >
          {view}
        </div>
      );
    };

    private dialog = () => {
      const {
        actions, content, title, notice, className, style,
      } = this.props;

      const direction = (actions?.length ?? 0) > 2 ? 'col' : 'row';

      return (
        <div
          style={style}
          className={`${this.getPrefixClass()} ${className}`}
          onClick={(event) => event.stopPropagation()}
        >
          {title && <div className="title">{title}</div>}
          {content && <div className="content">{content}</div>}
          {actions && (
            <div className={`actions-${direction}`}>
              {actions.map((item) => (
                <div
                  key={item.name}
                  style={item.style}
                  className={item.className}
                  onClick={item.onClick}
                >
                  {item.name}
                </div>
              ))}
            </div>
          )}
          {notice && (
            <div
              style={notice.style}
              className={`notice ${notice.className}`}
              onClick={notice.onClick}
            >
              {notice.name}
            </div>
          )}
        </div>
      );
    };
}

export default class Dialog {
    static bodyDialogNode: HTMLDivElement = document.createElement('div');

    static dialogArr: ReactElement[] = [];

    static open = (conf: DialogConf) => {
      const newConf = { ...conf };
      newConf.id ??= `${(new Date()).getTime()}`;
      newConf.mask ??= true;
      newConf.maskClosable ??= true;

      Dialog.dialogArr.push(<DialogComponent key={newConf.id} {...newConf} />);

      Dialog.render();
    };

    static close = (id?: string) => {
      if (id) {
        const newDialogArr = [...Dialog.dialogArr];
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
          Dialog.dialogArr = newDialogArr;
        }
      } else {
        Dialog.dialogArr = [];
      }

      Dialog.render();
    };

    static render = () => {
      if (!document.body.contains(Dialog.bodyDialogNode)) {
        document.body.appendChild(Dialog.bodyDialogNode);
      }

      ReactDOM.render(<>{Dialog.dialogArr}</>, Dialog.bodyDialogNode);
    }
}
