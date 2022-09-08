import React from "react";

const Solidjs = () => {
  return (
    <div>
      Solidjs子应用
      <micro-app
        name="solidjs"
        url="http://localhost:3112/solidjs/"
        inline // 使用内联script模式
        disableSandbox // 关闭沙箱
      ></micro-app>
    </div>
  );
};

export default Solidjs;
