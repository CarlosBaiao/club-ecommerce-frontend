import { combineReducers } from 'redux'
import userReducer from './reducers/user.reducer'

const rootReduer = combineReducers({
  userReducer
})

export default rootReduer
