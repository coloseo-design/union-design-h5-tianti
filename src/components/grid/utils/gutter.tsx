/* eslint-disable import/prefer-default-export */
import { GridMediaQueryResult, breakpoints } from './grid-media-query';

export const getGutter = (gutter: unknown, screens: GridMediaQueryResult) => {
  const gutters = [0, 0]; // [水平， 垂直]
  const formatedGutter = Array.isArray(gutter) ? gutter : [gutter, 0];
  formatedGutter.forEach((item, index) => {
    // [{xs: 8, xxl: 200}, {xs: 20, xxl: 300}];
    if (typeof item === 'object') {
      breakpoints.forEach((breakpoint) => {
        if (screens[breakpoint] && typeof item[breakpoint] !== 'undefined') {
          gutters[index] = item[breakpoint];
        }
      });
    } else {
      gutters[index] = item || 0;
    }
  });
  return gutters;
};
