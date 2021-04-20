const ENV = process.env.NODE_ENV;
if (
  ENV !== 'production'
  && ENV !== 'test'
  && typeof console !== 'undefined'
  && console.warn // eslint-disable-line no-console
  && typeof window !== 'undefined'
) {
  // eslint-disable-next-line no-console
  console.warn(
    `You are using a whole package of antd,
      please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.`,
  );
}

// 请在此处导出所有组件
export { default as Button } from './button';
export { default as Checkbox } from './checkbox';
export { default as Radio } from './radio';
export { default as DropdownMenu, DropdownItem } from './dropdown-menu';
export { default as Filed } from './field';
export { default as Loading } from './loading';
export { default as Praise } from './praise';
export { default as Steps } from './steps';

// 廖银菊
export { default as Popup } from './popup';
export { default as Picker } from './picker';

// liuyang
export { default as Dialog } from './dialog';
export { default as NoticeBar } from './notice-bar';
export { default as Overlay } from './overlay';
export { default as ImagePreview } from './image-preview';
export { default as Swipe } from './swipe';
export { default as IndexBar } from './index-bar';
export { default as Tabbar } from './tabbar';
