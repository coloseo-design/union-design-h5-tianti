import React from 'react';
import classNames from 'classnames';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider/context';
import svgType from './emptySvg';

export interface EmptyProps {
  type?: 'ThereWasNothing' | 'TakeACoffeeBreak' | 'NoPermission' | 'SearchForSomethingElse' | 'HighlyEfficientWork' | 'ThePageIsMissing' | 'NoBrowsingRecord' | 'NoComment' | 'NoNotice' | 'NoNetwork' | 'NoDataAvailable';
  description?: React.ReactNode;
  prefixCls?: string;
  style?: React.CSSProperties;
  className?: string;
}

class Empty extends React.Component<EmptyProps> {
  renderEmpty = ({ getPrefixCls }: ConfigConsumerProps) => {
    const {
      prefixCls,
      description,
      className,
      type = 'NoDataAvailable',
    } = this.props;
    const prefix = getPrefixCls('empty-mobile', prefixCls);
    const clazzName = classNames(prefix, className);
    const newArry = svgType.filter((item) => item.type === type);
    const { svg = '', label = '' } = newArry[0];
    return (
      <div className={clazzName}>
        <div className={`${prefix}-svg`}>{ svg }</div>
        { description || label }
      </div>
    );
  };

  render() {
    return (
      <ConfigConsumer>
        {this.renderEmpty}
      </ConfigConsumer>
    );
  }
}

export default Empty;
