import React, { Component } from "react";
import { Avatar, Row, Tag, Divider } from "antd";
import "./index.less";
class SiderLeft extends Component {
  render() {
    return (
      <div className="sider-left">
        <Row
          type="flex"
          align="middle"
          justify="center"
          style={{ flexDirection: "column" }}
        >
          <Avatar
            size={120}
            src="https://placeholdit.imgix.net/~text?txtsize=75&bg=afd&txtclr=ffffff&w=200&h=200"
            icon="user"
          />

          <div>
            <div className="block">
              <div className="block__title">嗨 Me～</div>
              <div className="block__content">
                哟 阳光灿烂哟 阳光灿烂哟 阳光灿烂哟 阳光灿烂哟 阳光灿烂哟
                阳光灿烂哟 阳光灿烂哟 阳光灿烂
              </div>
            </div>

            <Divider />

            <div className="block">
              <div className="block__title">标签云</div>
              <div className="block__content">
                <Tag>标签1</Tag>
                <Tag>标签1</Tag>
                <Tag>标签1</Tag>
                <Tag>标签1</Tag>
                <Tag>标签1</Tag>
              </div>
            </div>
            <Divider />
            <div className="block">
              <div className="block__title">友情链接</div>
              <div className="block__content">
                <a href="http://www.baidu.com" className="link">
                  链接
                </a>
                <a href="http://www.baidu.com" className="link">
                  链接
                </a>
                <a href="http://www.baidu.com" className="link">
                  链接
                </a>
              </div>
            </div>
          </div>
        </Row>
      </div>
    );
  }
}

export default SiderLeft;
