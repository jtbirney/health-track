export const CREATE_SESSION = 'CREATE_SESSION'
let createSession = () => {
  return {
    type: CREATE_SESSION
  }
}

export const RECIEVE_SESSION = 'RECIEVE_SESSION'
let receiveSession = json => {
  return {
    type: RECIEVE_SESSION,
    user: json.name,
    userId: json.id,
    receivedAt: Date.now()
  }
}

export const RECEIVE_SESSION_ERROR = 'RECEIVE_SESSION_ERROR'
let receiveSessionError = json => {
  return {
    type: RECEIVE_SESSION_ERROR,
    error: json,
    receivedAt: Date.now()
  }
}

export const fetchPostSession = user => dispatch => {
  let payload = JSON.stringify(user)
  dispatch(createSession())
  fetch(`/api/v1/sessions`, {
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
        dispatch(receiveSession(json))
      }
    })
    .catch(error => {
      dispatch(receiveSessionError(error))
    })
}
