import {TODO_ADD, TODOS_LOAD, TODO_REPLACE} from './todo'

const MESSAGE_SHOW = 'MESSAGE_SHOW'

export const showMessage = (msg) => ({type: MESSAGE_SHOW, payload: msg})

export default function(state='', action) {
  switch(action.type) {
    case MESSAGE_SHOW:
      return action.payload
    case TODO_ADD:
    case TODOS_LOAD:
    case TODO_REPLACE:
      return ''
    default:
      return state
  }
}
