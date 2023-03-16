import { combineReducers } from 'redux'
import cartReducer from './reducers/cart/cart.reducer'
import userReducer from './reducers/user/user.reducer'

const rootReduer = combineReducers({
  userReducer,
  cartReducer
})

export default rootReduer
