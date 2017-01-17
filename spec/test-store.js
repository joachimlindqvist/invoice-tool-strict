import { createStore as createStoreRedux, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';

import reducers from '../src/reducers';

// Skulle kunna flyttas ut så blir det snyggare och återanvändbart
let __actionLogMiddlewareActions = [];
const actionLogMiddleware = store => next => action => {
    __actionLogMiddlewareActions.push(action);
    next(action);
}

const enhancer = compose(
  applyMiddleware(thunk, actionLogMiddleware)
);

// Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
// if (module.hot) {
//  module.hot.accept('../reducers', () =>
//    store.replaceReducer(require('../reducers')/*.default if you use Babel 6+ */)
//  );

export default () => {
    __actionLogMiddlewareActions = [];
    const store = createStoreRedux(reducers, {}, enhancer);
    store.getActions = function () {
        return __actionLogMiddlewareActions;
    }
    return store;
}