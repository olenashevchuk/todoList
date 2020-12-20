import 'antd/dist/antd.css'
import { Row, Col, Card } from 'antd'
import React from 'react'
import { LoginForm, ToDoApp, SignUpForm, ResetPasswordForm } from './components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from 'components/PrivateRoute.js/PrivateRoute'
import { TasksProvider } from './context'

const App = () => {
  return (
    <Row justify="center" align="middle" style={{ height: '100%' }}>
      <Col xs={22} sm={22} md={14} lg={10} xl={7} xxl={6}>
        <Card>
          <Router>
            <Switch>
              <PrivateRoute exact path="/" component={ToDoApp} />
              <Route exact path="/login" component={LoginForm} />
              <Route exact path="/signUp" component={SignUpForm} />
              <Route
                exact
                path="/resetPassword"
                component={ResetPasswordForm}
              />
              <TasksProvider
                store={{
                  tasks: [],
                  filter: 'all',
                  query: ''
                }}>
                <PrivateRoute path="/toDoApp" component={ToDoApp} />
              </TasksProvider>
            </Switch>
          </Router>
        </Card>
      </Col>
    </Row>
  )
}

export default App
