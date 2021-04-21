/* eslint-disable camelcase */
import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import Icon from '../icon';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider/context';

// export interface CollapsePanelProps {
//     key?: number;
//     header?:React.ReactNode;
//     className?: string;
//     prefixCls?: string;
//     style?: CSSProperties;
//     showArrow?:boolean;
//     collapsible?:boolean
// }

export interface CollapsePanelProps {
    header?:React.ReactNode;
    key?:number;
    onChange?:(value:number| undefined, show:boolean) => void;
    className?: string;
    prefixCls?: string;
    style?: CSSProperties;
}

export interface CollapsePanelState {
    show?:boolean;
    style?:CSSProperties;
    accordion?:boolean;
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
      const { onChange, key } = this.props;
      this.setState({
        show: !show,
      });
      if (onChange) {
        onChange(key, !show);
      }
    };

    renderCollapsePanel = ({ getPrefixCls }: ConfigConsumerProps) => {
      const {
        prefixCls,
        header,
        className,
        children,
        style: styles,
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
          <div className={headerClass} onClick={this.headClick}>
            {
              !accordion && <Icon type="fill-right" style={{ transform: show ? 'rotate(90deg)' : '' }} />
            }
            <div style={{ display: 'inline-block', paddingLeft: accordion ? 0 : 9 }}>{header}</div>
            {
              accordion && <Icon type="right-circle" style={{ transform: show ? 'rotate(-90deg)' : 'rotate(90deg)' }} />
            }
          </div>
          <div className={contentClass}>
            <div className={boxClass}>{ children }</div>
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
