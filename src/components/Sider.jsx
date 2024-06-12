import React from "react";
import { Menu, Layout } from "antd";
import { DashboardOutlined, TeamOutlined } from "@ant-design/icons";

const menuStyle = {
  fontSize: "1.2em",
  justifyContent: "center",
  textAlign: "left",
};

const iconStyle = {
  marginRight: "1vw",
};

const siderLogo = {
  color: "white",
};

export default function Sider(props) {
  const { handleClick } = props;
  return (
    <Layout.Sider
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        top: 0,
      }}
    >
      <div className="sider-logo" style={siderLogo}>
        <h1>
          SKY <span style={{ color: "lightblue" }}>ADMIN</span>{" "}
        </h1>
      </div>
      <Menu theme="dark" mode="inline" openKeys={"sub1"}>
        <Menu.Item key="1" style={menuStyle} onClick={handleClick}>
          <DashboardOutlined style={iconStyle} />
          Dashboard
        </Menu.Item>
        <Menu.Item key="2" style={menuStyle} onClick={handleClick}>
          <TeamOutlined style={iconStyle} />
          Teams
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
}
