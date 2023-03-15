import { combineReducers } from 'redux'
import userReducer from './reducers/user/user.reducer'

const rootReduer = combineReducers({
  userReducer
})

export default rootReduer
