import * as types from './actionTypes';
import { generateCards } from '../utils';

export const getCards = () => async dispatch => {
  dispatch({ type: types.GET_CARDS });

  try {
    dispatch({
      type: types.GET_CARDS_SUCCESS,
      payload: generateCards(10),
    });
  } catch (error) {
    dispatch({
      type: types.GET_CARDS_FAILURE,
      payload: 'Something went wrong!',
    });
  }
};
