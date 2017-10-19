// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
// eslint-disable-next-line no-unused-vars
import { Provider } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import App from './containers/App';
import reducer from './reducers';
import './index.css';

const store = createStore(reducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  // eslint-disable-next-line no-undef
  document.getElementById('root')
);
