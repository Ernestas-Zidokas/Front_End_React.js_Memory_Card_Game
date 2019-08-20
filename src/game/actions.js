import * as types from './actionTypes';
import { MODULE_NAME } from './constants';
import * as selectors from './selectors';
import { generateCards } from '../utils';

export const openCard = id => dispatch => {
  dispatch({ type: types.OPEN_CARD, payload: id });
};

export const checkForMatch = id => (dispatch, getState) => {
  const cards = selectors.getCards(getState());

  const { suit: prevSuit, num: prevNum } = selectors.getPreviousCard(getState());
  const { suit: currSuit, num: currNum } = cards.find(card => card.id === id);

  if (prevSuit === currSuit && prevNum === currNum) {
    dispatch({ type: types.OPEN_SUCCESS, payload: id });
  } else {
    setTimeout(() => {
      dispatch({ type: types.CLOSE_CARDS, payload: id });
    }, 700);
  }
};

export const setPreviousCard = payload => ({
  type: types.SET_PREVIOUS_CARD,
  payload,
});

export const setMovesCount = () => ({ type: types.SET_MOVES_COUNT });

export const togglePlay = () => ({ type: types.PLAY });

export const setWin = () => ({ type: types.IS_WIN, payload: true });

export const playAgain = () => dispatch => {
  dispatch({ type: types.PLAY_AGAIN });
  dispatch(togglePlay());
  dispatch(getCards());
};

export const getCards = () => (dispatch, getState) => {
  const { cardCount } = getState()[MODULE_NAME].cards;

  dispatch({ type: types.GET_CARDS });
  dispatch({
    type: types.GET_CARDS_SUCCESS,
    payload: generateCards(2),
  });
};

export const setCardCount = count => dispatch => {
  dispatch({ type: types.SET_CARD_COUNT, payload: count });
};

export const setScore = (name, time, level) => dispatch => {
  const score = { name, time, level };

  dispatch({
    type: types.SET_SCORE,
    payload: score,
  });
};
