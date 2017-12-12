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

export const fetchDestroySession = userId => dispatch => {
  dispatch(destroySession())
  fetch(`/api/v1/sessions/${userId}`, {
    credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'DELETE'
  }).then(response => response.json())
    .then(json => {
      dispatch(receiveLogout(json))
    })
}
