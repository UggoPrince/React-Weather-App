import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const initialState = {
  page: 'home',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SETTINGS':
      state.page = 'settings';
      return { page: state.page };
    default:
      return state;
  }
}

const store = createStore(reducer);
const title = 'React with Webpack and Babel';
const rootEl = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <App title={title} />
  </Provider>, rootEl,
);
