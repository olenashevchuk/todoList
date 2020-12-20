import React, { useCallback, useContext, useRef } from 'react'
import { Form, Input, Button, Typography, Row, Col, Divider } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import { Redirect, withRouter } from 'react-router'
import defaultProject from '../../config'
import { userContext } from '../../context'
import { GoogleOutlined } from '@ant-design/icons'

const { Title, Text } = Typography

const LoginForm = ({ history }) => {
  const [form] = Form.useForm()
  const password = useRef(null)
  const login = useRef(null)
  const { currentUser, dispatch } = useContext(userContext)

  const SignUpWithGoogle = useCallback(
    async (event) => {
      try {
        await dispatch({ type: 'SIGNUP_USER_WITH_GOOGLE', payload: history })
      } catch (error) {
        alert(error)
      }
      history.push('/toDoApp')
    },
    [history]
  )

  const handleLogin = useCallback(
    async (event) => {
      try {
        await defaultProject
          .auth()
          .signInWithEmailAndPassword(
            login.current.props.value,
            password.current.props.value
          )
        history.push('/toDoApp')
      } catch (error) {
        alert(error)
      }
    },
    [history]
  )

  if (currentUser) {
    return <Redirect to="/toDoApp" />
  }

  return (
    <Form form={form} onFinish={handleLogin}>
      <Row justify="center">
        <Col>
          <Title level={1}>Log in</Title>
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
      <Row justify={'end'}>
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
        </Col>
        <Col>
          <Button
            type="link"
            onClick={() => {
              history.push('/resetPassword')
            }}>
            Forgot password?
          </Button>
        </Col>
      </Row>

      <Row justify="center">
        <Col>
          <Form.Item>
            <Button type="primary" size="large" htmlType="submit">
              Log in
            </Button>
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Divider>
            <Title level={4}>Or</Title>
          </Divider>
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          <Form.Item>
            <Button
              htmlType="button"
              size="large"
              icon={<GoogleOutlined />}
              onClick={SignUpWithGoogle}>
              Log in with Google
            </Button>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[0, 8]} align="middle" justify="center">
        <Col>
          <Text>Do you not have an account?</Text>
        </Col>
        <Col>
          <Button
            type="link"
            onClick={() => {
              history.push('/signUp')
            }}>
            Sign up
          </Button>
        </Col>
      </Row>
    </Form>
  )
}
export default withRouter(LoginForm)
