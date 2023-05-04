/* eslint-disable object-curly-newline */
/* eslint-disable react/display-name */
/* eslint-disable quotes */
import React from "react";
import { useClassNames, useGetPrefixClass } from "../common/base-component";
import Icon from "../icon";

export type CapsuleProps = {
  className?: string;
  style?: React.CSSProperties;
  /** 点击关闭 */
  onClose?: () => void;
  /** 点击选项 */
  onOption?: () => void;
};

const Capsule = React.memo<CapsuleProps>((props) => {
  const { className, style, onClose, onOption } = props ?? {};
  const getPrefixClass = useGetPrefixClass("capsule");
  const classnames = useClassNames();

  return (
    <div className={classnames(getPrefixClass(), className)} style={style}>
      <div className={getPrefixClass("left")} onClick={onOption}>
        <Icon type="more-line" style={{ fontSize: 32 }} />
      </div>
      <div className={getPrefixClass("split")} />
      <div className={getPrefixClass("right")} onClick={onClose}>
        <Icon type="close" style={{ fontSize: 25 }} />
      </div>
    </div>
  );
});

export default Capsule;
