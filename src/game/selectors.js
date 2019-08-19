import { MODULE_NAME } from './constants';

export const getCards = state => {
  return state[MODULE_NAME].cards.data;
};

export const getWinGame = state => {
  return state[MODULE_NAME].cards.isWin;
};

export const getInGame = state => {
  return state[MODULE_NAME].cards.inGame;
};

export const getCardCount = state => {
  return state[MODULE_NAME].cards.cardCount;
};

export const getMovesCount = state => {
  return state[MODULE_NAME].cards.movesCount;
};

export const getScoreBoard = state => {
  return state[MODULE_NAME].scoreBoard.data;
};

export const getSortBy = state => {
  return state[MODULE_NAME].scoreBoard.sortBy;
};

export const getPreviousCard = state => {
  return state[MODULE_NAME].cards.previousCard;
};
