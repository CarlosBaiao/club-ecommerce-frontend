import { createStore } from 'redux'

import rootReduer from './root-reducer'

const store = createStore(rootReduer)

export default store
