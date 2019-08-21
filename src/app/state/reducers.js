import { combineReducers } from 'redux';
import game from '../../game';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['game'],
};

const gamePersistConfig = {
  key: 'game',
  storage: storage,
  whitelist: ['scoreBoard'],
};

const rootReducer = combineReducers({
  [game.constants.MODULE_NAME]: persistReducer(gamePersistConfig, game.reducer),
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
