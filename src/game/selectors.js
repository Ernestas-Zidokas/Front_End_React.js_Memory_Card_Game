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

export const getScoreBoardEasy = state => {
  return state[MODULE_NAME].scoreBoard.difficulty.easy;
};

export const getScoreBoardMedium = state => {
  return state[MODULE_NAME].scoreBoard.difficulty.medium;
};

export const getScoreBoardHard = state => {
  return state[MODULE_NAME].scoreBoard.difficulty.hard;
};

export const getSortBy = state => {
  return state[MODULE_NAME].scoreBoard.sortBy;
};

export const getPreviousCard = state => {
  return state[MODULE_NAME].cards.previousCard;
};
