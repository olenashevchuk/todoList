import { Form, Input, Button, Typography, Row, Col } from 'antd'
import React, { useRef, useContext } from 'react'
import { userContext } from '../../context'
import { Link } from 'react-router-dom'

const { Title } = Typography

const ResetPasswordForm = () => {
  const login = useRef(null)
  const [form] = Form.useForm()
  const { dispatch } = useContext(userContext)

  const resetPassword = (values) => {
    dispatch({ type: 'RESET_PASSWORD', payload: values.login })
  }

  return (
    <Form form={form} onFinish={resetPassword}>
      <Row justify="center">
        <Col>
          <Title level={1}>Reset password</Title>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Form.Item
            name="login"
            label="E-mail"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!'
              },
              {
                required: true,
                message: 'Please input your E-mail!'
              }
            ]}>
            <Input placeholder="Login" ref={login} />
          </Form.Item>
        </Col>
      </Row>

      <Row justify="space-around">
        <Col>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large">
              Reset
            </Button>
          </Form.Item>
        </Col>
        <Col>
          <Form.Item>
            <Link to="/login">
              <Button type="secondary" size="large">
                Log in
              </Button>
            </Link>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}
export default ResetPasswordForm
