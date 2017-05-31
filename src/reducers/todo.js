const initState = {
  todos: [
    {id:1, name: 'create a store', isComplete: true},
    {id:2, name: 'Load state through the store', isComplete: true},
    {id:3, name: 'Handle state changes with redux', isComplete: false}
  ]
}
export default (state = initState, action) => {
  switch (action.type) {
    case 'TODO_ADD':
      return {...state, todos: state.todos.concat(action.payload)}
    default:
      return state
  }
}
