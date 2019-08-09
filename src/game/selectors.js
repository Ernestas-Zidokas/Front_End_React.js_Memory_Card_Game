import { MODULE_NAME } from './constants';

export const getCards = state => {
  return state[MODULE_NAME].cards.data;
};

export const getWinGame = state => {
  return state[MODULE_NAME].cards.winGame;
};
