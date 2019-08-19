import game from '../../../game';

export default ({ getState, dispatch }) => next => action => {
  if (action.type !== game.actionTypes.OPEN_CARD) {
    console.log('pirmas return');

    return next(action);
  }

  const cards = game.selectors.getCards(getState());
  const previousCard = game.selectors.getPreviousCard(getState());
  console.log('previousCard', previousCard);

  const notMatchedOpenCards = cards
    .filter(card => card.isOpen || card.id === action.payload)
    .filter(card => !card.isMatched);

  console.log('notMatchedOpenCards', notMatchedOpenCards);

  if (notMatchedOpenCards.length > 2) {
    console.log('antras return');
    return;
  }

  if (!previousCard.suit) {
    dispatch({ type: game.actionTypes.SET_PREVIOUS_CARD, payload: action.payload }); //kviest action kuriai paduoti action.payload
  } else {
    dispatch(game.actions.checkForMatch(action.payload));
  }

  dispatch({ type: game.actionTypes.SET_MOVES_COUNT });
  return next(action);
};
