import * as types from './actionTypes';
import { MODULE_NAME } from './constants';
import * as selectors from './selectors';
import { generateCards } from '../utils';

export const openCard = id => (dispatch, getState) => {
  const cards = getState()[MODULE_NAME].cards;
  const { suit: prevSuit, num: prevNum, id: prevId } = cards.previousCard;
  const { suit: currSuit, num: currNum, isOpen } = cards.data.find(card => card.id === id);

  dispatch({ type: types.OPEN_CARD, payload: id });

  if (!isOpen) {
    //atskiras middleware kuris reaguos i if card matched
    const everyCardOpen = getState()[MODULE_NAME].cards.data.every(card => card.isOpen);

    if (everyCardOpen) {
      dispatch({ type: types.IS_WIN, payload: true });
      dispatch({ type: types.PLAY });
    }
  }
};

export const checkForMatch = id => (dispatch, getState) => {
  const cards = selectors.getCards(getState());

  const { suit: prevSuit, num: prevNum, id: prevId } = selectors.getPreviousCard(getState());
  const { suit: currSuit, num: currNum } = cards.find(card => card.id === id);

  if (prevSuit === currSuit && prevNum === currNum) {
    dispatch({ type: types.OPEN_SUCCESS, payload: id });
  } else {
    setTimeout(() => {
      dispatch({ type: types.CLOSE_CARDS, payload: { prevId, id } });
    }, 700);
  }
};

export const play = () => ({
  type: types.PLAY,
});

export const playAgain = () => dispatch => {
  dispatch({ type: types.PLAY_AGAIN });
  dispatch(play());
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

export const setScore = (e, name, time) => dispatch => {
  e.preventDefault();
  const score = { name, time };

  dispatch({
    type: types.SET_SCORE,
    payload: score,
  });
};

export const setSortBy = filter => ({
  type: types.SET_SORT_BY,
  payload: filter,
});
