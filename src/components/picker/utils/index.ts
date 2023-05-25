/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
import { Option } from '../type';

export const getParent = (option: Option | undefined) => {
  const parents = [];
  while (option && option.parent) {
    parents.unshift(option.parent.value);
    option = option.parent;
  }
  return parents;
};

export const getChildren = (option: Option | undefined) => {
  const children = [];
  while (option && option.children && option.children.length) {
    children.push(option.children[0].value);
    // eslint-disable-next-line prefer-destructuring
    option = option.children[0];
  }
  return children;
};

export const getValue = (
  options: Option[],
  key: string,
  parent?: Option,
): Option | undefined => {
  for (let index = 0; index < options.length; index++) {
    const item = options[index];
    if (parent) {
      item.parent = parent;
    }
    if (item.value === key) {
      return item;
    }
    if (item.children) {
      const r: Option | undefined = getValue(item.children || [], key, item);
      if (r) {
        return r;
      }
    }
  }
  return undefined;
};

export const getOptions = (
  options: Option[],
  keys: string[],
  result: Option[][],
) => {
  options.length > 0 && result.push(options);
  const key = keys.shift();
  for (let index = 0; index < options.length; index++) {
    const item = options[index];
    if (key && item.value === key) {
      getOptions(item.children || [], keys, result);
    }
    if (!key && index === 0) {
      getOptions(item.children || [], keys, result);
    }
  }
};

/**
 * 获取Cascader具体选择option值
 * @param values 选中的values
 * @param options 选项
 * @returns
 */
export const getCascaderSelections = (values: string[], options: Option[]) => {
  let list = options;
  const extra = values.reduce((p, c) => {
    const selected = list.find((option) => option.value === c);
    if (selected) {
      list = selected?.children || [];
      p.push({
        key: selected.key,
        value: selected.value,
        title: selected.title,
      });
    }
    return p;
  }, [] as Option[]);
  return extra;
};

/**
 * 获取Picker具体选择option值
 * @param values 选中的values
 * @param options 选项
 * @returns
 */
export const getPickerSelections = (values: string[], options: Option[][]) => {
  const extra = values.reduce((p, c, i) => {
    const selected = options[i].find((option) => option.value === c);
    if (selected) {
      p.push({
        key: selected.key,
        value: selected.value,
        title: selected.title,
      });
    }
    return p;
  }, [] as Option[]);
  return extra;
};

export default {
  getValue,
  getChildren,
  getParent,
  getOptions,
  getCascaderSelections,
  getPickerSelections,
};
