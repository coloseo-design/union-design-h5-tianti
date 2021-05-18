/* eslint-disable no-multi-assign */
/* eslint-disable no-sequences */
/* eslint-disable eqeqeq */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-param-reassign */
export type ColorRGBA = [
    /** 红色 范围 0-255 */
    R: number,
    /** 绿色 范围 0-255 */
    G: number,
    /** 蓝色 范围 0-255 */
    B: number,
    /** 透明度 范围 0-100 */
    A?: number
];

export type ColorHSLA = [
    /** 色调 范围 0-360 */
    H: number,
    /** 饱和度 范围 0-100 */
    S: number,
    /** 亮色 范围 0-100 */
    L: number,
    /** 透明度 范围 0-100 */
    A?: number
];

export const rgbaToHsla = ([r, g, b, a = 100]: ColorRGBA): ColorHSLA => {
  let h = 0; let s = 0; let
    l = 0;
  r /= 255, g /= 255, b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);

  l = (max + min) / 2;

  if (l === 0 || max === min) s = 0;
  else if (l > 0 && l <= 0.5) s = (max - min) / (max + min);
  else if (l > 0.5) s = (max - min) / (2 - (max + min));

  if (max === min) h = 0;
  else if (max === r && g >= b) h = 60 * ((g - b) / (max - min));
  else if (max === r && g < b) h = 60 * ((g - b) / (max - min)) + 360;
  else if (max === g) h = 60 * ((b - r) / (max - min)) + 120;
  else if (max === b) h = 60 * ((r - g) / (max - min)) + 240;

  return [h > 360 ? 360 : h < 0 ? 0 : h, s * 100, l * 100, a];
};

export const hslaToRgba = ([h, s, l, a = 100]: ColorRGBA): ColorHSLA => {
  let r = 0; let g = 0; let
    b = 0;
  h /= 360, s /= 100, l /= 100;

  if (s == 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = function hue2rgb(p: number, q: number, t: number) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [r * 255, g * 255, b * 255, a];
};
