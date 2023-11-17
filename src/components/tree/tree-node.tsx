/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable max-len */
import React, { useContext } from 'react';
import classNames from 'classnames';
import omit from 'omit.js';
import { ConfigContext } from '../config-provider/context';
import Radio from '../radio';
import Icon from '../icon';
import Checkbox from '../checkbox';
import { TreeContext, DataItem } from './type';

export type TreeNodeProps =Partial<
DataItem & Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> & {
  children?: any,
  dataChildren?: DataItem[],
  level?: number,
  nodeKey?: string;
  parent?: DataItem | null;
  disabled?: boolean;
  onTitleClick?: (obj: any, e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  onIconClick?: (obj: any, e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  originProps?: any;
}
>

const TreeNode: React.FC<TreeNodeProps> = (props: TreeNodeProps) => {
  const {
    nodeKey = '',
    title,
    icon = 'transition-line',
    children,
    level = 1,
    rightIcon,
    dataChildren,
    disabled,
    onTitleClick,
    onIconClick,
    originProps,
    ...rest
  } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  const prefix = getPrefixCls('tree-node');
  const {
    openKeys, handleOpen, multiple, onSelect, selectInfo,
  } = useContext(TreeContext);

  const selectedKeys = selectInfo.map((item) => item.key);

  const handleChange = () => {
    const current = { ...props, key: nodeKey, children: dataChildren };
    delete current.dataChildren;
    delete current.nodeKey;
    delete current?.level;
    onSelect(nodeKey, current);
  };

  const checkProps = {
    disabled,
    onChange: handleChange,
    checked: selectedKeys.includes(nodeKey),
  };

  const omitRest = omit(rest, ['parent']);
  const tem = (Number(level) - 2) * 16;
  const left = level > 2 ? tem : 0;
  return (
    <div
      {...omitRest}
      className={classNames(prefix, {
        [`${prefix}-level${level}`]: level,
        [`${prefix}-leaf`]: !children && level > 1,
        [`${prefix}-selected`]: selectedKeys.includes(nodeKey),
        [`${prefix}-isSingle`]: !multiple,
      })}
    >
      <div className={classNames(`${prefix}-content`)}>
        {multiple && (
        <div className={classNames(`${prefix}-left`)}>
          <Checkbox {...checkProps} />
        </div>
        )}
        <div
          className={classNames(`${prefix}-right`)}
          style={{ paddingLeft: left }}
          onClick={() => {
            if (children) {
              handleOpen(nodeKey);
            } else if (!multiple) {
              handleChange();
            }
          }}
        >
          {icon && level !== 1 && children && (
            <div className={classNames(`${prefix}-prefix-icon`)}>
              {typeof icon === 'string' ? <Icon type={icon} /> : icon }
            </div>
          )}
          <div onClick={(e) => onTitleClick?.(originProps, e)} className={classNames(`${prefix}-title`)}>{title}</div>
          {(children || (!multiple && !children)) && (
            <div className={classNames(`${prefix}-right-icon`)}>
              {children && (
              <Icon
                type={rightIcon || openKeys.includes(nodeKey) ? 'down2-line' : 'right2-line'}
                onClick={(e) => onIconClick?.(originProps, e)}
              />
              )}
              {!children && !multiple && <Radio {...checkProps} />}
            </div>
          )}
        </div>
      </div>
      {openKeys.includes(nodeKey) && children}
    </div>
  );
};

export default TreeNode;
