/* eslint-disable react/no-array-index-key */
import React, { Component, CSSProperties } from 'react';
import classNames from 'classnames';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider/context';
import { Row, Col } from '../grid';
import Icon from '../icon';

// function groupList(array: Array<unknown>, subGroupLength: number) {
//   let index = 0;
//   const newArray = [];
//   while (index < array.length) {
//     newArray.push(array.slice(index, index += subGroupLength));
//   }
//   return newArray;
// }

export interface BaseGridLayoutProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'data' | 'onClick'> {
  // 传入的菜单数据
  data?: Array<{icon: unknown, text: unknown}>;
  // 点击每个菜单的回调函数
  onClick?: (el: {icon: unknown, text: unknown}, index: number) => void;
  // 列数
  columnNum?: number;
  // 自定义每个 grid 条目的创建函数
  renderItem?: (el: {icon: unknown, text: unknown}, index: number) => JSX.Element;
  // 每个格子自定义样式
  itemStyle?: CSSProperties;
}

class GridLayout extends Component<BaseGridLayoutProps> {
  renderGridLayout = ({ getPrefixCls }: ConfigConsumerProps) => {
    const {
      prefixCls,
      className,
      data = [],
      columnNum = 4,
      itemStyle,
      renderItem,
      onClick,
      ...rest
    } = this.props;
    const prefix = getPrefixCls('grid-layout', prefixCls);
    const mainClass = classNames(prefix, className, {
      // [`${prefix}-hasLine`]: hasLine,
    });

    // const propsData = groupList(data, columnNum);

    const itemNode = (item: unknown, idx: number) => {
      if (renderItem) {
        return renderItem(item, idx);
      }
      return (
        <>
          {item.icon && <Icon type={item.icon} />}
          <div>{item.text}</div>
        </>
      );
    };

    const handleClick = (el: { icon: unknown; text: unknown; }, index: number) => () => {
      if (onClick) {
        onClick(el, index);
      }
    };

    return (
      <div {...rest} className={mainClass}>
        {/* {(propsData || []).map((element, index) => (
          <Row key={index}>
            {(element || []).map((item, idx) => (
              <Col style={itemStyle} span={12 / columnNum} key={idx}>
                {itemNode(item, idx)}
              </Col>
            ))}
          </Row>
        ))} */}
        <Row>
          {data.map((item, idx) => (
            <Col style={itemStyle} span={12 / columnNum} key={idx} onClick={handleClick(item, idx)}>
              {itemNode(item, idx)}
            </Col>
          ))}
        </Row>
      </div>
    );
  };

  render() {
    return (
      <ConfigConsumer>
        {this.renderGridLayout}
      </ConfigConsumer>
    );
  }
}

export default GridLayout;
