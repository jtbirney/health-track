export const DESTROY_SESSION = 'DESTROY_SESSION'
let destroySession = () => {
  return {
    type: DESTROY_SESSION
  }
}

export const RECIEVE_LOGOUT = 'RECIEVE_LOGOUT'
let receiveLogout = () => {
  return {
    type: RECIEVE_LOGOUT
  }
}

export const fetchDestroySession = () => dispatch => {
  dispatch(destroySession())
  fetch(`/api/v1/sessions`, {
    credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'DELETE',
      body: payload
  }).then(response => response.json())
    .then(json => {
      dispatch(receiveLogout(json))
    })
}
