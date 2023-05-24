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

export default {
  getValue,
  getChildren,
  getParent,
  getOptions,
};
