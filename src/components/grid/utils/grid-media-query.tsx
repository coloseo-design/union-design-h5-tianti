import { tuple } from '../../utils/type';

export const breakpoints = tuple('xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl');
export type Breakpoint = (typeof breakpoints)[number];
export type BreakPointMap = Partial<Record<Breakpoint, string>>;

// 断点
const breakpointMap: BreakPointMap = {
  xxs: 'screen and (min-width: 375px)',
  xs: 'screen and (min-width: 480px)',
  sm: 'screen and (min-width: 576px)',
  md: 'screen and (min-width: 768px)',
  lg: 'screen and (min-width: 992px)',
  xl: 'screen and (min-width: 1200px)',
  xxl: 'screen and (min-width: 1600px)',
};

const getBreakpointByMedia = (media: string) => {
  const keys = Object.keys(breakpointMap) as Breakpoint[];
  const breakpoint = keys.find((item) => breakpointMap[item] === media);
  return breakpoint;
};

export type GridMediaQueryResult = Partial<Record<Breakpoint, boolean>>;
type GridMediaQuerySubscribeHander = (result: GridMediaQueryResult) => void;

class GridMediaQuery {
  mediaQueryMap: Partial<Record<Breakpoint, MediaQueryList>>;

  handlers: GridMediaQuerySubscribeHander[];

  result: GridMediaQueryResult;

  constructor() {
    this.result = {};
    this.handlers = [];
    const keys = Object.keys(breakpointMap) as Breakpoint[];
    this.mediaQueryMap = keys.reduce((composed, item) => {
      const value = breakpointMap[item];
      const mediaQueryListInstance = window.matchMedia(value as string);
      if (mediaQueryListInstance.matches) {
        this.result = {
          [item]: mediaQueryListInstance.matches,
        };
      }
      Object.assign(composed, {
        [item]: mediaQueryListInstance,
      });
      return composed;
    }, {});
  }

  subscribe(handler: GridMediaQuerySubscribeHander) {
    if (!this.handlers.length) {
      this.register();
    }
    this.handlers.push(handler);
    handler(this.result);
  }

  unsubscribe(handler: GridMediaQuerySubscribeHander) {
    this.handlers = this.handlers.filter((item) => item !== handler);
    if (!this.handlers.length) {
      this.unregister();
    }
  }

  dispatch(result: GridMediaQueryResult) {
    this.result = result;
    this.handlers.forEach((handler) => handler(result));
  }

  listener = (evt: MediaQueryListEvent) => {
    const { media, matches } = evt;
    const breakpoint = getBreakpointByMedia(media);
    if (breakpoint) {
      const result: GridMediaQueryResult = {
        [breakpoint]: matches,
      };
      this.dispatch(result);
    }
  }

  register() {
    const keys = Object.keys(this.mediaQueryMap) as Breakpoint[];
    keys.forEach((item) => {
      const instance = this.mediaQueryMap[item] as MediaQueryList;
      instance.addEventListener('change', this.listener);
    });
  }

  unregister() {
    const keys = Object.keys(this.mediaQueryMap) as Breakpoint[];
    keys.forEach((item) => {
      const instance = this.mediaQueryMap[item] as MediaQueryList;
      instance.removeEventListener('change', this.listener);
    });
  }
}

// 构造一个单利
const gridQueryInstance: GridMediaQuery = new GridMediaQuery();
export default gridQueryInstance;
