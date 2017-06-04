import React, { Component } from 'react';
import {connect} from 'react-redux'
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import {updateCurrent} from './reducers/todo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React with Redux</h2>
        </div>
        <div className="Todo-App">
          <TodoForm
            currentTodo={this.props.currentTodo}
            changeCurrent={this.props.updateCurrent}
             />
          <TodoList todos={this.props.todos} />
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => state,
  {updateCurrent}
)(App)
