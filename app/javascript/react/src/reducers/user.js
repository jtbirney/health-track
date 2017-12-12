import { combineReducers } from 'redux'
import { CREATE_USER, RECIEVE_NEW_USER, RECEIVE_NEW_USER_ERROR } from '../actions/createUser'
import { CREATE_SESSION, RECIEVE_SESSION, RECEIVE_SESSION_ERROR } from '../actions/session'
import { DESTROY_SESSION, RECIEVE_LOGOUT } from '../actions/destroySession'

let initialState = {
  user: null,
  isFetching: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECIEVE_NEW_USER:
      return Object.assign({}, state, {
        isFetching: false,
        user: action.user,
        userId: action.userId,
        error: null,
        loggedInAt: action.receivedAt
      })
    case RECEIVE_NEW_USER_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        user: null,
        error: action.error,
        loggedInAt: action.receivedAt
      })
    case CREATE_SESSION:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECIEVE_SESSION:
      return Object.assign({}, state, {
        isFetching: false,
        user: action.user,
        userId: action.userId,
        error: null,
        loggedInAt: action.receivedAt
      })
    case RECEIVE_SESSION_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        user: null,
        error: action.error,
        loggedInAt: action.receivedAt
      })
    case DESTROY_SESSION:
      return Object.assign({}, state, {
        isFetching: true,
        user: null,
        userId: null
      })
    case RECIEVE_LOGOUT:
      return Object.assign({}, state, {
        isFetching: false,
        user: null,
        userId: null
      })
    default:
      return state
  }
}
