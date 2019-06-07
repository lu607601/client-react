import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col, Menu, Icon, Button } from "antd";
import Register from "../register/index";
import Login from "../login/index";
import navConfig from "../../config/nav.js";
import { login, register, checkLogin } from "../../store/actions/user";
import { findObject, isMobile } from "@src/utils";
import "./index.less";
import "./mobile.less";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavShow: false,
      loginVisible: false,
      registerVisible: false,
      menuCurrent: null
    };
  }

  componentDidMount() {
    this.initMenu(this.props);
    this.props.checkLogin();
  }

  onClose = () => {
    this.setState({
      loginVisible: false,
      registerVisible: false
    });
  };

  initMenu(obj) {
    let navItem = findObject(navConfig, "path", obj.pathname);
    this.setState({
      menuCurrent: (navItem[0] && navItem[0].key) || ""
    });
  }

  componentWillReceiveProps(nextProps) {
    this.initMenu(nextProps);
  }
  handleLogout = e => {
    console.log("e-退出");
  };
  showModal = params => {
    this.onClose();
    this.setState({
      [params + "Visible"]: true
    });
  };
  hideModal = () => {
    this.onClose();
  };
  // 移动端导航操作
  handleMobileNav = () => {
    console.log("移动端操作");
    this.setState({
      isNavShow: !this.state.isNavShow
    });
  };
  render() {
    const onClose = this.onClose;
    const loginProps = {
      visible: this.state.loginVisible,
      maskClosable: false,
      centered: true,
      okText: "确定",
      onOk: data => {
        this.props.login(data);
        onClose();
      },
      cancelText: "取消",
      onCancel: () => {
        onClose();
      }
    };

    const registerProps = {
      visible: this.state.registerVisible,
      maskClosable: false,
      centered: true,
      okText: "确定",
      onOk: data => {
        this.props.register(data);
        onClose();
      },
      cancelText: "取消",
      onCancel: () => {
        onClose();
      }
    };
    const navItems = navConfig.map(navItem => (
      <Menu.Item key={navItem.key}>
        <Link to={navItem.path}>
          <Icon type={navItem.icon} />
          {navItem.navTitle}
        </Link>
      </Menu.Item>
    ));

    const { userName } = this.props.user;
    const { isNavShow } = this.state;
    let userInfo = "";
    if (userName) {
      userInfo = (
        <div className="login-info">
          <Button type="primary" style={{ marginRight: "15px" }}>
            {userName}
          </Button>
          <Button
            type="primary"
            icon="logout"
            style={{ marginRight: "15px" }}
            onClick={() => this.handleLogout}
          >
            退出
          </Button>
        </div>
      );
    } else {
      userInfo = (
        <div className="login-info">
          <Button
            type="primary"
            icon="login"
            onClick={() => this.showModal("login")}
          >
            登 录
          </Button>
          <Button
            type="primary"
            icon="login"
            onClick={() => this.showModal("register")}
          >
            注 册
          </Button>
        </div>
      );
    }
    return (
      <div className={["nav"].join(" ")}>
        {isMobile && !isNavShow && (
          <Icon type="bars" onClick={() => this.handleMobileNav()} />
        )}
        {isMobile && isNavShow && (
          <Icon type="close" onClick={() => this.handleMobileNav()} />
        )}
        <div
          className={[
            "header",
            isMobile ? "mobile" : "",
            isNavShow ? "show" : ""
          ].join(" ")}
        >
          <Row type="flex" justify="space-between" align="middle">
            <Col>
              <Menu selectedKeys={[this.state.menuCurrent]} mode="horizontal">
                {navItems}
              </Menu>
            </Col>
            <Col>{userInfo}</Col>
          </Row>
        </div>
        {this.state.loginVisible && <Login {...loginProps} />}
        {this.state.registerVisible && <Register {...registerProps} />}
      </div>
    );
  }
}

Nav.propTypes = {
  login: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired
};
const mapStateToProps = state => {
  return { user: state.get("user") };
};
export default connect(
  mapStateToProps,
  { login, register, checkLogin }
)(Nav);
