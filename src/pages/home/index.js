import React from "react";
import { Link } from "react-router-dom";
import { List, Icon } from "antd";
import { isMobile } from "@src/utils";

import "./index.less";

class Home extends React.Component {
  render() {
    const listData = [];
    for (let i = 0; i < 23; i++) {
      listData.push({
        href: `/articledetail/${i}`,
        title: `标题标题${i}`,
        avatar:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        description:
          "测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试",
        content: "测试测试测试测试测试测试测试测试测试测试测试测试测试测试"
      });
    }

    const IconText = ({ type, text }) => (
      <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
      </span>
    );

    return (
      <List
        itemLayout="vertical"
        size="large"
        pagination={
          isMobile
            ? false
            : `{{
          onChange: page => {
            console.log(page);
          },
          pageSize: 4
        }}`
        }
        dataSource={listData}
        renderItem={item => (
          <List.Item
            key={item.title}
            actions={[
              <IconText type="like-o" text="156" />,
              <IconText type="message" text="2" />
            ]}
            extra={
              <img
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
            }
          >
            <List.Item.Meta title={<Link to={item.href}>{item.title}</Link>} />
            {item.content}
          </List.Item>
        )}
      />
    );
  }
}
export default Home;
