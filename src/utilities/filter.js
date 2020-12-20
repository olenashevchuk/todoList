const filter = (store, setFilteredTasks) => {
  let temp
  temp = store.tasks
  if (store.filter === 'active') {
    temp = store.tasks.filter(({ status }) => !status.done)
  } else if (store.filter === 'done') {
    temp = store.tasks.filter(({ status }) => status.done)
  }
  if (store.query.length > 0) {
    temp = temp.filter((item) => {
      return item.text.toLowerCase().indexOf(store.query.toLowerCase()) > -1
    })
  }
  setFilteredTasks(temp)
}

export default filter
