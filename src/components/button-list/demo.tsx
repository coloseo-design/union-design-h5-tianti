import React from "react";
import { ButtonList } from "../index";
import "./styles/index";
import "../icon/styles/index";

const Demo = () => {
  const iconList = [
    {
      name: "保存",
      type: "popup-window-line",
      onClick: () => console.log("保存"),
    },
    {
      name: "删除",
      type: "delete",
      onClick: () => console.log("删除"),
    },
    {
      name: "更多",
      type: "more",
      onClick: () => console.log("更多"),
    },
    <div
      style={{ height: "100%", width: "100%" }}
      onClick={() => {
        console.log("自定义");
      }}
    >
      自定义
    </div>,
  ];

  return (
    <div style={{ backgroundColor: "rgba(0,0,0,0.02)" }}>
      <ButtonList
        iconButtonList={iconList.slice(0, 1)}
        buttonText="发送"
        onButtonClick={() => console.log("1")}
      />
      <div style={{ height: 20 }} />
      <ButtonList
        iconButtonList={iconList.slice(0, 2)}
        buttonText="发送"
        onButtonClick={() => console.log("2")}
      />
      <div style={{ height: 20 }} />
      <ButtonList
        iconButtonList={iconList.slice(0, 3)}
        buttonText="发送"
        onButtonClick={() => console.log("3")}
      />
      <div style={{ height: 20 }} />
      <ButtonList
        iconButtonList={iconList.slice(0, 4)}
        buttonText="发送"
        onButtonClick={() => console.log("4")}
      />
    </div>
  );
};

export default Demo;
