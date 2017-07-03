import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchTodos, toggleTodo, deleteTodo, getVisibleTodos} from '../reducers/todo'

const TodoItem = ({id, name, isComplete, toggleTodo, deleteTodo}) => (
  <li>
    <span className='delete-item'>
      <button onClick={() => deleteTodo(id)}>X</button>
    </span>
    <input type="checkbox"
      checked={isComplete}
      onChange={() => toggleTodo(id)} />
    {name}
  </li>
)

class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodos()
  }

  render() {
    return (
      <div className="Todo-List">
        <ul>
          {this.props.todos.map(todo =>
            <TodoItem key={todo.id}
              toggleTodo={this.props.toggleTodo}
              deleteTodo={this.props.deleteTodo}
              {...todo} />)}
        </ul>
      </div>
    )
  }
}

export default connect(
  (state, ownProps) => ({todos: getVisibleTodos(state.todo.todos, ownProps.filter)}),
  {fetchTodos, toggleTodo, deleteTodo}
)(TodoList)
