import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import store from './store'

const state = store.getState()
ReactDOM.render(<App {...state} />, document.getElementById('root'));

registerServiceWorker();
