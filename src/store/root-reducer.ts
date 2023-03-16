import { combineReducers } from 'redux'
import cartReducer from './reducers/cart/cart.reducer'
import userReducer from './reducers/user/user.reducer'
import categoryReducer from './reducers/category/category.reducer'

const rootReduer = combineReducers({
  userReducer,
  cartReducer,
  categoryReducer
})

export default rootReduer
