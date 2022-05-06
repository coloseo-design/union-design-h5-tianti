/* eslint-disable react/display-name */
import React, {
  Component, CSSProperties, forwardRef, isValidElement, LegacyRef, ReactNode,
} from 'react';
import classNames from 'classnames';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider/context';
import { Icon } from '../index';

export interface FieldProps extends React.HTMLAttributes<HTMLTextAreaElement | HTMLInputElement> {
  border?: boolean; // 是否显示边框
  leftIcon?: string | ReactNode; // 左侧图标
  fieldType?: 'normal' | 'password' | 'textarea'; // 普通输入框、密码输入框、多行输入框
  leftStyle?: CSSProperties; // 左边图标样式
  // placeholder?: string; // 输入框占位提示文字
  maxLength?: number; // 输入的最大字符数
  status?: 'error'; // 是否将输入内容标红
  autosize?: boolean; // 是否自适应内容高度，只对 textarea 有效
  value?: string | number; // 输入框内容
  visibilityToggle?: boolean; // 是否显示切换的小眼睛，只对密码输入框有效
  onChange?: React.ChangeEventHandler<HTMLInputElement>; // 输入框内容变化时触发
  prefixCls?: string; // 用户自定义类前缀，默认uni-field
  showWordLimit?: boolean; // 是否显示字数统计，需要设置maxLength属性
  forwardedRef: React.LegacyRef<HTMLTextAreaElement | HTMLInputElement>;
  type: string;
}

export interface FieldState {
  value: string | number;
  type: string;
  focus: boolean;
  eyesOpen: boolean;
  textHeight: number;
}

class Field extends Component<FieldProps, FieldState> {
  constructor(props: FieldProps) {
    super(props);
    // 劫持value
    const {
      value,
      type = 'text',
      fieldType = 'normal',
      defaultValue,
    } = props;
    this.state = {
      value: value || defaultValue,
      type: fieldType === 'password' ? 'password' : type,
    };
  }

  componentDidUpdate(prevProps: FieldProps) {
    const { value } = this.props;
    if (value !== prevProps.value) {
      this.setState({
        value: typeof value === 'undefined' ? '' : value,
      });
    }
  }

  renderField = ({ getPrefixCls }: ConfigConsumerProps) => {
    const {
      fieldType = 'normal', prefixCls, style, className, border, status, leftIcon = fieldType === 'password' && 'password', leftStyle, visibilityToggle = true, maxLength, showWordLimit, autosize, onChange, onBlur, onFocus, forwardedRef, ...rest
    } = this.props;
    const {
      value, type, focus, eyesOpen, textHeight,
    } = this.state;

    const prefix = getPrefixCls('field', prefixCls);
    const mainClass = classNames(prefix, className, {
      [`${prefix}-${fieldType}`]: fieldType,
      [`${prefix}-border`]: border,
      [`${prefix}-error`]: status === 'error',
      [`${prefix}-focus`]: border && (focus || value),
      [`${prefix}-showWordLimit`]: fieldType === 'textarea' && maxLength && showWordLimit,
    });

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      this.setState({ focus: true });
      if (onFocus) {
        onFocus(e);
      }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      this.setState({ focus: false });
      if (onBlur) {
        onBlur(e);
      }
    };

    const handleEye = () => {
      this.setState({ eyesOpen: !eyesOpen, type: !eyesOpen ? 'text' : 'password' });
    };

    const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
      this.setState({ value: e.target.value });
      if (autosize && fieldType === 'textarea') {
        this.setState({ textHeight: e.target.scrollHeight });
      }
      if (onChange) {
        (onChange as React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>)(e);
      }
    };

    if (fieldType === 'textarea') {
      return (
        <div className={mainClass} style={style}>
          <textarea
            {...rest}
            maxLength={maxLength}
            value={value}
            onChange={handleChange}
            style={{ height: autosize ? textHeight : 'unset' }}
            ref={forwardedRef as LegacyRef<HTMLTextAreaElement>}
          />
          {maxLength && showWordLimit && (
            <div className={`${prefix}-word-limit`}>
              {value ? value.length : 0}
              /
              {maxLength || 0}
            </div>
          )}
        </div>
      );
    }

    return (
      <div className={mainClass} style={style}>
        {leftIcon && (
          <span className={`${prefix}-left-icon`} style={leftStyle}>
            {isValidElement(leftIcon) ? leftIcon : <Icon type={leftIcon as string} />}
          </span>
        )}
        <input
          {...rest}
          maxLength={maxLength}
          value={value}
          type={type}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          ref={forwardedRef as LegacyRef<HTMLInputElement>}
        />
        {visibilityToggle && fieldType === 'password' && (
          <span className={`${prefix}-right-icon`}>
            <Icon type={eyesOpen ? 'eye-open' : 'eye-colose'} onClick={handleEye} />
          </span>
        )}
      </div>
    );
  };

  render() {
    return (
      <ConfigConsumer>
        {this.renderField}
      </ConfigConsumer>
    );
  }
}

const NewField = forwardRef<HTMLInputElement| HTMLTextAreaElement, Omit<FieldProps, 'forwardedRef'>>((props, ref) => <Field {...props} forwardedRef={ref} />);

export default NewField;
