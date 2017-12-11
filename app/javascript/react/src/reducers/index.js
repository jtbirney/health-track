import { combineReducers } from 'redux'
import counter from './counter'
import toggleLogin from './toggleLogin'

const counterApp = combineReducers({
  counter,
  toggleLogin
})

export default counterApp
