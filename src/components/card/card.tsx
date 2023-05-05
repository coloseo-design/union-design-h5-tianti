/* eslint-disable object-curly-newline */
/* eslint-disable react/display-name */
/* eslint-disable quotes */
import React from "react";
import { useClassNames, useGetPrefixClass } from "../common/base-component";

export type CardProps = {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

const Card = React.memo<CardProps>((props) => {
  const { className, style, children } = props ?? {};
  const getPrefixClass = useGetPrefixClass("card");
  const classnames = useClassNames();

  return (
    <div className={classnames(getPrefixClass(), className)} style={style}>
      {children}
    </div>
  );
});

export default Card;
