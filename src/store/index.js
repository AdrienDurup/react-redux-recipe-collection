import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';

import middlewares from '../middlewares';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(...middlewares),
);

const store = createStore(reducer, enhancers);

export default store;
