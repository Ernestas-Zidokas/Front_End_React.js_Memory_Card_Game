import * as types from './actionTypes';
import { MODULE_NAME } from './constants';
import { generateCards } from '../utils';

export const openCard = id => async (dispatch, getState) => {
  const cards = getState()[MODULE_NAME].cards;
  const { suit: prevSuit, num: prevNum, id: prevId } = cards.previousCard;
  const { suit: currSuit, num: currNum, isOpen } = cards.data.find(card => card.id === id);

  if (!isOpen) {
    dispatch({ type: types.OPEN_CARD, payload: id });
    dispatch({ type: types.SET_MOVES_COUNT });

    if (prevSuit) {
      if (prevSuit === currSuit && prevNum === currNum) {
        dispatch({ type: types.OPEN_SUCCESS });
      } else {
        await setTimeout(() => {
          dispatch({ type: types.CLOSE_CARDS, payload: { prevId, id } });
        }, 700);
      }
    }

    if (!prevSuit) {
      dispatch({ type: types.SET_PREVIOUS_CARD, payload: id });
    }

    if (getState()[MODULE_NAME].cards.data.every(card => card.isOpen)) {
      dispatch({ type: types.IS_WIN, payload: true });
      dispatch({ type: types.PLAY });
    }
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

  try {
    dispatch({
      type: types.GET_CARDS_SUCCESS,
      payload: generateCards(cardCount),
    });
  } catch (error) {
    dispatch({
      type: types.GET_CARDS_FAILURE,
      payload: 'Something went wrong!',
    });
  }
};

export const setCardCount = count => dispatch => {
  dispatch({ type: types.SET_CARD_COUNT, payload: count });

  dispatch(getCards());
};
