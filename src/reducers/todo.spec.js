import reducer from './todo'

describe('Todo Reducer', () => {
  test('returns a state object', () => {
    const result = reducer(undefined, {type:'ANYTHING'})
    expect(result).toBeDefined()
  })

  test('adds a todo', () => {
    const startState = {
      todos: [
        {id: 1, name:'Create Static UI', isComplete: true},
        {id: 2, name:'Create Initial State', isComplete: false},
        {id: 3, name:'Use state to render UI', isComplete: false}
      ]
    }
    const expectedState = {
      todos: [
        {id: 1, name:'Create Static UI', isComplete: true},
        {id: 2, name:'Create Initial State', isComplete: false},
        {id: 3, name:'Use state to render UI', isComplete: false},
        {id: 4, name:'Added todo', isComplete: false}
      ]
    }
    const action = {type:'TODO_ADD', payload: {id: 4, name:'Added todo', isComplete: false}}
    const result = reducer(startState, action)
    expect(result).toEqual(expectedState)
  })

  test('updates current todo', () => {
    const startState = {
      todos: [],
      currentTodo: ''
    }

    const expectedState = {
      todos: [],
      currentTodo: 'abc'
    }

    const result = reducer(startState, {type: 'CURRENT_UPDATE', payload: 'abc'})
    expect(result).toEqual(expectedState)
  })
})
