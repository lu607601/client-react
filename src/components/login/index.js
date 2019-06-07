import React, { Component } from "react";
import { Form, Input, Modal } from "antd";
import "./index.less";
import "./mobile.less";
const FormItem = Form.Item;
const formItemLayout = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 14
  }
};
class Login extends Component {
  handleOk = () => {
    const { onOk, form } = this.props;
    const { validateFields } = form;
    validateFields((errors, data) => {
      if (errors) {
        return;
      }
      onOk(data);
    });
  };
  render() {
    const { form, onOk, ...loginProps } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Modal {...loginProps} onOk={this.handleOk}>
        <Form layout="horizontal">
          <FormItem label="邮箱" {...formItemLayout}>
            {getFieldDecorator("userEmail", {
              rules: [
                {
                  required: true,
                  pattern: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,
                  message: "请输入正确的邮箱～"
                }
              ]
            })(<Input />)}
          </FormItem>

          <Form.Item label="密码" {...formItemLayout}>
            {getFieldDecorator("userPwd", {
              rules: [
                {
                  required: true,
                  message: "请输入正确的密码～!"
                }
              ]
            })(<Input type="password" />)}
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

export default Form.create()(Login);
