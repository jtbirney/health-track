export const FETCH_WEIGHTS = 'FETCH_WEIGHTS'
let beginFetchWeights = () => {
  return {
    type: FETCH_WEIGHTS
  }
}

export const RECIEVE_WEIGHTS = 'RECIEVE_WEIGHTS'
let receiveWeights = json => {
  return {
    type: RECIEVE_WEIGHTS,
    weights: json,
    receivedAt: Date.now()
  }
}

export const RECEIVE_WEIGHTS_ERROR = 'RECEIVE_WEIGHTS_ERROR'
let receiveWeightsError = json => {
  return {
    type: RECEIVE_WEIGHTS_ERROR,
    errors: json,
    receivedAt: Date.now()
  }
}

export const fetchWeights = () => dispatch => {
  dispatch(beginFetchWeights())
  fetch(`/api/v1/weights`, {
    credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
  }).then(response => response.json())
    .then(json => {
      if (json.error) {
        throw json.error
      } else {
        dispatch(receiveWeights(json))
      }
    })
    .catch(error => {
      dispatch(receiveWeightsError(error))
    })
}
