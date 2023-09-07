/* eslint-disable react/display-name */
import React, {
  Component, CSSProperties, forwardRef, isValidElement, LegacyRef, ReactNode, createRef,
} from 'react';
import classNames from 'classnames';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider/context';
import { Icon } from '../index';

export interface FieldProps extends Omit<React.HTMLAttributes<HTMLTextAreaElement | HTMLInputElement>, 'value' | 'defaultValue'> {
  border?: boolean; // 是否显示边框
  leftIcon?: string | ReactNode; // 左侧图标
  fieldType?: 'normal' | 'password' | 'textarea'; // 普通输入框、密码输入框、多行输入框
  leftStyle?: CSSProperties; // 左边图标样式
  maxLength?: number; // 输入的最大字符数
  status?: 'error'; // 是否将输入内容标红
  autosize?: boolean; // 是否自适应内容高度，只对 textarea 有效
  defaultValue?: string | number;
  value?: string | number; // 输入框内容
  visibilityToggle?: boolean; // 是否显示切换的小眼睛，只对密码输入框有效
  onChange?: React.ChangeEventHandler<HTMLInputElement>; // 输入框内容变化时触发
  prefixCls?: string; // 用户自定义类前缀，默认uni-field
  showWordLimit?: boolean; // 是否显示字数统计，需要设置maxLength属性
  forwardedRef: React.LegacyRef<HTMLTextAreaElement | HTMLInputElement>;
  type?: string;
  disabled?: boolean;
  isResize?: boolean;
  size?: 'default' | 'md' | 'sm';
  rows?: number;
  isClear?: boolean;
}

export interface FieldState {
  innerValue: string | number;
  type: string;
  focus?: boolean;
  eyesOpen: boolean;
  textHeight?: number;
  hasClear?: boolean;
}

class Field extends Component<FieldProps, FieldState> {
  public TextareaRef = createRef<HTMLTextAreaElement>();

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
      innerValue: value || defaultValue || '',
      type: fieldType === 'password' ? 'password' : type,
      hasClear: false,
      eyesOpen: false,
      focus: false,
      textHeight: undefined,
    };
  }

  componentDidMount() {
    this.getTextareaHeight();
  }

  componentDidUpdate(prevProps: FieldProps) {
    const { value } = this.props;
    if (value !== prevProps.value) {
      this.setState({
        innerValue: typeof value === 'undefined' ? '' : value,
      });
      if (value) {
        this.getTextareaHeight(value);
      }
    }
  }

  getTextareaHeight = (val: string | number = '') => {
    const { autosize, forwardedRef, fieldType } = this.props;
    const { innerValue } = this.state;
    if (autosize && fieldType === 'textarea' && (val || innerValue)) {
      const temRef: any = forwardedRef || this.TextareaRef;
      if (temRef.current) {
        this.setState({ textHeight: temRef.current?.scrollHeight });
      }
    }
  }

  handleDelete = () => {
    this.setState({ innerValue: '', hasClear: false });
  }

  renderField = ({ getPrefixCls }: ConfigConsumerProps) => {
    const {
      fieldType = 'normal',
      prefixCls,
      style,
      className,
      border,
      status,
      leftIcon = fieldType === 'password' && 'lock1-surface',
      leftStyle,
      visibilityToggle = true,
      maxLength,
      showWordLimit,
      autosize,
      onChange,
      onBlur,
      onFocus,
      forwardedRef,
      isResize = true,
      size = 'default',
      isClear = false,
      ...rest
    } = this.props;
    const {
      innerValue, type, focus, eyesOpen, textHeight, hasClear,
    } = this.state;

    const prefix = getPrefixCls('field', prefixCls);
    const mainClass = classNames(prefix, className, {
      [`${prefix}-${fieldType}`]: fieldType,
      [`${prefix}-${size}`]: size,
      [`${prefix}-border`]: border,
      [`${prefix}-error`]: status === 'error',
      [`${prefix}-focus`]: border && (focus || innerValue),
      // [`${prefix}-focus`]: border && focus,
      [`${prefix}-showWordLimit`]: fieldType === 'textarea' && maxLength && showWordLimit,
    });

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      this.setState({ focus: true });
      if (isClear && innerValue) {
        this.setState({ hasClear: true });
      }
      if (onFocus) {
        onFocus(e);
      }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      this.setState({ focus: false });
      if (hasClear && isClear) {
        this.setState({ hasClear: false });
      }
      if (onBlur) {
        onBlur(e);
      }
    };

    const handleEye = () => {
      this.setState({ eyesOpen: !eyesOpen, type: !eyesOpen ? 'text' : 'password' });
    };

    const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
      this.setState({ innerValue: e.target.value });
      if (autosize && fieldType === 'textarea') {
        this.setState({ textHeight: e.target.scrollHeight });
      }
      if (onChange) {
        (onChange as React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>)(e);
      }
      if (isClear && e.target.value) {
        this.setState({ hasClear: true });
      }
    };

    if (fieldType === 'textarea') {
      return (
        <div className={mainClass} style={style}>
          <div className={`${prefix}-textarea-container`}>
            {leftIcon && (
            <span className={`${prefix}-textarea-icon`} style={leftStyle}>
              {isValidElement(leftIcon) ? leftIcon : <Icon type={leftIcon as string} />}
            </span>
            )}
            <textarea
              {...rest}
              maxLength={maxLength}
              value={innerValue}
              onChange={handleChange}
              style={{ height: autosize ? textHeight : 'unset', resize: (isResize ? 'auto' : 'none') as any }}
              ref={forwardedRef as LegacyRef<HTMLTextAreaElement> || this.TextareaRef}
            />
          </div>
          {maxLength && showWordLimit && (
            <div className={`${prefix}-word-limit`}>
              {innerValue ? innerValue.toString().length : 0}
              /
              {maxLength || 0}
            </div>
          )}
        </div>
      );
    }

    return (
      <div
        className={mainClass}
        style={style}
        // onMouseOver={() => {
        //   if (isClear && innerValue) {
        //     this.setState({ hasClear: true });
        //   }
        // }}
      >
        {leftIcon && (
          <span className={`${prefix}-left-icon`} style={leftStyle}>
            {isValidElement(leftIcon) ? leftIcon : <Icon type={leftIcon as string} />}
          </span>
        )}
        <input
          {...rest}
          maxLength={maxLength}
          value={innerValue}
          type={type}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          ref={forwardedRef as LegacyRef<HTMLInputElement>}
        />
        {visibilityToggle && fieldType === 'password' && (
          <span className={`${prefix}-right-icon`}>
            <Icon type={eyesOpen ? 'preview-open-line' : 'preview-close-line'} onClick={handleEye} />
          </span>
        )}
        {fieldType === 'normal' && hasClear && (
          <span onClick={this.handleDelete} className={`${prefix}-right-icon`}>
            <Icon type="close1-surface" />
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
