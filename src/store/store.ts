import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import rootReduer from './root-reducer'

const store = createStore(rootReduer, applyMiddleware(logger))

export default store
