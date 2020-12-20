import { useEffect, useState } from 'react'
import { Col, Row, Typography } from 'antd'
import { Filter } from 'components/Filter'
import { useTasksContext } from 'context'
const { Title } = Typography

const Header = () => {
  const [counter, setCounter] = useState(0)
  const { store, dispatch } = useTasksContext()
  useEffect(() => {
    setCounter(store.tasks.filter(({ status }) => status.done).length)
  }, [store])
  return (
    <>
      <Row>
        <Col flex="auto" align="center">
          <Title>Todo List</Title>
        </Col>
      </Row>
      <Row justify="space-between">
        <Col>
          <Title level={4}>
            {counter} / {store.tasks.length}
          </Title>
        </Col>
        <Col>
          <Filter dispatch={dispatch} />
        </Col>
      </Row>
    </>
  )
}

export default Header
