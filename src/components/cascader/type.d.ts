import React from 'react';
import { Option } from '../picker/type';

export interface CascaderProps {
  options: Option[];
  titles: (string | React.ReactNode)[];
  /* 点击取消，X 事件 */
  onCancel?: (e: React.MouseEvent<HTMLElement>) => void;
  /* 点击确认按钮 */
  onOk?: (e: React.MouseEvent<HTMLElement>) => void;
  visible: boolean;
  itemHeight?: number;
  visibleItemCount?: number;
  onChange: (values: string[]) => void;
  value: string[];
}
