import "./index.less";
import "./mobile.less";
import React, { Component } from "react";
import { Layout, BackTop, Divider } from "antd";
import Nav from "../components/nav/index";
import SideLeft from "../components/sideLeft/index";

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
        <Layout className="layout" style={{ marginTop: "20px" }}>
          <Sider style={{ background: "#fff" }} width={300}>
            <SideLeft />
          </Sider>
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
