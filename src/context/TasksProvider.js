import { useReducer, useEffect } from 'react'

import { tasksContext } from 'context'
import { tasksReducer } from '../reducer'

const TasksProvider = (props) => {
  const { store, ...rest } = props
  const [state, dispatch] = useReducer(tasksReducer, store)
  useEffect(() => console.log(state), [state])
  return <tasksContext.Provider value={{ store: state, dispatch }} {...rest} />
}

export default TasksProvider
