import React, { Component } from "react";
import { Layout, BackTop, Divider } from "antd";
import Nav from "../components/nav/index";
import SideLeft from "../components/sideLeft/index";
import { isMobile } from "@src/utils";
import "./index.less";
import "./mobile.less";
const { Content, Sider, Footer } = Layout;

class Layouts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowSlider: false
    };
  }
  componentDidMount() {}
  render() {
    return (
      <div className="Layouts">
        <Nav pathname={this.props.location.pathname} />
        <Layout className="layout">
          {!isMobile && (
            <Sider
              style={{ background: "#fff", marginRight: "20px" }}
              width={200}
            >
              <SideLeft />
            </Sider>
          )}
          <Content
            style={{
              background: "#fff",
              paddingLeft: 20,
              paddingRight: 20,
              margin: 0,
              minHeight: 280
            }}
          >
            {this.props.children}
          </Content>
        </Layout>

        <Footer
          style={{ background: "#fff", marginTop: "20px", textAlign: "center" }}
        >
          <Divider>@Made By CRYSTAL</Divider>
        </Footer>
        <BackTop />
      </div>
    );
  }
}

export default Layouts;
