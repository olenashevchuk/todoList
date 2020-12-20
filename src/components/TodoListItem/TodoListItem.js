import { memo, useCallback } from 'react'
import { Col, Row, List, Typography, Checkbox } from 'antd'
import { DropDown } from '../DropDown'
import { useTasksContext } from '../../context'

const { Item } = List
const { Text } = Typography

const TodoListItemInner = ({ item, idCurrentUser }) => {
  const { dispatch } = useTasksContext()

  const onChangeSetDone = useCallback(
    (value) => {
      dispatch({
        type: 'SET_DONE',
        payload: { taskId: item.id, idCurrentUser: idCurrentUser }
      })
    },
    [dispatch, idCurrentUser, item]
  )
  return (
    <Item
      style={{
        backgroundColor: item.status.pinned && '#1890ff1f'
      }}>
      <Row wrap={false} gutter={[16, 0]} align="middle">
        <Col>
          <Checkbox checked={item.status.done} onChange={onChangeSetDone} />
        </Col>
        <Col>
          <Text strong={item.status.important}>{item.text}</Text>
        </Col>
      </Row>
      <DropDown
        status={item.status}
        taskId={item.id}
        dispatch={dispatch}
        idCurrentUser={idCurrentUser}
      />
    </Item>
  )
}
export const TodoListItem = memo(TodoListItemInner)
