import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider/context';

export interface TagProps extends HTMLAttributes<HTMLElement> {
    prefixCls?: string;
    className?: string;
    style?: React.CSSProperties;
    round?: boolean;
    hollow?: boolean;
    big?: boolean;
    onClick?: React.MouseEventHandler<HTMLElement>;
}

export interface TagState {
  checked:boolean
}

class Tag extends React.Component<TagProps, TagState> {
  constructor(props:TagProps) {
    super(props);
    this.state = {
      checked: false,
    };
  }

    renderTag = ({ getPrefixCls }: ConfigConsumerProps) => {
      const {
        className, prefixCls, children = '', style, round = false, hollow = false, big = false, onClick,
      } = this.props;
      const { checked } = this.state;
      const prefix = getPrefixCls('tag-mobile', prefixCls);
      const clazzName = classNames(prefix, {
        [`${prefix}-round`]: round,
        [`${prefix}-hollow`]: hollow,
      }, className);

      if (big) {
        const clazz = classNames(`${prefix}-big`, {
          [`${prefix}-big-uncheck`]: !checked,
          [`${prefix}-big-checked`]: checked,
        }, className);
        return (
          <span
            className={clazz}
            onClick={(e) => {
              this.setState({ checked: !checked });
              onClick && onClick(e);
            }}
          >
            { children }
          </span>
        );
      }
      return (
        <span className={clazzName} style={{ ...style }}>{children}</span>
      );
    };

    render() {
      return (
        <ConfigConsumer>
          {this.renderTag}
        </ConfigConsumer>
      );
    }
}

export default Tag;
