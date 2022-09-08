import React from "react";

const Umi4 = () => {
  return (
    <div>
      Umi4子应用
      <micro-app
        name="umi4"
        url="http://localhost:8000/"
        // baseroute="/umi/umi4"
      ></micro-app>
    </div>
  );
};

export default Umi4;
