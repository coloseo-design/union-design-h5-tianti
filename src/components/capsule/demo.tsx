import React from "react";
import { Capsule } from "../index";
import "./styles/index";
import "../icon/styles/index";

const Demo = () => {
  return (
    <div>
      <Capsule
        onOption={() => {
          console.log("onOption");
        }}
        onClose={() => {
          console.log("onClose");
        }}
      />
    </div>
  );
};

export default Demo;
