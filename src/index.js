import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
// import { removeComment } from './actions';
// import { editComment } from './actions';
// import { thumbUpComment } from './actions';
// import { thumbDownComment } from './actions';
import { addComment } from './actions';
import reducer from './reducer.js';
import { createStore } from 'redux';

const store = createStore(reducer);

store.dispatch(addComment('pierwszy komentarz'));
store.dispatch(addComment('drugi komentarz'));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);




