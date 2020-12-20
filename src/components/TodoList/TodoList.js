import { useState, useEffect, memo } from 'react'
import { Row, Col, List } from 'antd'
import { TodoListItem } from '../TodoListItem'
import { filter } from '../../utilities'
import './style.css'
import { useTasksContext, useUserContext } from '../../context'

const TodoListInner = () => {
  const [filteredTasks, setFilteredTasks] = useState()
  const { store } = useTasksContext()
  const { currentUser } = useUserContext()
  useEffect(() => {
    filter(store, setFilteredTasks)
  }, [store])

  return (
    <div style={{ maxHeight: '400px', overflow: 'auto' }} className="style-1">
      <Row>
        <Col span={24}>
          <List
            size="large"
            bordered={false}
            style={{ maxWidth: '100%', alignItems: 'center' }}
            dataSource={filteredTasks}
            renderItem={(item) => {
              return (
                <TodoListItem item={item} idCurrentUser={currentUser.uid} />
              )
            }}
          />
        </Col>
      </Row>
    </div>
  )
}
export const TodoList = memo(TodoListInner)
