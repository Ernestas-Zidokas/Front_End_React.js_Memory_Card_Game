import * as types from './actionTypes';
import { generateCards } from '../utils';

export const openCard = id => (dispatch, getState) => {
  dispatch({ type: types.OPEN_CARD, payload: id });
  const cards = getState().game.cards;

  const { suit: prevSuit, num: prevNum, id: prevId } = cards.previousCard;
  const { suit: currSuit, num: currNum } = cards.data.find(card => card.id === id);

  if (prevSuit) {
    if (prevSuit === currSuit && prevNum === currNum) {
      dispatch({ type: types.OPEN_SUCCESS });
    } else {
      setTimeout(() => {
        dispatch({ type: types.CLOSE_CARDS, payload: { prevId, id } });
      }, 1000);
    }
  }

  dispatch({ type: types.SET_PREVIOUS_CARD, payload: id });

  if (getState().game.cards.data.every(card => card.isOpen)) {
    dispatch({ type: types.WIN_GAME, payload: true });
    dispatch({ type: types.PLAY });
  }
};

export const play = () => ({
  type: types.PLAY,
});

export const getCards = count => async dispatch => {
  dispatch({ type: types.GET_CARDS });

  try {
    dispatch({
      type: types.GET_CARDS_SUCCESS,
      payload: generateCards(count),
    });
  } catch (error) {
    dispatch({
      type: types.GET_CARDS_FAILURE,
      payload: 'Something went wrong!',
    });
  }
};
