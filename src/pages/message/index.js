import React from "react";
import { Form, Input, Button } from "antd";

const { TextArea } = Input;

@Form.create()
class Message extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="message">
        <Form onSubmit={this.handleSubmit} className="message-form">
          <Form.Item>
            {getFieldDecorator("message", {
              initialValue: "你好呀",
              rules: [{ required: true, message: "请输入你的message" }]
            })(<TextArea autosize={{ minRows: 4, maxRows: 8 }} />)}
          </Form.Item>

          <Form.Item style={{ textAlign: "right" }}>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              想好了
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Message;
