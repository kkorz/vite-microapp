import React, { useState } from "react";
import {
  useRoutes,
  useNavigate,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import "./App.less";

const { Header, Sider, Content } = Layout;

import Welcome from "./pages/Welcome";
import Solidjs from "./pages/solidjs";
import Vue2 from "./pages/vue/Vue2";
import Umi4 from "./pages/umi/Umi4";

const items = [
  {
    label: "Welcome",
    key: "/welcome",
    icon: <UserOutlined />,
  },
  {
    label: "Solidjs",
    key: "/solidjs",
    icon: <UserOutlined />,
  },
  {
    label: "Umi",
    key: "umi",
    icon: <VideoCameraOutlined />,
    children: [
      {
        label: "Umi4",
        key: "/umi/umi4",
        icon: <UploadOutlined />,
      },
    ],
  },
  {
    label: "Vue",
    key: "vue",
    icon: <UploadOutlined />,
    children: [
      {
        label: "Vue2",
        key: "/vue/vue2",
        icon: <UploadOutlined />,
      },
      {
        label: "Vue3",
        key: "/vue/vue3",
        icon: <UploadOutlined />,
      },
    ],
  },
];

const App = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const handleSelect = ({ key }: { key: string }) => {
    navigate(key);
  };

  return (
    <Layout id="app-wrapper">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">{collapsed ? "M" : "MicroApp"}</div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["Welcome"]}
          items={items}
          onSelect={handleSelect}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Outlet />

          <Routes>
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/solidjs" element={<Solidjs />} />
            <Route path="/vue/vue2" element={<Vue2 />} />
            <Route path="/umi/umi4" element={<Umi4 />} />
            <Route path="*" element={<Welcome />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
