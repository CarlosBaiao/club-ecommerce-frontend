import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import rootReduer from './root-reducer'

const store = createStore(rootReduer, applyMiddleware(logger))

export type RootState = ReturnType<typeof store.getState>

export default store
