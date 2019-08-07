import { combineReducers } from 'redux';
import game from '../../game';

export default combineReducers({
  [game.constants.MODULE_NAME]: game.reducer,
});
