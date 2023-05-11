/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-key */
/* eslint-disable object-curly-newline */
/* eslint-disable react/display-name */
/* eslint-disable quotes */
import React from "react";
import { useClassNames, useGetPrefixClass } from "../common/base-component";
import Icon from "../icon";
import Button from "../button";

export type ButtonListProps = {
  className?: string;
  style?: React.CSSProperties;
  iconButtonList?: (
    | {
        type: string;
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
};

let uid = 0;

const ButtonList = React.memo<ButtonListProps>((props) => {
  const {
    className,
    style,
    iconButtonList = [],
    buttonList = [],
  } = props ?? {};
  const getPrefixClass = useGetPrefixClass("buttonlist");
  const classnames = useClassNames();

  return (
    <div className={classnames(getPrefixClass(), className)} style={style}>
      {iconButtonList.map((item) => (
        <div
          className={getPrefixClass("icon")}
          key={`${uid++}`}
          onClick={(item as any)?.onClick}
        >
          {React.isValidElement(item) ? (
            item
          ) : (
            <>
              <Icon type={(item as any).type} style={{ fontSize: 16 }} />
              <div>{(item as any).name}</div>
            </>
          )}
        </div>
      ))}
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

export default ButtonList;
