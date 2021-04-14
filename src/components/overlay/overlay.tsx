import React, { CSSProperties } from 'react';
import { createPortal } from 'react-dom';
import { BaseComponent, BaseProps, DivEvent } from '../common/base-component';

export type OverlayProps = BaseProps<DivEvent & {
    /** 是否显示遮罩 */
    visible: boolean;
    /** 样式 */
    style: CSSProperties;
    /** 样式 */
    className: string;
    /** 点击 遮罩 事件 */
    onClick: DivEvent['onClick'];
}>;

export default class Overlay extends BaseComponent<OverlayProps> {
    protected classPrefix = 'overlay';

    protected view = () => createPortal(this.overlay(), document.body);

    private overlay = () => {
      const {
        children, style, className, onClick, visible, ...otherDivEevent
      } = this.props;

      if (!visible) return <div />;

      return (
        <div
          style={style}
          onClick={onClick}
          className={this.classNames(className, `${this.getPrefixClass()}`)}
          {...otherDivEevent}
        >
          {children}
        </div>
      );
    };
}
