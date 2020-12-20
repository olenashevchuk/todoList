import React, { useRef, useCallback } from 'react'
import { Form, Input, Button, Typography, Row, Col } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import { withRouter } from 'react-router'
import { useUserContext } from '../../context'

const { Title, Text } = Typography

const SignUpForm = ({ history }) => {
  const [form] = Form.useForm()
  const { dispatch } = useUserContext()
  const password = useRef(null)
  const login = useRef(null)

  const handleSignUp = useCallback(
    async (event) => {
      try {
        await dispatch({
          type: 'SIGNUP_USER',
          payload: {
            email: login.current.props.value,
            password: password.current.props.value,
            history: history
          }
        })
      } catch (error) {
        alert(error)
      }
      history.push('/toDoApp')
    },
    [history]
  )

  return (
    <Form form={form} onFinish={handleSignUp}>
      <Row justify="center">
        <Col>
          <Title level={1}>Sign up</Title>
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
      <Row>
        <Col span={24}>
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: 'Please input your password!'
              },
              {
                pattern: new RegExp('^[a-zA-Z0-9_.-]*$'),
                message: 'You must have letters and numbers in password only'
              }
            ]}>
            <Input.Password
              ref={password}
              placeholder="Password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>
          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!'
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }

                  return Promise.reject('The two passwords do not match!')
                }
              })
            ]}>
            <Input.Password
              placeholder="Password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>
        </Col>
      </Row>
      <Row justify="space-around">
        <Col>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large">
              Sign up
            </Button>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={[0, 8]} align="middle" justify="center">
        <Col>
          <Text>Do you have an account?</Text>
        </Col>
        <Col>
          <Button
            type="link"
            onClick={() => {
              history.push('/login')
            }}>
            Log in
          </Button>
        </Col>
      </Row>
    </Form>
  )
}
export default withRouter(SignUpForm)
