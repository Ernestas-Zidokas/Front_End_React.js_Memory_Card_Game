import game from '../../../game';

export default ({ getState, dispatch }) => next => action => {
  if (action.type !== game.actionTypes.OPEN_CARD) {
    return next(action);
  }

  const cards = game.selectors.getCards(getState());
  const previousCard = game.selectors.getPreviousCard(getState());

  const notMatchedOpenCards = cards
    .filter(card => card.isOpen || card.id === action.payload)
    .filter(card => !card.isMatched);

  if (notMatchedOpenCards.length > 2) {
    return;
  }

  dispatch(game.actions.setMovesCount());

  next(action);

  if (!previousCard.suit) {
    return dispatch(game.actions.setPreviousCard(action.payload));
  }

  return dispatch(game.actions.checkForMatch(action.payload));
};
