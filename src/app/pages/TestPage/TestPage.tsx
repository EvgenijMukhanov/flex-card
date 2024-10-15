import { useState } from "react";
import { Layout } from "../../../shared/grids";
import { theme } from "../../../shared/config";
import { ConfigurationModel } from "../../../modules/flex-card/store/types/configurationModel";

const { Header, Content, Footer, Sider } = Layout;

type Props = {
  configuration: ConfigurationModel;
};

export const TestPage = ({ configuration }: Props) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{ color: "white" }}
      >
        Sider
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          Header
        </Header>
        <Content style={{ margin: "0 16px" }}>Content</Content>
        <Footer style={{ textAlign: "center" }}>Footer</Footer>
      </Layout>
    </Layout>
  );
};
