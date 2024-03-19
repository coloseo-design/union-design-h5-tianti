/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import type { DataItem, ChildType } from './type';

export const Reduction = (list: any[] = []) => {
  // 去重
  const last = list.reduce((acc, curr) => {
    if (typeof curr === 'string' && !acc.find((item: any) => item === curr)) {
      acc.push(curr);
    } else if (!acc.find((item: any) => item.key === curr.key)) {
      acc.push(curr);
    }
    return acc;
  }, []);
  return last;
};

export const findAllParentChild = (ps: DataItem[]) => {
  // 查找父级所有的子级
  const ts: ChildType[] = [];
  ps.forEach((item) => {
    ts.push({
      ...item,
      key: item.key,
      childrenList: findChild(item),
    });
  });
  return Reduction(ts);
};
export const findParent = (current: DataItem) => {
  const keys: DataItem[] = [];
  const parent = (data: DataItem) => {
    if (data.parent) {
      keys.push(data.parent);
      parent(data.parent);
    }
  };
  parent(current);
  return Reduction(keys);
};

const child = (data: DataItem, keys: DataItem[]) => {
  if (React.isValidElement(data.children)) {
    getValidElement(data.children, keys);
  } else if (data.children && data.children.length) {
    data.children.forEach((item) => {
      if (React.isValidElement(item)) {
        getValidElement(item, keys);
      } else {
        keys.push(item);
        if (item.children && item.children.length) {
          child(item, keys);
        }
      }
    });
  }
};

export const findChild = (current: DataItem) => {
  const keys: DataItem[] = [];
  child(current, keys);
  return Reduction(keys);
};

const getValidElement = (current: React.ReactElement, keys: DataItem[]) => {
  keys.push({ ...(current.props || {}), key: current.key } as DataItem);
  if ((current.props as DataItem)?.children) {
    child((current.props as DataItem), keys);
  }
};

export const getItem = (data: any, key: string) => {
  let current = {};
  const loopData = (list: any, level = 1, parent: any) => {
    if (React.isValidElement(list)) {
      if (list.key === key) {
        current = {
          ...(list as React.ReactElement).props, key: list.key, level, parent, nodeProps: list.props,
        };
      } else if ((list as React.ReactElement).props?.children && Object.keys(current).length === 0) {
        loopData(
          (list as React.ReactElement).props?.children || [],
          level + 1,
          {
            ...(list as React.ReactElement).props, key: list.key, level, parent,
          },
        );
      }
    } else {
      list.forEach((item: any) => {
        if (React.isValidElement(item)) {
          if (item.key === key) {
            current = {
              ...(item as React.ReactElement).props,
              key: item.key,
              level,
              parent,
              nodeProps: item.props,
            };
          } else if ((item as React.ReactElement).props?.children && Object.keys(current).length === 0) {
            loopData(
              (item as React.ReactElement).props?.children || [],
              level + 1,
              {
                ...(item as React.ReactElement).props, key: item.key, level, parent,
              },
            );
          }
        } else if (item.key === key) {
          current = {
            ...item, level, parent, nodeProps: item,
          };
        } else if (item.children && item.children.length && Object.keys(current).length === 0) {
          loopData(item.children, level + 1, item);
        }
      });
    }
  };

  loopData(data || [], 1, null);
  return current;
};

export const isInclude = (arr1: any[], arr2: any[]) => arr2.every((val) => arr1.includes(val));

export const noInclude = (arr1: any[], arr2: any[]) => arr2.some((val) => !arr1.includes(val));

export const deleteExtraPro = (obj: any = {}) => {
  delete obj.parent;
  delete obj.dataChildren;
  delete obj.nodeKey;
  delete obj.onIconClick;
  delete obj.onTitleClick;
  delete obj.originProps;
  delete obj.parent;
  delete obj.level;
  return obj;
};
