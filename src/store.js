import {createStore, applyMiddleware, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import todoReducer from './reducers/todo'
import messageReducer from './reducers/messages'

const reducer = combineReducers({
  todo: todoReducer,
  message: messageReducer
})

export default createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)
