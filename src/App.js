import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React with Redux</h2>
        </div>
        <div className="Todo-App">
          <form>
            <input type="text"/>
          </form>
          <div className="Todo-List">
            <ul>
              {this.props.todos.map(todo => (
                <li key={todo.id}>
                  <input type="checkbox" defaultChecked={todo.isComplete} /> 
                  {todo.name}
                </li>
              ))}

            </ul>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
