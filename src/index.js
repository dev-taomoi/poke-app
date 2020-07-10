// external imports
import React from 'react';
import { render } from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

// local imports
import App from './App';
import rootReducer from './slices';

// assets
import './index.css';

const store = configureStore({ reducer: rootReducer });

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)