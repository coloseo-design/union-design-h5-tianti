import React, { ChangeEventHandler, Component } from 'react';
import classNames from 'classnames';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider/context';
import Icon from '../icon';

export interface BaseSearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // 搜索框的默认值
  defaultValue?: string;
  // 搜索框的当前值
  value?: string;
  // placeholder
  placeholder?: string;
  // submit 事件 (点击键盘的 enter)
  onSubmit?: (val: string) => void;
  // change 事件的回调
  onChange?: ChangeEventHandler;
  // focus 事件的回调
  onFocus?: () => void;
  // blur 事件的回调
  onBlur?: () => void;
  // 点击取消按钮触发
  onCancel?: (val: string) => void;
  // 是否一直显示取消按钮
  showCancelButton?: boolean;
  // 定制取消按钮的文字
  cancelText?: string;
  // 点击 clear 图标触发
  onClear?: (val: string) => void;
  // 最多允许输入的字符个数
  maxLength?: number;
  prefixCls?: string;
  forwardedRef?: React.MutableRefObject<HTMLInputElement>;
  // 展示左上角返回图标
  showBackIcon?: boolean;
}

export interface SearchState {
  value: string;
  focus: boolean;
}

class Input extends Component<BaseSearchProps, SearchState> {
  node: HTMLInputElement | undefined;

  constructor(props: BaseSearchProps) {
    super(props);
    // 劫持value
    this.state = {
      value: props.value || props.defaultValue,
    };
  }

  componentDidUpdate(prevProps: BaseSearchProps) {
    const { value } = this.props;
    if (value !== prevProps.value) {
      this.setState({
        value,
      });
    }
  }

  deletgateRef = (node: HTMLInputElement) => {
    const { forwardedRef } = this.props;
    this.node = node;
    forwardedRef?.current = node;
  }

  renderInput = ({ getPrefixCls }: ConfigConsumerProps) => {
    const {
      prefixCls,
      className,
      defaultValue,
      style,
      cancelText = '取消',
      showCancelButton,
      showBackIcon,
      onClear,
      onCancel,
      onChange,
      onFocus,
      onBlur,
      onSubmit,
      ...rest
    } = this.props;
    const { value, focus } = this.state;
    const prefix = getPrefixCls('search', prefixCls);
    const mainClass = classNames(prefix, className, {

    });

    const handleClear = (e) => {
      this.setState({ value: '' });
      if (onClear) {
        onClear(value);
      }
      if (onCancel) {
        onCancel(value);
      }
    };

    const handleChange = (e) => {
      const { value: eventValue } = e.target;
      this.setState({ value: eventValue });
      if (onChange) {
        onChange(e);
      }
    };

    const handleFocus = () => {
      this.setState({ focus: true });
      if (onFocus) {
        onFocus();
      }
    };

    const handleBlur = () => {
      const timer = setTimeout(() => {
        clearTimeout(timer);
        this.setState({ focus: false });
      }, 100);
      if (onBlur) {
        onBlur();
      }
    };

    const onKeyPress = (e:
      React.ChangeEvent<HTMLInputElement> |
      React.MouseEvent<HTMLElement, MouseEvent>
      | React.KeyboardEvent<HTMLInputElement> | undefined) => {
      let keyCode;
      if (e && e.which) {
        keyCode = e.which;
      } else if (e && e.keyCode) {
        keyCode = e.keyCode;
      }

      if (keyCode === 13 && onSubmit) {
        onSubmit(value);
      }
    };

    return (
      <div className={mainClass} style={style}>
        <div className={`${prefix}-container`}>
          {showBackIcon && <Icon type="left" />}
          <div className={`${prefix}-input-wrap`}>
            <Icon type="search" />
            <input
              {...rest}
              value={value}
              type="search"
              enterKeyHint="search"
              ref={this.deletgateRef}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onKeyPress={onKeyPress}
            />
            {value && focus && <Icon type="delete" onClick={handleClear} />}
          </div>
          {showCancelButton && <span className={`${prefix}-cancel`} onClick={handleClear}>{cancelText}</span>}
        </div>
      </div>
    );
  };

  render() {
    return (
      <ConfigConsumer>
        {this.renderInput}
      </ConfigConsumer>
    );
  }
}

const SearchRef = React.forwardRef<HTMLInputElement, BaseSearchProps>((
  props: BaseSearchProps,
  ref: React.MutableRefObject<HTMLInputElement>,
) => <Input {...props} forwardedRef={ref} />);

export default SearchRef;
