export default (state = false, action) => {
  switch (action.type) {
    case 'SHOWLOGIN':
      return !state
    default:
      return state
  }
}
