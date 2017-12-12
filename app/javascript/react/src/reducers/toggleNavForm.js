export default (state = 'none', action) => {
  switch (action.type) {
    case 'SHOWLOGIN':
      return 'login'
    case 'SHOWSIGNUP':
      return 'signUp'
    case 'CLEAR':
      return 'none'
    default:
      return state
  }
}
