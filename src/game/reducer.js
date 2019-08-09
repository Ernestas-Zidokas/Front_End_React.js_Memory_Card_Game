import * as actionTypes from './actionTypes';

const INITIAL_GAME_STATE = {
  data: [],
  error: null,
  loading: false,
  previousCard: {},
  winGame: false,
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

    case actionTypes.OPEN_CARD:
      return {
        ...state,
        cards: {
          ...state.cards,
          data: state.cards.data.map(card =>
            card.id === payload ? { ...card, isOpen: true } : card,
          ),
        },
      };

    case actionTypes.SET_PREVIOUS_CARD:
      return {
        ...state,
        cards: {
          ...state.cards,
          previousCard: state.cards.data.find(card => card.id === payload),
        },
      };

    case actionTypes.CLOSE_CARDS:
      return {
        ...state,
        cards: {
          ...state.cards,
          data: state.cards.data.map(card =>
            card.id === payload.id || card.id === payload.prevId
              ? { ...card, isOpen: false }
              : card,
          ),
          previousCard: {},
        },
      };
    case actionTypes.OPEN_SUCCESS:
      return {
        ...state,
        cards: {
          ...state.cards,
          previousCard: {},
        },
      };
    case actionTypes.WIN_GAME:
      return {
        ...state,
        cards: {
          ...state.cards,
          data: state.cards.data.map(card => ({ ...card, isOpen: true })),
          winGame: true,
        },
      };

    default:
      return state;
  }
}

export default reducer;
