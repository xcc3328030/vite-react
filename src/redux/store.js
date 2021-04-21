import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import countReducer from './reducers/count'
import personReducer from './reducers/person'

const allReducer = combineReducers({
    he: countReducer,
    ren: personReducer
})

export default createStore(allReducer, applyMiddleware(thunk))
