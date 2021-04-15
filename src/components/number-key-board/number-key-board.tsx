import React from 'react';
import classNames from 'classnames';
import Icon from '../icon';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider/context';

export interface NumberKeyBoardProps {
  prefixCls?: string;
  show?: boolean;
  title?: string;
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
  /* 点击键盘图标，外部区域，完成, 关闭按钮时的回调 */
  onClose?: () => void;
  value?: string;
}

export interface NumberKeyBoardState {
  show: boolean | undefined;
  value: string | undefined,
}

class NumberKeyBoard extends React.Component<NumberKeyBoardProps, NumberKeyBoardState> {
  constructor(props: NumberKeyBoardProps) {
    super(props);
    const { value, show } = this.props;
    this.state = {
      show,
      value: value || undefined,
    };
  }

  componentDidMount() {
    document.addEventListener('click', this.bodyClick);
  }

  componentDidUpdate(prevProps: NumberKeyBoardProps) {
    const { show, value } = this.props;
    if (show !== prevProps.show) {
      if (show) {
        console.log('--11');
        this.setState({ show });
      } else {
        this.setState({
          show,
        });
      }
    }
    if (value !== prevProps.value) {
      this.setState({
        value: value || undefined,
      });
    }
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.bodyClick);
  }

  bodyClick = () => {
    const { onClose } = this.props;
    const { show } = this.state;
    console.log('---', show);
    // onClose && onClose();
    // this.setState({ show: false });
  }

  click = (current: unknown) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    const {
      onInput, onDelete, extraKey, onClose,
    } = this.props;
    const { value } = this.state;
    if (current === 'delete') {
      let val;
      if (value) {
        val = value.toString().slice(0, value.toString().length - 1);
        this.setState({ value: val });
      }
      onDelete && onDelete(val);
      onClose && onClose();
    } else if (current === 'extra') {
      if (extraKey) {
        extraKey && onInput && onInput(current);
      } else {
        onClose && onClose();
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
    const { show } = this.state;
    const prex = getPrefixCls('number-keyboard', prefixCls);
    const container = classNames(prex, {
      [`${prex}-show`]: show,
    });
    const wrapper = classNames(`${prex}-wrapper`);
    const content = classNames(`${prex}-content`);

    return (
      <div
        className={container}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={wrapper}>
          {(complete || title) && (
          <div className={`${prex}-wrapper-title`}>
            <span>{title}</span>
            <div
              className={`${prex}-wrapper-complete`}
              onClick={() => this.setState({ show: false })}
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
                  style={{ marginLeft: index % 3 === 0 ? 12 : 0 }}
                  onClick={this.click(item)}
                >
                  {item}
                </div>
              </div>
            ))}
            <div className={`${prex}-content-number`}>
              <div
                className={`${prex}-content-number-current`}
                style={{ marginLeft: 12 }}
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
