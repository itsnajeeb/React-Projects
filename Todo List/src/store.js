import { createStore, combineReducers } from 'redux'
import todoReducer from './reducer/todoReducer'

const reducer = combineReducers({ todo: todoReducer })

const store = createStore(reducer)

export default store