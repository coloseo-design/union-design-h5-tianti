export const tuple = <T extends string[]>(...args: T) => args;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export interface BaseProps {
  /* class名称 */
  className?: string;
  /* 自定义类前缀 */
  prefixCls?: string;
  /* 屏幕 < 576px 响应式栅格 */
}
