import React from "react";
import { ButtonList, Icon, Checkbox } from "../index";
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
  ];

  const buttonList = [
    {
      name: "发送",
      onClick: () => console.log("发送"),
    },
    {
      name: "按钮",
      type: "primary",
      onClick: () => console.log("按钮"),
    },
  ];

  const list = [
    {
      name: '文字',
      icon: 'setting-line',
    },
    {
      name: '文字',
      icon: 'setting-line',
    },
    {
      name: '文字',
      icon: 'setting-line',
    },
    {
      name: '文字',
      icon: 'setting-line',
    },
    {
      name: '文字',
      icon: <Icon type="setting-line" style={{ fontSize: 24 }} />,
    },
  ];

  return (
    <div style={{ backgroundColor: "rgba(0,0,0,0.02)", margin: "0 -12px" }}>
      <ButtonList
        buttonList={buttonList.slice(1)}
      />
      <ButtonList
        iconButtonList={iconList.slice(0, 1)}
        buttonList={buttonList}
      />
      <div style={{ height: 20 }} />
      <ButtonList
        iconButtonList={iconList.slice(0, 2)}
        buttonList={buttonList}
      />
      <div style={{ height: 20 }} />
      <ButtonList
        iconButtonList={iconList.slice(0, 3)}
        buttonList={buttonList}
      />
      <div style={{ height: 20 }} />
      <ButtonList
        buttonList={[
          {
            name: "按钮",
            type: "primary",
          }
        ]}
      />
      <div style={{ height: 20 }} />
      <ButtonList
        buttonList={[
          {
            name: "按钮",
          },
          {
            name: "按钮",
            type: "primary",
          },
        ]}
      />
    <div style={{ height: 20 }} />
      <ButtonList
        type='text'
        leftText={<div style={{ display: 'flex', alignItems: 'center' }}>
          <Checkbox>全选</Checkbox>
          <div style={{ color: '#A6A8A9', marginLeft: 12 }}>已选 0单位</div>
        </div>}
        buttonList={[
          {
            name: "确定(00/00)",
            type: "primary",
            onClick: () => console.log("按钮"),
            // size: 'small',
            style: { height: 32 }
          }
        ]}
      />

      <ButtonList.Actions list={list.slice(0, 3)} style={{ margin: '24px 0px' }} />
      <ButtonList.Actions list={list.slice(0,4)} style={{ margin: '24px 0px' }} />
      <ButtonList.Actions list={list} style={{ margin: '24px 0px' }} />
    </div>
  );
};

export default Demo;
