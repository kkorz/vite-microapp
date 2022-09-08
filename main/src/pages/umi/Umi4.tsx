import React from "react";

const Umi4 = () => {
  return (
    <div>
      Umi4子应用
      <micro-app
        name="app1"
        url="http://localhost:8000/"
        baseroute="/my-page"
      ></micro-app>
    </div>
  );
};

export default Umi4;
