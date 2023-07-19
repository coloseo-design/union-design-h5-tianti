import React from "react";
import { File } from "../index";
import "./styles/index";
import "../icon/styles/index";

const Demo = () => {
  const btnList = [
    {
      name: "预览",
      onClick: () => console.log("预览"),
    },
  ];
  return (
    <div style={{ background: 'rgb(245, 246, 246)', margin: '0px -12px' }}>
      <h2>基本用法</h2>
      <File
        name="文件.ppt"
        desc="3440kb"
        btnList={btnList}
        closeEnable
        onClose={() => console.log("onClose")}
        style={{ margin: '24px 0px '}}
      />
      <File
        name="文件.docx"
        desc="3440kb"
        btnList={btnList}
        closeEnable
        onClose={() => console.log("onClose")}
        style={{ margin: '24px 0px '}}
      />
      <File
        name="自定义图标.ppt"
        desc="3440kb"
        btnList={btnList}
        closeEnable
        onClose={() => console.log("onClose")}
        iconRender={() => <div style={{ backgroundColor: "red" }}>a</div>}
        style={{ margin: '24px 0px '}}
      />
      <h2>type === 'text' 模式</h2>
      <File
        name="文件名称文件名称文件名称文件名称文件名称文件名称文件名称文件名称文件名称文件名称文件名称.ppt"
        closeEnable
        onClose={() => console.log("onClose")}
        style={{ margin: '24px 0px '}}
        type="text"
      />
        <File
        name="文件名称文件名称文件名称文件名称文件名称文件名称文件名称文件名称.pdf"
        closeEnable
        onClose={() => console.log("onClose")}
        style={{ margin: '24px 0px '}}
        type="text"
      />
    </div>
  );
};

export default Demo;
