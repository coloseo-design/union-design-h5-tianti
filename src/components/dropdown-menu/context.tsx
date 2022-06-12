/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import { DropdownMenuState } from './dropdown-menu';

export interface DropDownMenuContextProps {
  prefixCls?: string;
  activeColor?: string;
  dropWrapper: string;
  parentNode?: HTMLDivElement;
  direction?: 'up' | 'down';
  top: number;
  changeParentState: (obj: DropdownMenuState) => void;
  overlay?: boolean;
  getNodeLocation: () => void;
  closeOnClickOverlay?: boolean;
  bodyScroll?: () => void;
  /* 用来辨别展开的是那个dropItem */
  currentTargetId?: string;
  closeOnClickOutside: boolean;
}

export const DropDownMenuContext = React.createContext<DropDownMenuContextProps>({
  prefixCls: '',
  activeColor: '',
  dropWrapper: '',
  direction: 'down',
  top: 0,
  changeParentState: () => {},
  overlay: true,
  getNodeLocation: () => {},
  closeOnClickOverlay: true,
  bodyScroll: () => {},
  closeOnClickOutside: false,
});
