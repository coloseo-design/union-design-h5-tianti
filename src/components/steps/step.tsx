/* eslint-disable object-curly-newline */
/* eslint-disable react/display-name */
/* eslint-disable quotes */
import React, { useLayoutEffect, useRef, useState } from "react";
import { useGetPrefixClass } from "../common/base-component";

export type StepProps = {
  title?: string | React.ReactNode;
  children?: React.ReactNode;
  dotColor?: string;
  isFirst?: boolean;
  isLast?: boolean;
};

export const Step = React.memo<StepProps>((props) => {
  const { title, children, isFirst, isLast, dotColor } = props ?? {};
  const getPrefixClass = useGetPrefixClass("stepv2");
  const dotRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    if (dotRef.current?.offsetHeight) {
      setHeight(dotRef.current?.offsetHeight);
    }
  }, [height]);

  return (
    <div className={getPrefixClass()}>
      <div className={getPrefixClass("left")}>
        <div
          className={getPrefixClass("up-line")}
          style={{ height: height / 2 + 16 }}
          hidden={isFirst}
        />
        <div className={getPrefixClass("dot")} />
        <div
          className={getPrefixClass("down-line")}
          style={{ top: height }}
          hidden={isLast}
        />
      </div>
      <div className={getPrefixClass("right")}>
        <div
          className={getPrefixClass("title")}
          ref={dotRef}
          style={{ borderColor: dotColor }}
        >
          {title}
        </div>
        {children}
      </div>
    </div>
  );
});
