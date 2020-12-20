import { Col, Row, Spin } from 'antd'
import { Search, Header, TodoList, AddTodo, SignOut } from 'components'
import { FetchData } from '../../hook'
import { useState } from 'react'
import { useUserContext } from '../../context'

const ToDoApp = () => {
  const [loading, setLoading] = useState(true)
  const { currentUser } = useUserContext()
  console.log('current', currentUser)
  console.log('currentId', currentUser.uid)
  let idCurrentUser = currentUser.uid
  FetchData({ loading, setLoading, idCurrentUser })
  return (
    <Row justify="center">
      <Col span={24}>
        <Row gutter={[0, 8]}>
          <Col span={24}>
            <Header />
          </Col>
        </Row>
        <Row gutter={[0, 8]}>
          <Col flex="auto">
            <Row gutter={[0, 8]}>
              <Col flex="auto">
                <Search />
              </Col>
            </Row>
            <Row>
              <Col flex="auto">
                {loading ? (
                  <Spin
                    tip="Loading..."
                    style={{ margin: '0 auto', display: 'block' }}
                  />
                ) : (
                  <TodoList />
                )}
              </Col>
            </Row>
          </Col>
        </Row>
        <Row gutter={[0, 16]}>
          <Col flex={1}>
            <AddTodo />
          </Col>
        </Row>
        <Row>
          <Col flex="auto" align="center" span={24}>
            <SignOut />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
export default ToDoApp
