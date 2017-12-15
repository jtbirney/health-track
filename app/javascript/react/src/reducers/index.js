import { combineReducers } from 'redux'
import toggleNavForm from './toggleNavForm'
import user from './user'
import weight from './weight'

const counterApp = combineReducers({
  toggleNavForm,
  user,
  weight
})

export default counterApp
