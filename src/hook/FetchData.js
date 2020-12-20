import { useTasksContext } from 'context'
import { useEffect } from 'react'
import { db } from '../config'

const FetchData = ({ loading, setLoading, idCurrentUser }) => {
  const { dispatch } = useTasksContext()

  useEffect(() => {
    var docRef = db.collection('users').doc(idCurrentUser)
    async function func() {
      let data = []
      const query = docRef.collection('tasks')
      const dataSnapshots = await query.get()
      dataSnapshots.docs.forEach((snapshot) => {
        data.push(snapshot.data())
      })
      console.log('data', data)
      dispatch({ type: 'RELOAD', payload: data })
      setLoading(!loading)
    }
    func()
  }, [])
}
export default FetchData
