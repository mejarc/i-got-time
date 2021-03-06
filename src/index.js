import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import task from './reducers/task';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

let store = createStore(task);

render (
  <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
