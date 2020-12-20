import { useContext } from 'react'
import { tasksContext, userContext } from 'context'

const useTasksContext = () => useContext(tasksContext)
const useUserContext = () => useContext(userContext)

export { useTasksContext, useUserContext }
