import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import persistedReducer from './reducers';
import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import { onCardOpen, checkForWin } from './middlewares';

const middlewares = [onCardOpen, checkForWin, thunk, apiMiddleware];

const composedMiddlewares =
  process.env.NODE_ENV === 'production'
    ? applyMiddleware(...middlewares)
    : composeWithDevTools(applyMiddleware(...middlewares));

export default () => {
  const store = createStore(persistedReducer, composedMiddlewares);
  const persistor = persistStore(store);
  return { store, persistor };
};
