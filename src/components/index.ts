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
export { default as Icon } from './icon';
export { default as Button } from './button';
export { default as Checkbox } from './checkbox';
export { default as Radio } from './radio';
export { default as DropdownMenu, DropdownItem } from './dropdown-menu';
export { default as Filed } from './field';
export { default as Loading } from './loading';
export { default as Praise } from './praise';
export { default as Steps } from './steps';
export { default as Search } from './search';
export { default as Toast } from './toast';
export { default as Layout } from './layout';
export { default as GridLayout } from './grid-layout';
export { default as Cell } from './cell';

// 廖银菊
export { default as Popup } from './popup';
export { default as Picker } from './picker';
export { default as TimePicker } from './time-picker';
export { default as DatePicker } from './date-picker';
export { default as List } from './list';
export { default as Cascader } from './cascader';
export { Row, Col } from './grid';
export { default as ActionSheet } from './action-sheet';
export { default as Form } from './form';

// liuyang
export { default as Dialog } from './dialog';
export { default as NoticeBar } from './notice-bar';
export { default as Overlay } from './overlay';
export { default as ImagePreview } from './image-preview';
export { default as Swipe } from './swipe';
export { default as IndexBar } from './index-bar';
export { default as Tabbar } from './tabbar';
export { default as Skeleton } from './skeleton';
export { default as SwipeCell } from './swipe-cell';
export { default as Tab } from './tab';
export { default as Uploader } from './uploader';

//
export { default as Collapse } from './collapse';
export { default as Avatar } from './avatar';
export { default as Tag } from './tag';
export { default as Divider } from './divider';
export { default as Switch } from './switch';
export { default as Popover } from './pop-over';
export { default as Slider } from './slider';
export { default as NavBar } from './nav-bar';

export { default as Empty } from './empty';
export { default as NumberKeyBoard } from './number-key-board';
export { default as PullRefresh } from './pull-refresh';
