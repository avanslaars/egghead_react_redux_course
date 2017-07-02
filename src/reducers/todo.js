import {getTodos, createTodo, updateTodo, destroyTodo} from '../lib/todoServices'
import {showMessage} from './messages'

const initState = {
  todos: [],
  currentTodo: ''
}

export const TODO_ADD = 'TODO_ADD'
export const TODOS_LOAD = 'TODOS_LOAD'
const CURRENT_UPDATE = 'CURRENT_UPDATE'
export const TODO_REPLACE = 'TODO_REPLACE'
export const TODO_REMOVE = 'TODO_REMOVE'

export const updateCurrent = (val) => ({type:CURRENT_UPDATE, payload: val})
export const loadTodos = (todos) => ({type: TODOS_LOAD, payload: todos})
export const addTodo = (todo) => ({type: TODO_ADD, payload: todo})
export const replaceTodo = (todo) => ({type: TODO_REPLACE, payload: todo })
export const removeTodo = (id) => ({type: TODO_REMOVE, payload: id})
export const fetchTodos = () => {
  return (dispatch) => {
    dispatch(showMessage('Loading Todos'))
    getTodos()
      .then(todos => dispatch(loadTodos(todos)))
  }
}

export const saveTodo = (name) => {
  return (dispatch) => {
    dispatch(showMessage('Saving Todo'))
    createTodo(name)
      .then(res => dispatch(addTodo(res)))
  }
}

export const toggleTodo = (id) => {
  return (dispatch, getState) => {
    dispatch(showMessage('Saving todo update'))
    const {todos} = getState().todo
    const todo = todos.find(t => t.id === id)
    const toggled = {...todo, isComplete: !todo.isComplete}
    updateTodo(toggled)
      .then(res => dispatch(replaceTodo(res)))
  }
}

export const deleteTodo = (id) => {
  return (dispatch) => {
    dispatch(showMessage('Removing Todo'))
    destroyTodo(id)
      .then(() => dispatch(removeTodo(id)))
  }
}

export const getVisibleTodos = (todos, filter) => {
  switch(filter) {
    case 'active':
      return todos.filter(t => !t.isComplete)
    case 'completed':
      return todos.filter(t => t.isComplete)
    default:
      return todos
  }
}

export default (state = initState, action) => {
  switch (action.type) {
    case TODO_ADD:
      return {...state, currentTodo: '', todos: state.todos.concat(action.payload)}
    case TODOS_LOAD:
      return {...state, todos: action.payload}
    case CURRENT_UPDATE:
      return {...state, currentTodo: action.payload}
    case TODO_REPLACE:
      return {...state,
        todos: state.todos
          .map(t => t.id === action.payload.id ? action.payload : t)
      }
    case TODO_REMOVE:
      return {...state,
        todos: state.todos.filter(t => t.id !== action.payload)
      }
    default:
      return state
  }
}
