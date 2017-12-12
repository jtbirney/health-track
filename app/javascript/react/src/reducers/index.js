import { combineReducers } from 'redux'
import counter from './counter'
import toggleNavForm from './toggleNavForm'
import user from './user'

const counterApp = combineReducers({
  counter,
  toggleNavForm,
  user
})

export default counterApp
