/* eslint-disable react/display-name */
/* eslint-disable quotes */
import React from "react";
import { useGetPrefixClass } from "../common/base-component";
import Icon from "../icon";

export type CapsuleProps = {
  /** 点击关闭 */
  onClose?: () => void;
  /** 点击选项 */
  onOption?: () => void;
};

const Capsule = React.memo<CapsuleProps>((props) => {
  const { onClose, onOption } = props ?? {};
  const getPrefixClass = useGetPrefixClass("capsule");

  return (
    <div className={getPrefixClass()}>
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
