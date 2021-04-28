/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider/context';
import Icon from '../icon';

// export const tuple = <T extends string[]>(...args: T) => args;

// export type InputType = (typeof InputTypes)[number];

export interface BaseInputProps {
  type?: string;
  /* 用户自定义类前缀，默认uni-input */
  prefixCls?: string;
  /* 用户自定义类 */
  className?: string;
  /* 当表单控件为空时，控件中显示的内容 */
  placeholder?: string;
  /* 存在时表示控件的值不可编辑 */
  readonly?: boolean;
  /* 表单控件的值 */
  value?: any;
  // value 的最大长度（最多字符数目）
  maxlength?: number;
  // value 的最小长度（最少字符数目）
  minlength?: number;
  // input表单控件的名字。以名字/值对的形式随表单一起提交
  name?: string;
  // 匹配有效 value 的模式
  pattern?: string;
  // 用于表单的自动填充功能
  autocomplete?: string;
  // 用于规定文件上传控件中期望的文件类型
  accept?: string;
  // image type的alt属性，是可访问性的要求。
  alt?: string;
  // 页面加载时自动聚焦到此表单控件
  autofocus?: boolean;
  // 文件上传控件中媒体拍摄的方式
  capture?: string;
  // 用于控制控件是否被选中
  checked?: boolean;
  // 表单区域的一个名字，用于在提交表单时发送元素的方向性
  dirname?: string;
  // 表单控件是否被禁用
  disabled?: boolean;
  // 将控件和一个form元素联系在一起
  form?: string;
  // 用于提交表单的URL
  formaction?: string;
  // 表单数据集的编码方式，用于表单提交
  formenctype?: string;
  // 用于表单提交的HTTP方法
  formmethod?: string;
  // 提交表单时绕过对表单控件的验证
  formnovalidate?: boolean;
  // 表单提交的浏览上下文
  formtarget?: any;
  height?: string | number;
  // 自动填充选项的<datalist> 的id值
  list?: string;
  // 最大值
  max?: number;
  // 最小值
  min?: number;
  //  是否允许多个值
  multiple?: boolean;
  // 和<img> 的 src 属性一样；图像资源的地址
  src?: string;
  // 有效的递增值
  step?: number;
  width?: string | number;
  // 输入框内容变化时的回调
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  // onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>;
  // 输入框默认内容
  defaultValue?: string | number;
  // 带标签的 input，设置后置标签
  addonAfter?: ReactNode;
  // 带标签的 input，设置前置标签
  addonBefore?: ReactNode;
  style?: {[key: string] : unknown};
  // 点击搜索图标、清除图标，或按下回车键时的回调
  // onSearch?: (
  //   value: string,
  //   event?:
  //     | React.ChangeEvent<HTMLInputElement>
  //     | React.MouseEvent<HTMLElement>
  //     | React.KeyboardEvent<HTMLInputElement>,
  // ) => void;
  // 是否有确认按钮，可设为按钮文字。
  enterButton?: boolean | Node;
  forwardedRef?: React.MutableRefObject<HTMLInputElement>;
  // 可以点击清除图标删除内容
  // allowClear?: boolean;
  // 输入框左侧文本
  label?: string;
  // 是否显示表单必填星号
  required?: boolean;
  // 元素的输入文本的行数（显示的高度）。
  rows?: number;
  // 文本域的可视宽度。必须为正数，默认为20 (HTML5)。
  cols?: number;
  // 左侧额外内容
  leftIcon?: unknown;
  // 右侧额外内容
  rightIcon?: unknown;
  // 是否自适应内容高度，只对 textarea 有效
  autosize?: boolean;
  // 是否显示边框
  border?: boolean;
  // 输入框类型
  fieldType?: 'card' | 'reply' | 'normal';
  // 输入框状态
  status?: 'error' | 'warning';
  // 表单校验规则
  rules?: unknown;
}
export interface InputState {
  value: string;
  height: number;
  showPassword: boolean;
}
class Input extends Component<BaseInputProps, InputState> {
  static defaultProps: BaseInputProps = {
    value: '',
    defaultValue: '',
    onChange: () => {},
    // onSearch: () => {},
    onBlur: () => {},
    // onPressEnter: () => {},
    label: '',
    required: false,
    rows: 1,
    fieldType: 'normal',
  };

  node: HTMLInputElement | undefined;

  constructor(props: BaseInputProps) {
    super(props);
    // 劫持value
    this.state = {
      value: props.value || props.defaultValue,
      height: 25,
      showPassword: false,
    };
  }

  componentDidUpdate(prevProps: BaseInputProps) {
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
      // allowClear,
      onChange,
      prefixCls,
      className,
      type,
      defaultValue,
      label,
      required,
      leftIcon,
      rightIcon,
      autosize,
      border,
      fieldType,
      status,
      style,
      ...rest
    } = this.props;
    const { value, height, showPassword } = this.state;
    const prefix = getPrefixCls('field', prefixCls);
    const mainClass = classNames(prefix, className, {
      [`${prefix}-${fieldType}`]: fieldType,
      [`${prefix}-${fieldType}-border`]: border,
      [`${prefix}-${fieldType}-border-value`]: value && border,
      [`${prefix}-${fieldType}-${status}`]: status,
    });
    const inputPrefix = `${prefix}-${fieldType}-content-input`;
    const inputClass = classNames(inputPrefix, {
      // [`${inputPrefix}-border`]: border,
    });

    const onchange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
      const { target: { scrollHeight, localName, value: textValue } } = e;
      if (autosize && localName === 'textarea') {
        this.setState({ height: scrollHeight });
      }
      this.setState({ value: textValue });
      if (onChange) {
        (onChange as React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>)(e);
      }
    };

    const handleShowPassword = () => {
      this.setState({ showPassword: !showPassword });
    };

    // const handleDelete = (e: React.MouseEvent<HTMLSpanElement>) => {
    //   e.preventDefault();
    //   this.setState({ value: '' });
    //   if (onChange) {
    //     Object.assign(e, {
    //       target: this.node,
    //       currentTarget: this.node,
    //     });
    //     Object.assign(this.node, {
    //       value,
    //     });
    //   }
    //   this.node.focus();
    // };

    // const cleanButton = (
    //   <span onClick={handleDelete} style={{ visibility: value ? 'visible' : 'hidden' }}>
    //     <Icon type="delete" />
    //   </span>
    // );

    if (fieldType === 'card') {
      if (type === 'textarea') {
        return (
          <div className={mainClass} style={style}>
            {required && <span className={`${prefix}-required`}>*</span>}
            <div className={`${prefix}-content`}>
              {label && <p className={`${prefix}-content-label`}>{label}</p>}
              <div className={`${prefix}-content-container`}>
                <textarea
                  {...rest}
                  value={value}
                  type={type}
                  ref={this.deletgateRef}
                  onChange={onchange}
                  className={`${prefix}-content-textarea`}
                  style={{ height: autosize ? height : 'unset' }}
                />
                {/* {allowClear && cleanButton} */}
              </div>
            </div>
          </div>
        );
      }
      return (
        <div className={mainClass} style={style}>
          {required && <span className={`${prefix}-required`}>*</span>}
          <div className={`${prefix}-content`}>
            {label && <p className={`${prefix}-content-label`}>{label}</p>}
            <div className={`${prefix}-content-container`}>
              <input
                {...rest}
                value={value}
                type={type}
                ref={this.deletgateRef}
                onChange={onchange}
                className={`${prefix}-content-input`}
              />
              {/* {allowClear && cleanButton} */}
            </div>
          </div>
        </div>
      );
    }

    if (fieldType === 'reply') {
      return (
        <div className={mainClass} style={style}>
          {leftIcon && <span className={`${prefix}-reply-left-content`}>{leftIcon}</span>}
          <div className={`${prefix}-reply-content`}>
            <textarea
              {...rest}
              value={value}
              type={type}
              ref={this.deletgateRef}
              onChange={onchange}
              className={`${prefix}-reply-content-textarea`}
              style={{ height: autosize ? height : 'unset' }}
            />
            {/* {allowClear && cleanButton} */}
          </div>
          {rightIcon && <span className={`${prefix}-reply-right-content`}>{rightIcon}</span>}
        </div>
      );
    }

    return (
      <div className={mainClass} style={style}>
        {type === 'password' && <span className={`${prefix}-left-content`}><Icon type="password" /></span>}
        {leftIcon && <span className={`${prefix}-left-content`}>{leftIcon}</span>}
        <div className={`${prefix}-${fieldType}-content`}>
          <input
            {...rest}
            value={value}
            type={type === 'password' && showPassword ? 'text' : type}
            ref={this.deletgateRef}
            onChange={onchange}
            className={inputClass}
          />
          {/* {allowClear && cleanButton} */}
        </div>
        {type === 'password' && <span className={`${prefix}-right-content`} onClick={handleShowPassword}><Icon type={showPassword ? 'eye-open' : 'eye-colose'} /></span>}
        {rightIcon && <span className={`${prefix}-right-content`}>{rightIcon}</span>}
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

const InputRef:
  React.ForwardRefExoticComponent<BaseInputProps & React.RefAttributes<HTMLInputElement>> = React.forwardRef<HTMLInputElement, BaseInputProps>(
    (props: BaseInputProps, ref: React.MutableRefObject<HTMLInputElement>) => <Input {...props} forwardedRef={ref} />,
  );

export default InputRef;
