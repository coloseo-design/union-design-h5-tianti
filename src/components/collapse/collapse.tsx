import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider/context';
import CollapsePanel from './collapsePanel';
import Icon from '../icon';

export interface expandIconProps {
  isActive: boolean;
}

export interface CollapseProps extends Omit<HTMLAttributes<HTMLElement>, 'onChange'> {
    activeKey?:number;
    defaultActiveKey?:number;
    onChange?:(value:number| undefined, show:boolean) => void;
    className?: string;
    prefixCls?: string;
    accordion?: boolean;
    style?: {[key: string]: unknown};
    /** 自定义切换图标 */
    expandIcon?: (info: expandIconProps) => React.ReactNode;
}

class Collapse extends React.Component<CollapseProps> {
    static Panel = CollapsePanel;

    renderCollapse = ({ getPrefixCls }: ConfigConsumerProps) => {
      const {
        prefixCls,
        className,
        defaultActiveKey,
        activeKey,
        style,
        children,
        accordion,
        expandIcon = ({ isActive }) => (<Icon type="fill-right" style={{ transform: isActive ? 'rotate(90deg)' : 'none', marginRight: 12 }} />),
      } = this.props;
      const prefix = getPrefixCls('collapse-mobile', prefixCls);
      const clazzName = classNames(prefix, {
        [`${prefix}-accordion`]: accordion,
      }, className);
      return (
        <div className={clazzName} style={{ ...style }}>
          {
          React.Children.map(children, (item:React.ReactNode, index:number) => {
            if (item && typeof item === 'object' && 'props' in item) {
              const key = item.key ? parseInt(`${item.key}`, 10) : index;
              const props = {
                show: key === defaultActiveKey || key === activeKey,
                accordion,
                /** 自定义切换图标 */
                expandIcon,
                ...item.props,
              };
              return <CollapsePanel {...props} />;
            }
            return null;
          })
          }
        </div>
      );
    };

    render() {
      return (
        <ConfigConsumer>
          {this.renderCollapse}
        </ConfigConsumer>
      );
    }
}

Collapse.Panel = CollapsePanel;

export default Collapse;
