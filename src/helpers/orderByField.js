function orderByField(field, condition) {
  return condition === 'less'
    ? (a, b) => (a[field] > b[field] ? 1 : -1)
    : (a, b) => (a[field] < b[field] ? 1 : -1)
}
export default orderByField
