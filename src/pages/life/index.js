import React from "react";
import { List, Icon } from "antd";
import "./index.less";

class Life extends React.Component {
  render() {
    const listData = [];
    for (let i = 0; i < 23; i++) {
      listData.push({
        href: "http://ant.design",
        title: `生活 ${i}`,
        avatar:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        description:
          "Ant Design, a design language for background applications, is refined by Ant UED Team.",
        content:
          "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
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
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 4
        }}
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
            <List.Item.Meta title={<a href={item.href}>{item.title}</a>} />
            {item.content}
          </List.Item>
        )}
      />
    );
  }
}
export default Life;
