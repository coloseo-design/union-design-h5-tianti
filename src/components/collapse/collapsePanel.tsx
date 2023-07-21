/* eslint-disable camelcase */
import React, { CSSProperties, HTMLAttributes } from 'react';
import classNames from 'classnames';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider/context';
import { CollapseProps, expandIconProps } from './collapse';

export interface CollapsePanelProps extends Omit<HTMLAttributes<HTMLElement>, 'onChange'> {
    header?:React.ReactNode;
    // key?:number;
    onChange?:(show:boolean) => void;
    // className?: string;
    prefixCls?: string;
    // style?: CSSProperties;
    expandIcon?: CollapseProps['expandIcon'];
    /** 头部右边部分 */
    extra?: (data: expandIconProps) => React.ReactNode;
    show?: boolean;
    accordion?: boolean;
    currentKey?: number | string;
}

export interface CollapsePanelState {
    show: boolean;
    style?: CSSProperties;
    accordion?: boolean;
}

class CollapsePanel extends React.Component<CollapsePanelProps, CollapsePanelState> {
  constructor(props:CollapsePanelProps) {
    super(props);
    this.state = {
      show: props.show || false,
      accordion: props.accordion || false,
    };
  }

  headClick = () => {
    const { show } = this.state;
    const { onChange } = this.props;
    this.setState({
      show: !show,
    });
    if (onChange) {
      onChange(!show);
    }
  };

  renderCollapsePanel = ({ getPrefixCls }: ConfigConsumerProps) => {
    const {
      prefixCls,
      header,
      className,
      children,
      style: styles,
      expandIcon,
      extra,
      currentKey,
    } = this.props;
    const { show, accordion } = this.state;
    const prefix = getPrefixCls('collapse-item-mobile', prefixCls);
    const wrapper = classNames(prefix, className);
    const contentClass = classNames(`${prefix}-content`, {
      [`${prefix}-content-active`]: show,
      [`${prefix}-content-visibility`]: !show,
    });
    const boxClass = classNames(`${prefix}-content-box`, {
      [`${prefix}-content-accordion`]: accordion,
    });
    const headerClass = classNames(`${prefix}-header`, {
      [`${prefix}-header-accordion`]: accordion,
    });
    return (
      <div className={wrapper} style={{ ...styles }}>
        <div className={headerClass} onClick={this.headClick}>
          {
            expandIcon?.({ isActive: show, key: currentKey, header })
          }
          <div className={`${prefix}-header-title`}>
            {header}
            <span className={`${prefix}-header-extra`}>
              {extra?.({ isActive: show, key: currentKey, header })}
            </span>
          </div>
        </div>
        <div className={contentClass}>
          <div className={boxClass} style={{ padding: accordion ? '10px 18px' : '10px 0px 0px 20px' }}>{ children }</div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <ConfigConsumer>
        {this.renderCollapsePanel}
      </ConfigConsumer>
    );
  }
}

export default CollapsePanel;
