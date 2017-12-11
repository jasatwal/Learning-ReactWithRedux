import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
// Actaully resolves to ./reducers/index
import reducers from './reducers';

//const createStoreWithMiddleware = applyMiddleware()(createStore);
const createStoreWithMiddleware = createStore;

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
