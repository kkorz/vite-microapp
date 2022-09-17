import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import Router from './Router';
import useMenu from './hooks/useMenu';
import './App.less';

const { Header, Sider, Content } = Layout;

const App = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const { menuConfig } = useMenu();

  const handleSelect = ({ key }: { key: string }) => {
    navigate(key);
  };

  return (
    <Layout id="app-wrapper">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">{collapsed ? 'M' : 'MicroApp'}</div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['Welcome']} items={menuConfig} onSelect={handleSelect} />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <Router />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
