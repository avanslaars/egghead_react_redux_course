import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import store from './store'

const todoChangeHandler = (val) => store.dispatch({type:'CURRENT_UPDATE', payload: val})

const render = () => {
  const state = store.getState()
  ReactDOM.render(<App todos={state.todos}
    currentTodo={state.currentTodo}
    changeCurrent={todoChangeHandler}
     />,
  document.getElementById('root'));
}
render()

store.subscribe(render)

registerServiceWorker();
