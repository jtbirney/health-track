export const CREATE_USER = 'CREATE_USER'
let createUser = () => {
  return {
    type: CREATE_USER
  }
}

export const RECIEVE_NEW_USER = 'RECIEVE_NEW_USER'
let receiveNewUser = json => {
  return {
    type: RECIEVE_NEW_USER,
    user: json.name,
    userId: json.id,
    receivedAt: Date.now()
  }
}

export const RECEIVE_NEW_USER_ERROR = 'RECEIVE_NEW_USER_ERROR'
let receiveNewUserError = json => {
  return {
    type: RECEIVE_NEW_USER_ERROR,
    error: json,
    receivedAt: Date.now()
  }
}

export const fetchPostUser = user => dispatch => {
  let payload = JSON.stringify(user)
  dispatch(createUser())
  fetch(`/api/v1/users`, {
    credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: payload
  }).then(response => response.json())
    .then(json => {
      if (json.error) {
        throw json.error
      } else {
        dispatch(receiveNewUser(json))
      }
    })
    .catch(error => {
      dispatch(receiveNewUserError(error))
    })
}
