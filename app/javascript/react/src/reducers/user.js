let initialState = {
  user: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SHOWLOGIN':
      let newState = {
        user: state.user,
        logInForm: !state.logInForm
      }
      return newState
    default:
      return state
  }
}
