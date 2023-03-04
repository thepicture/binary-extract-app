import { GithubOutlined, HomeOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";

import { SOURCE_CODE_LINK, UploadFiles } from "features/upload-files";

import "./styles/index.css";

const { Header, Content, Sider } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ height: "100%" }}>
      <Sider breakpoint="lg" collapsedWidth="0">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onSelect={(info) =>
            info.key === "2" && (window.location.href = SOURCE_CODE_LINK)
          }
          items={[
            {
              key: "1",
              icon: React.createElement(HomeOutlined),
              label: "Main Page",
            },
            {
              key: "2",
              icon: React.createElement(GithubOutlined),
              label: "Source Code",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Title style={{ margin: 24 }}>Extract chunks from binary files</Title>
        <Content style={{ margin: 24 }}>
          <div
            style={{
              height: "100%",
              padding: 24,
              background: colorBgContainer,
            }}
          >
            <UploadFiles />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
