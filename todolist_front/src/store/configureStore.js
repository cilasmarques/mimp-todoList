import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

export default function configureStore(preloadedState) {
  const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose; // eslint-disable-line
  const store = createStore(rootReducer, preloadedState, composeEnhancer(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f));

  return store;
};