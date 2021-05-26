/* eslint-disable no-lonely-if */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react';
import classNames from 'classnames';
import Icon from '../icon';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider/context';

export interface NumberKeyBoardProps {
  prefixCls?: string;
  /* 是否展示键盘 */
  show?: boolean;
  /* 键盘标题 */
  title?: string;
  /* 是否展示完成按钮  title为true complete也为true */
  complete?: boolean;
  /* 删除按钮文字， 没有展示删除图标 */
  deleteButtonText?: string;
  /* 点击外部时是否收起键盘 */
  hideOnClickOutside?: boolean;
  /* 点击按键时触发 */
  onInput?: (value: unknown) => void;
  /* 额外按键处理 */
  extraKey?: string;
  /* 点击删除按钮时触发 */
  onDelete?: (value?: string) => void;
  /* 点击键盘按钮触发 */
  onKeyBoard?: () => void;
  /* 输入的值 */
  value?: string;
  /* 键盘失去焦点 */
  onBlur?: () => void;
}

export interface NumberKeyBoardState {
  show: boolean | undefined;
  value: string | undefined;
  // clickSource: boolean;
  hideTransition: boolean;
}

class NumberKeyBoard extends React.Component<NumberKeyBoardProps, NumberKeyBoardState> {
  node: HTMLSpanElement | undefined;

  constructor(props: NumberKeyBoardProps) {
    super(props);
    const { value, show } = this.props;
    this.state = {
      show,
      value: value || undefined,
      hideTransition: false,
    };
  }

  componentDidMount() {
    if (this.node) {
      this.node.focus();
    }
  }

  componentDidUpdate(prevProps: NumberKeyBoardProps) {
    const { show, value } = this.props;
    if (show !== prevProps.show) {
      if (show) {
        this.setState({ show });
      } else {
        this.setState({ hideTransition: true });
        setTimeout(() => {
          this.setState({
            show,
            hideTransition: false,
          });
        }, 300);
      }
    }
    if (value !== prevProps.value) {
      this.setState({
        value: value || undefined,
      });
    }
  }

  getNode = (node: HTMLDivElement) => {
    this.node = node;
  }

  blur = () => {
    const { onBlur } = this.props;
    onBlur && onBlur();
  };

  handleComplete = () => {
    const { onBlur } = this.props;
    onBlur && onBlur();
  }

  click = (current: unknown) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    const {
      onInput, onDelete, extraKey, onBlur, onKeyBoard,
    } = this.props;
    const { value } = this.state;
    if (current === 'delete') {
      let val;
      if (value) {
        val = value.toString().slice(0, value.toString().length - 1);
        this.setState({ value: val });
      }
      onInput && onInput('delete');
      onDelete && onDelete(val);
    } else if (current === 'extra') {
      if (extraKey) {
        extraKey && onInput && onInput(current);
      } else {
        if (onKeyBoard) {
          onKeyBoard();
        } else {
          onBlur && onBlur();
        }
      }
    } else {
      onInput && onInput(current);
    }
  }

  renderKeyBoard = ({ getPrefixCls }: ConfigConsumerProps) => {
    const {
      prefixCls,
      complete,
      title,
      deleteButtonText,
      extraKey,
    } = this.props;
    const { show, hideTransition } = this.state;
    const prex = getPrefixCls('number-keyboard', prefixCls);
    const container = classNames(prex, {
      [`${prex}-show`]: show,
      [`${prex}-hidden`]: hideTransition && show,
    });
    const wrapper = classNames(`${prex}-wrapper`);
    const content = classNames(`${prex}-content`);

    return (
      <div
        className={container}
        onClick={(e) => { e.stopPropagation(); e.nativeEvent.stopImmediatePropagation(); }}
        tabIndex={0}
        onBlur={this.blur}
        ref={this.getNode}
        role="button"
      >
        <div className={wrapper}>
          {(complete || title) && (
          <div className={`${prex}-wrapper-title`}>
            {title && <span>{title}</span>}
            <div
              className={`${prex}-wrapper-complete`}
              onClick={this.handleComplete}
            >
              完成
            </div>
          </div>
          )}
          <div className={content}>
            {Array.from(Array(9), (_, k) => k + 1).map((item: number, index: number) => (
              <div key={item} className={`${prex}-content-number`}>
                <div
                  className={`${prex}-content-number-current`}
                  style={{ marginLeft: index % 3 === 0 ? '0.75em' : 0 }}
                  onClick={this.click(item)}
                >
                  {item}
                </div>
              </div>
            ))}
            <div className={`${prex}-content-number`}>
              <div
                className={`${prex}-content-number-current`}
                style={{ marginLeft: '0.75em' }}
                onClick={this.click('extra')}
              >
                {extraKey || <Icon type="keyboard" />}
              </div>
            </div>
            <div className={`${prex}-content-number`}>
              <div
                className={`${prex}-content-number-current`}
                onClick={this.click(0)}
              >
                0
              </div>
            </div>
            <div className={`${prex}-content-number`}>
              <div
                className={`${prex}-content-number-current`}
                onClick={this.click('delete')}
              >
                {deleteButtonText || <Icon type="keyboard-delete" />}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <ConfigConsumer>
        {this.renderKeyBoard}
      </ConfigConsumer>
    );
  }
}

export default NumberKeyBoard;
