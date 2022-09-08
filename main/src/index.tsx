import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import microApp from "@micro-zoe/micro-app";
import App from "./App";
import "antd/dist/antd.less";

microApp.start({
  plugins: {
    modules: {
      // appName即应用的name值
      'solidjs': [{
        loader(code) {
          if (process.env.NODE_ENV === 'development') {
            // 这里 basename 需要和子应用vite.config.js中base的配置保持一致
            code = code.replace(/(from|import)(\s*['"])(\/solidjs\/)/g, all => {
              return all.replace('/solidjs/', 'http://localhost:3112/solidjs/')
            })
          }

          return code
        }
      }]
    }
  }
})

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
