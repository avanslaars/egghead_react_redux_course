import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers/todo'

export default createStore(
  reducer,
  applyMiddleware(thunk)
)
