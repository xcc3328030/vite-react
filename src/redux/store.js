import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

// 引入工具插件
import { composeWithDevTools } from 'redux-devtools-extension'

import reducer from './reducers'

export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
