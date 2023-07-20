/* eslint-disable no-unneeded-ternary */
/* eslint-disable object-curly-newline */
/* eslint-disable indent */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable no-nested-ternary */
import React, { HTMLAttributes } from "react";
import classNames from "classnames";
import Icon from "../icon";
import {
  ConfigConsumer,
  ConfigConsumerProps,
} from "../config-provider/context";

export interface BaseAvatarProps extends HTMLAttributes<HTMLElement> {
  src?: string | React.ReactNode;
  text?: string;
  size?: number;
  className?: string;
  prefixCls?: string;
  style?: { [key: string]: unknown };
  type?: "success" | "error" | "info";
  icon?: string;
  iconColor?: string;
  close?: boolean;
}

class Avatar extends React.Component<BaseAvatarProps> {
  getBadge = (prefix: string) => {
    const { type, size = 32, icon, iconColor } = this.props;
    const w = size <= 32 ? 10 : Math.ceil(size / 3.3) - 2;
    const iconType = icon
      ? icon
      : type === "success"
      ? "checkout"
      : type === "error"
      ? "close"
      : "more";

    return (
      <div
        className={`${prefix}-sub ${prefix}-sub-${type}`}
        style={{
          backgroundColor: iconColor,
          width: w,
          height: w,
          verticalAlign: "middle",
          display: "inline-block",
        }}
      >
        <Icon
          type={iconType}
          style={{ fontSize: w - 2, display: "block", marginTop: 1 }}
        />
      </div>
    );
  };

  getClose = (prefix: string) => {
    const { size = 32 } = this.props;
    const w = size < 32 ? 10 : Math.ceil(size / 2);
    return (
      <div
        className={`${prefix}-close`}
        style={{
          width: w - 2,
          height: w - 2,
        }}
      >
        <Icon type="close1-surface" style={{ fontSize: w - 2 }} />
      </div>
    );
  }

  renderAvatar = ({ getPrefixCls }: ConfigConsumerProps) => {
    const {
      prefixCls,
      className,
      size,
      text,
      style,
      children,
      type,
      src,
      icon,
      close,
    } = this.props;

    const prefix = getPrefixCls("avatar-mobile", prefixCls);

    const clazzName = classNames(
      prefix,
      {
        [`${prefix}-badge`]: type || icon || close,
      },
      className
    );
    // 初始宽高 或  外部传入size
    const [w, h] = size ? [size, size] : [32, 32];
    const fontSize = w <= 20 ? 12 : Math.ceil(w / 2.56);
    let srcNode = null;
    if (src && React.isValidElement(src)) {
      srcNode = src;
    } else if (src && typeof src === "string") {
      srcNode = <img src={src} alt="" />;
    }

    return (
      <span
        className={clazzName}
        style={{
          ...style,
          width: w,
          height: h,
          lineHeight: `${h}px`,
          fontSize,
        }}
      >
        {srcNode || text || children}
        {(type || icon) && this.getBadge(prefix)}
        {close && this.getClose(prefix)}
      </span>
    );
  };

  render() {
    return <ConfigConsumer>{this.renderAvatar}</ConfigConsumer>;
  }
}

export default Avatar;
