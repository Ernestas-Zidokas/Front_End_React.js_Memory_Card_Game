import * as actionTypes from './actionTypes';

const INITIAL_GAME_STATE = {
  data: [],
  error: null,
  loading: false,
};

const INITIAL_STATE = {
  cards: INITIAL_GAME_STATE,
};

function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case actionTypes.GET_CARDS:
      return { ...state, cards: { ...INITIAL_GAME_STATE, loading: true } };

    case actionTypes.GET_CARDS_SUCCESS:
      return { ...state, cards: { ...INITIAL_GAME_STATE, data: payload } };

    case actionTypes.GET_CARDS_FAILURE:
      return { ...state, cards: { ...INITIAL_GAME_STATE, error: payload } };

    default:
      return state;
  }
}

export default reducer;
