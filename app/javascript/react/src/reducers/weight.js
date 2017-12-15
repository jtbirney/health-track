import { combineReducers } from 'redux'
import { FETCH_WEIGHTS, RECIEVE_WEIGHTS, RECEIVE_WEIGHTS_ERROR } from '../actions/weight'
import { POST_WEIGHTS, RECIEVE_POST_WEIGHTS, RECEIVE_POST_WEIGHTS_ERROR } from '../actions/postWeight'

let initialState = {
  isFetching: false,
  weights: []
}
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEIGHTS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECIEVE_WEIGHTS:
      return Object.assign({}, state, {
        isFetching: false,
        weights: action.weights
      })
    case RECEIVE_WEIGHTS_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        errors: action.errors
      })
    case POST_WEIGHTS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECIEVE_POST_WEIGHTS:
      return Object.assign({}, state, {
        isFetching: false,
        weights: action.weights
      })
    case RECEIVE_POST_WEIGHTS_ERROR:
    console.log(action.errors);
      return Object.assign({}, state, {
        isFetching: false,
        errors: action.errors
      })
    default:
      return state
  }
}
