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
        onClick: () => void;
      }
    | React.ReactNode
  )[];
  buttonText?: string;
  onButtonClick?: () => void;
};

let uid = 0;

const ButtonList = React.memo<ButtonListProps>((props) => {
  const {
    className,
    style,
    iconButtonList = [],
    onButtonClick,
    buttonText,
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
      <Button type="primary" block onClick={onButtonClick}>
        {buttonText}
      </Button>
    </div>
  );
});

export default ButtonList;
