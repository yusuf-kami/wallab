import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';

import './style.css';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);