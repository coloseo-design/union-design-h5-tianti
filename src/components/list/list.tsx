/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Fragment } from 'react';
import classNames from 'classnames';
import ListItem from './item';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider';

export interface ListProps extends React.HTMLAttributes<HTMLDivElement> {
  prefixCls?: string;
  dataSource?: any[];
  itemLayout?: 'vertical' | 'horizontal';
  renderItem?: (item: any, index: number) => React.ReactNode;
  size?: 'default' | 'lg';
}

const defaultRender = () => null;

class List extends React.Component<ListProps> {
  static Item: typeof ListItem;

  renderListItem = ({ getPrefixCls }: ConfigConsumerProps) => {
    const {
      prefixCls,
      dataSource,
      itemLayout,
      renderItem = defaultRender,
      size = 'default',
      className,
      ...rest
    } = this.props;
    const prefix = getPrefixCls('list', prefixCls);
    const mainCls = classNames(prefix, {
      [`${prefix}-${size}`]: size === 'lg',
    }, className);
    return (
      <div {...rest} className={mainCls}>
        {(dataSource || []).map((item, index) => {
          const renderResult = renderItem(item, index);
          if (React.isValidElement(renderResult)) {
            React.cloneElement<any>(renderResult, { itemLayout });
          }
          return (
            <Fragment key={index}>
              {React.isValidElement(renderResult)
                ? React.cloneElement<any>(renderResult,
                  {
                    itemLayout,
                  })
                : renderResult}
            </Fragment>
          );
        })}
      </div>
    );
  };

  render() {
    return (
      <ConfigConsumer>
        {this.renderListItem}
      </ConfigConsumer>
    );
  }
}

List.Item = ListItem;

export default List;
