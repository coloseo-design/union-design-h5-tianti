/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */
/* eslint-disable react/display-name */
/* eslint-disable quotes */
import React, { ReactNode } from "react";
import { useClassNames, useGetPrefixClass } from "../common/base-component";
import { cacheFunc } from "../utils/cacheFunc";
import Uploader from "../uploader";
import Button from "../button";
import Icon from "../icon";

const handleIcon = cacheFunc(((fileName: string) => {
  const nameArr = fileName.split(".");
  const conf = Uploader.Config;

  if (nameArr.length > 1) {
    const ext = nameArr[nameArr.length - 1].toLocaleLowerCase();
    const { icon } =
      Object.values(conf ?? {}).find((item) => item?.exts?.includes(ext)) ?? {};

    if (icon) return icon;
    return <div />;
  }
  return <div />;
}) as any);

let uid = 0;

export type FileProps = {
  className?: string;
  style?: React.CSSProperties;
  name?: string;
  desc?: string;
  closeEnable?: boolean;
  onClose?: () => void;
  btnList?: { name: string; onClick: () => void }[];
  iconRender?: (name: string, icon: ReactNode | undefined) => ReactNode;
  type?: 'default' |'text';
};

const File = React.memo<FileProps>((props) => {
  const {
    className,
    style,
    name,
    desc,
    closeEnable = false,
    onClose,
    btnList = [],
    iconRender,
    type = 'default',
  } = props ?? {};
  const getPrefixClass = useGetPrefixClass("file");
  const classnames = useClassNames();
  const icon = iconRender ? iconRender(name ?? "", handleIcon(name)) : handleIcon(name);

  return (
    <div
      className={classnames(getPrefixClass(), {
        [`${getPrefixClass()}-${type}`]: type === 'text',
      }, className)}
      style={style}
    >
      <div className={getPrefixClass("icon")}>{icon}</div>
      <div className={getPrefixClass("content")}>
        <div className={getPrefixClass("name")}>{name}</div>
        {type === 'default' && <div className={getPrefixClass("desc")}>{desc}</div>}
      </div>
      <div className={getPrefixClass("opt")}>
        {btnList.map((item) => (
          <Button
            key={uid++}
            size="small"
            type="light"
            onClick={item.onClick}
          >
            {item.name}
          </Button>
        ))}
        {closeEnable && (
          <div onClick={onClose}>
            <Icon type="close1-surface" style={{ fontSize: 16 }} />
          </div>
        )}
      </div>
    </div>
  );
});

export default File;
