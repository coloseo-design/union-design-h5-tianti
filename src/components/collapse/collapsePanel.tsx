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
      show: false,
      accordion: false,
    };
  }

  UNSAFE_componentWillMount() {
    const { show = false, accordion = false } = { ...this.props };
    this.setState({ show, accordion });
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
    } = this.props;
    const { show, accordion } = this.state;
    const prefix = getPrefixCls('collapse-item-mobile', prefixCls);
    const clazzName = classNames(prefix, className);
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
      <div className={clazzName} style={{ ...styles }}>
        <div className={headerClass} onClick={this.headClick} style={{ padding: accordion ? 16 : '16px 16px 16px 31px' }}>
          {
            expandIcon?.({ isActive: show })
          }
          {header}
          <span className={`${prefix}-header-extra`}>
            {extra?.({ isActive: show })}
          </span>
        </div>
        <div className={contentClass}>
          <div className={boxClass} style={{ padding: accordion ? '10px 19px' : '10px 10px 10px 31px' }}>{ children }</div>
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
