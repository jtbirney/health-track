export const POST_WEIGHTS = 'POST_WEIGHTS'
let beginFetchPostWeight = () => {
  return {
    type: POST_WEIGHTS
  }
}

export const RECIEVE_POST_WEIGHTS = 'RECIEVE_POST_WEIGHTS'
let receiveWeight = json => {
  return {
    type: RECIEVE_POST_WEIGHTS,
    weight: json
  }
}

export const RECEIVE_POST_WEIGHTS_ERROR = 'RECEIVE_POST_WEIGHTS_ERROR'
let receiveWeightError = json => {
  return {
    type: RECEIVE_POST_WEIGHTS_ERROR,
    errors: json
  }
}

export const fetchPostWeight = weight => dispatch => {
  let payload = JSON.stringify({ weight: weight})
  dispatch(beginFetchPostWeight())
  fetch(`/api/v1/weights`, {
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
        dispatch(receiveWeight(json))
      }
    })
    .catch(error => {
      dispatch(receiveWeightError(error))
    })
}
