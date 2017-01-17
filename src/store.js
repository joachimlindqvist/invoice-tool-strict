import { createStore as createStoreRedux, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';

import reducers from './reducers';

const composeEnhancers = (global.window && global.window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);

// Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
// if (module.hot) {
//  module.hot.accept('../reducers', () =>
//    store.replaceReducer(require('../reducers')/*.default if you use Babel 6+ */)
//  );

export const createStore = () => createStoreRedux(reducers, {}, enhancer);
export default createStoreRedux(reducers, {}, enhancer);
