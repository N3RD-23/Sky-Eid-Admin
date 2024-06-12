import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router";
import "./App.css";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  TeamOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import Dashboard from "./components/Dashboard";
import Teams from "./components/Teams";

const { Header, Sider, Content } = Layout;

function ContentCard() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/teams" element={<Teams />} />
      </Routes>
    </div>
  );
}

export default function App() {
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="logo-vertical text-center">
          <h1 className="text-white text-4xl font-bold mb-8 mt-3">SKY</h1>
        </div>
        <Menu
          onClick={({ key }) => {
            navigate(key);
          }}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["/"]}
          items={[
            {
              key: "/",
              icon: <PieChartOutlined />,
              label: "Dashboard",
            },
            {
              key: "/teams",
              icon: <TeamOutlined />,
              label: "Teams",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content style={{ margin: '24px 16px 0', overflow: 'auto', borderRadius: '10px'}}>
        <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
          <ContentCard />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
