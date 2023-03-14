import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from './rootReducer';
import initialState from './initialState';

let store;

const midd = () => {
  return [thunk, reduxImmutableStateInvariant()];
};

export default function configureStore() {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...midd()))
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept(rootReducer, () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
}

export const getStore = () => store;

export const getState = () => store.getState();
