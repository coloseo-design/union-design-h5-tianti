/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import ListItem from './item';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider';

export interface ListProps {
  prefixCls?: string;
  dataSource?: any[];
  itemLayout?: 'vertical' | 'horizontal';
  renderItem?: (item: any) => React.ReactNode;
  split?: boolean;
  style?: React.CSSProperties;
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
      style,
    } = this.props;
    const prex = getPrefixCls('list', prefixCls);
    return (
      <div className={prex} style={style}>
        {(dataSource || []).map((item, index) => {
          const renderResult = renderItem(item);
          if (React.isValidElement(renderResult)) {
            React.cloneElement(renderResult, { itemLayout });
          }
          return (
            <div key={index}>
              {React.isValidElement(renderResult)
                ? React.cloneElement(renderResult,
                  {
                    itemLayout, isLast: dataSource && index === dataSource.length - 1,
                  })
                : renderResult}
            </div>
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
