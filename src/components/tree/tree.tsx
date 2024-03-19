/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, {
  useMemo, useContext, useState, useEffect, useRef,
} from 'react';
import TreeNode from './tree-node';
import { ConfigContext } from '../config-provider/context';
import {
  DataItem, TreeProps, TreeContext, ChildType,
} from './type';
import {
  findChild, findParent, findAllParentChild, getItem, Reduction, isInclude, noInclude, deleteExtraPro,
} from './utils';

const Tree: React.FC<TreeProps> = (props: TreeProps) => {
  const {
    selectedKeys,
    openKeys,
    data,
    multiple = true,
    onSelect,
    onChange,
    children,
    onOpenChange,
    defaultSelectedKeys,
    defaultOpenKeys,
    onTitleClick,
    onIconClick,
    ...rest
  } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  const prefix = getPrefixCls('tree');
  const [opens, setOpen] = useState<string[]>(openKeys || defaultOpenKeys || []);
  const [selectInfo, setInfo] = useState<DataItem[]>([]);

  const getParCh = (chose: any[], origin: any[]) => {
    const par: any[] = [];
    const ch: any[] = [];
    chose.forEach((item) => {
      par.push(...findParent(item));
      ch.push(...findChild(item));
      origin.push(item);
    });
    origin.push(...ch);
    findAllParentChild(par).forEach((item: any) => {
      const a1 = Reduction(origin).map((i: any) => i.key);
      const a2 = item.childrenList.map((i: any) => i.key);
      if (isInclude(a1, a2)) {
        origin.push(item);
      }
    });
    return origin;
  };

  const lock = useRef(0);
  useEffect(() => {
    const t = selectedKeys || defaultSelectedKeys || [];
    if (t.length) {
      const temp: any[] = [];
      const list: string[] = lock.current === 0 ? t : selectedKeys || [];
      const source = data || children || [];
      list.forEach((item) => { temp.push(getItem(source as any[], item)); });
      if (data?.length === 0 && lock.current === 0) {
        setInfo(t.map((i) => ({ key: i, title: '' })));
      } else {
        setInfo(multiple ? [...Reduction(getParCh(temp, []))] : temp);
      }
    }
    lock.current = 1;
  }, [selectedKeys]);

  useEffect(() => {
    if (openKeys) {
      setOpen(openKeys || []);
    }
  }, [openKeys]);

  const handleOpen = (key: string) => {
    let t = [...opens];
    let isOpen = false;
    if (opens.includes(key)) {
      t = opens.filter((i) => i !== key);
      isOpen = false;
    } else {
      t.push(key);
      isOpen = true;
    }
    onOpenChange?.(t, { isOpen, key });
    if (typeof openKeys === 'undefined') {
      setOpen([...t]);
    }
  };

  const MultipleChoice = (key: string, current: DataItem) => {
    let temp = [...selectInfo];
    const child: DataItem[] = findChild(current); // 当前数据的子级
    const parent: DataItem[] = findParent(current); // 当前数据的父级
    const parentChild: ChildType[] = findAllParentChild(parent); // 当前数据父级的所有子级
    if (selectInfo.find((i) => i.key === key)) {
      // 父级取消子级也要取消选中
      temp = selectInfo.filter((i) => i.key !== key && !child.map((j) => j.key).includes(i.key));
      if (current.parent) { // 子级取消一个父级也要取消
        (parentChild || []).forEach((item) => {
          const a1 = temp.map((i) => i.key);
          const a2 = item.childrenList.map((i) => i.key);
          if (noInclude(a1, a2)) {
            temp = temp.filter((i) => i.key !== item.key);
          }
        });
      }
    } else {
      temp.push(current);
      temp.push(...child);
      if (current.parent) { // 如果父级的子级都被选中，父级也要被选中
        (parentChild || []).forEach((item) => {
          const a1 = Reduction(temp.map((i) => i.key));
          const a2 = item.childrenList.map((i) => i.key);
          if (isInclude(a1, a2)) {
            temp.push(item);
          }
        });
      }
      onSelect?.(key, deleteExtraPro(current.originProps) ?? current);
    }

    const lT = Reduction(temp);
    if (typeof selectedKeys === 'undefined') {
      setInfo(lT);
    }
    onChange?.(lT.map((i: any) => i.key), lT.map((i: any) => deleteExtraPro(i.originProps ?? i)));
  };

  const SingleChoice = (key: string, current: DataItem) => {
    if (!selectInfo.find((i) => i.key === key)) {
      if (typeof selectedKeys === 'undefined') {
        setInfo([current]);
      }
      onChange?.([key], [deleteExtraPro(current.originProps)]);
      onSelect?.(key, deleteExtraPro(current.originProps));
    }
  };

  const handleSelect = (key: string, current: DataItem) => {
    if (multiple) {
      MultipleChoice(key, current);
    } else {
      SingleChoice(key, current);
    }
  };

  const renderData = (list: DataItem[] = [], level = 1, parent: DataItem | null) => (
    <>
      {list.map((item) => {
        const t = { ...item };
        Object.assign(item, {
          level,
          parent,
          nodeKey: item.key,
          dataChildren: item.children,
          originProps: t,
          onTitleClick,
          onIconClick,
        });
        return (
          <TreeNode {...item} key={item.key}>
            {item.children && item.children.length > 0 && renderData(item.children, level + 1, item)}
          </TreeNode>
        );
      })}
    </>
  );

  const renderChildren = (option: any, level = 1, parent: DataItem | null) => (
    <>
      {React.Children.map(option, (child) => {
        const nodeProps = {
          ...child.props,
          key: child.key,
          nodeKey: child.key,
          title: child.props.title,
          dataChildren: child.props.children,
          parent,
          level,
          originProps: child.props || {},
          onTitleClick,
          onIconClick,
        };
        return (
          <TreeNode {...nodeProps} key={child.key}>
            {child.props.children && renderChildren(child.props.children, level + 1, nodeProps)}
          </TreeNode>
        );
      })}
    </>
  );

  const renderChild = useMemo(() => {
    if (data && data.length > 0) {
      return renderData(data, 1, null);
    }
    if (children) {
      return renderChildren(children, 1, null);
    }
    return null;
  }, [data, children]);

  return (
    <div {...rest} className={prefix}>
      <TreeContext.Provider
        value={{
          handleOpen,
          onSelect: handleSelect,
          openKeys: opens,
          multiple,
          selectInfo,
        }}
      >
        {renderChild}
      </TreeContext.Provider>
    </div>
  );
};

const ComposedTree = Tree as typeof Tree & {
  TreeNode: typeof TreeNode;
};

ComposedTree.TreeNode = TreeNode;

export default ComposedTree;
