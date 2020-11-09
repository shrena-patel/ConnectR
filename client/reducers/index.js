import {combineReducers} from 'redux'

import auth from './auth'
import candidates from './candidates'
import employers from './employers'

export default combineReducers({
  auth,
  candidates,
  employers
})
