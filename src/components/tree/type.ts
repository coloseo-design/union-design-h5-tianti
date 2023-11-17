/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import { ReactNode, createContext } from 'react';

export type DataItem = {
  key: string;
  icon?: string | ReactNode;
  title: string | ReactNode;
  multiple?: boolean;
  children?: DataItem[];
  rightIcon?: string;
  [x: string]: any;
}

export type ChildType = {childrenList: DataItem[] } & DataItem;

type Open = { isOpen: boolean, key: string };

export interface TreeProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect' |'onChange'> {
  defaultSelectedKeys?: string[]
  selectedKeys?: string[];
  defaultOpenKeys?: string[];
  openKeys?: string[];
  data?: DataItem[];
  multiple?: boolean;
  children?: any;
  onSelect?: (key: string, item: DataItem) => void;
  onChange?: (keys: string[], items: DataItem[]) => void,
  onOpenChange?: (keys: string[], open: Open) => void;
  onTitleClick?: (obj: any, e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  onIconClick?: (obj: any, e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export interface TreeContextProps {
  openKeys: string[];
  onSelect: (key: string, item: any) => void;
  handleOpen: (key: string) => void;
  multiple: boolean;
  selectInfo: DataItem[];
}

export const TreeContext = createContext<TreeContextProps>({
  openKeys: [],
  onSelect: () => {},
  handleOpen: () => {},
  multiple: true,
  selectInfo: [],
});
