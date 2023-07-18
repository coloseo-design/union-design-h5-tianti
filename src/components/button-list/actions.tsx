/* eslint-disable react/no-array-index-key */
import React, {
  HTMLAttributes, ReactNode, useContext, isValidElement,
} from 'react';
import { ConfigContext } from '../config-provider/context';
import Icon from '../icon';

export interface ButtonListActionProps extends HTMLAttributes<HTMLDivElement> {
  list: {
    name: string | ReactNode,
    icon: string | ReactNode,
    onClick?: () => void;
  }[],
}

const Actions: React.FC<ButtonListActionProps> = (props: ButtonListActionProps) => {
  const { list = [], ...rest } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  const prefix = getPrefixCls('buttonlist-actions');
  return (
    <div {...rest} className={prefix}>
      {list.map((item, index) => (
        <div key={index} className={`${prefix}-item`}>
          {isValidElement(item.icon) ? item.icon : <Icon type={item.icon as string} />}
          <div className={`${prefix}-name`}>{item.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Actions;
