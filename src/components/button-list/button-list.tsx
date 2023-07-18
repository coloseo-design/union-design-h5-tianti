/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-key */
/* eslint-disable object-curly-newline */
/* eslint-disable react/display-name */
/* eslint-disable quotes */
import React, { ReactNode } from "react";
import { useClassNames, useGetPrefixClass } from "../common/base-component";
import Icon from "../icon";
import Button from "../button";
import Actions from './actions';

export type ButtonListProps = {
  className?: string;
  style?: React.CSSProperties;
  iconButtonList?: (
    | {
        type: string | ReactNode;
        name: string;
        onClick?: () => void;
      }
    | React.ReactNode
  )[];
  buttonList?: (
    | React.ReactNode
    | {
        type?: string;
        name: string;
        onClick?: () => void;
      }
  )[];
  type?: 'default' |'text',
  leftText?: string | ReactNode,
};

let uid = 0;

const ButtonList = React.memo<ButtonListProps>((props) => {
  const {
    className,
    style,
    iconButtonList = [],
    buttonList = [],
    type = 'default',
    leftText,
  } = props ?? {};
  const getPrefixClass = useGetPrefixClass("buttonlist");
  const classnames = useClassNames();

  return (
    <div
      className={classnames(getPrefixClass(), {
        [`${getPrefixClass()}-text`]: type === 'text',
      }, className)}
      style={style}
    >
      {type === 'default' && iconButtonList.map((item) => (
        <div
          className={getPrefixClass("icon")}
          key={`${uid++}`}
          onClick={(item as any)?.onClick}
        >
          {React.isValidElement(item) ? (
            item
          ) : (
            <>
              {React.isValidElement((item as any).type) ? (item as any).type : <Icon type={(item as any).type} style={{ fontSize: 16 }} />}
              <div>{(item as any).name}</div>
            </>
          )}
        </div>
      ))}
      {type === 'text' && leftText}
      {buttonList.map((item: any) => (
        <div className={getPrefixClass("btn")} key={`${uid++}`}>
          {React.isValidElement(item) ? (
            item
          ) : (
            <Button block type={item.type} onClick={item?.onClick}>
              {item.name}
            </Button>
          )}
        </div>
      ))}
    </div>
  );
});

const ButtonListComposed = ButtonList as typeof ButtonList & {
  Actions: typeof Actions;
};

ButtonListComposed.Actions = Actions;

export default ButtonListComposed;
