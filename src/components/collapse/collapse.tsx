import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider/context';
import CollapsePanel from './collapsePanel';
import Icon from '../icon';

export interface expandIconProps {
  isActive: boolean;
  key?: number | string;
  header?: React.ReactNode;
}

export interface CollapseProps extends Omit<HTMLAttributes<HTMLElement>, 'onChange'> {
  activeKey?: number;
  defaultActiveKey?: number;
  onChange?: (value: number | undefined, show: boolean) => void;
  className?: string;
  prefixCls?: string;
  accordion?: boolean;
  /** 自定义切换图标 */
  expandIcon?: (info: expandIconProps) => React.ReactNode;
  size?: 'md' | 'default',
}

class Collapse extends React.Component<CollapseProps> {
  static Panel = CollapsePanel;

  renderCollapse = ({ getPrefixCls }: ConfigConsumerProps) => {
    const {
      prefixCls,
      className,
      defaultActiveKey,
      activeKey,
      children,
      accordion,
      size = 'default',
      onChange,
      expandIcon,
      ...rest
    } = this.props;
    const prefix = getPrefixCls('collapse-mobile', prefixCls);
    const mainCls = classNames(prefix, {
      [`${prefix}-accordion`]: accordion,
      [`${prefix}-${size}`]: size === 'md',
    }, className);

    const expandIconT = ({ isActive }: {isActive: boolean}) => (<Icon type="fill-right" style={{ transform: isActive ? 'rotate(90deg)' : 'none', marginRight: 8 }} />);

    return (
      <div {...rest} className={mainCls}>
        {
          React.Children.map(children, (item: React.ReactNode, index: number) => {
            if (item && typeof item === 'object' && 'props' in item) {
              const key = item.key ? parseInt(`${item.key}`, 10) : index;
              const props = {
                show: key === defaultActiveKey || key === activeKey,
                accordion,
                onChange: onChange?.bind(null, key),
                /** 自定义切换图标 */
                expandIcon: expandIcon || expandIconT,
                currentKey: key,
                size,
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
