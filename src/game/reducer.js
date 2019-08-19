import * as actionTypes from './actionTypes';

const INITIAL_GAME_STATE = {
  data: [],
  error: null,
  loading: false,
  previousCard: {},
  isWin: false,
  inGame: false,
  cardCount: 7,
  movesCount: 0,
};

const INITIAL_SCOREBOARD_STATE = {
  data: [{ name: 'Ernestas', movesCount: 5, time: 10 }],
  sortBy: 'time',
};

const INITIAL_STATE = {
  cards: INITIAL_GAME_STATE,
  scoreBoard: INITIAL_SCOREBOARD_STATE,
};

function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case actionTypes.GET_CARDS:
      return {
        ...state,
        cards:
          state.cards.data.length > 0
            ? { ...state.cards, loading: true }
            : { ...INITIAL_GAME_STATE, loading: true },
      };

    case actionTypes.GET_CARDS_SUCCESS:
      return {
        ...state,
        cards:
          state.cards.data.length > 0
            ? { ...state.cards, data: payload, loading: false }
            : { ...INITIAL_GAME_STATE, data: payload },
      };

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
          previousCard: INITIAL_GAME_STATE.previousCard,
        },
      };

    case actionTypes.OPEN_SUCCESS:
      return {
        ...state,
        cards: {
          ...state.cards,
          previousCard: INITIAL_GAME_STATE.previousCard,
          data: state.cards.data.map(card =>
            card.id === payload || state.cards.previousCard.id === card.id
              ? { ...card, isMatched: true }
              : card,
          ),
        },
      };

    case actionTypes.IS_WIN:
      return {
        ...state,
        cards: {
          ...state.cards,
          data: state.cards.data.map(card => ({ ...card, isOpen: true })),
          isWin: true,
        },
      };

    case actionTypes.PLAY:
      return {
        ...state,
        cards: {
          ...state.cards,
          inGame: !state.cards.inGame,
        },
      };

    case actionTypes.SET_CARD_COUNT:
      return {
        ...state,
        cards: {
          ...state.cards,
          cardCount: payload,
        },
      };

    case actionTypes.SET_MOVES_COUNT:
      return {
        ...state,
        cards: {
          ...state.cards,
          movesCount: state.cards.movesCount + 1,
        },
      };

    case actionTypes.PLAY_AGAIN:
      return {
        ...state,
        cards: {
          ...state.cards,
          movesCount: 0,
          isWin: false,
        },
      };

    case actionTypes.SET_SCORE:
      return {
        ...state,
        scoreBoard: {
          ...state.scoreBoard,
          data: [...state.scoreBoard.data, { ...payload, movesCount: state.cards.movesCount }],
        },
      };

    case actionTypes.SET_SORT_BY:
      return {
        ...state,
        scoreBoard: {
          sortBy: payload,
          data:
            payload === 'time'
              ? state.scoreBoard.data.sort((a, b) => a.time - b.time)
              : state.scoreBoard.data.sort((a, b) => a.movesCount - b.movesCount),
        },
      };

    default:
      return state;
  }
}

export default reducer;
