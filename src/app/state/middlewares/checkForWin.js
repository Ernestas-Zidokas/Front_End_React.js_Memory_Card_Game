import game from '../../../game';

export default ({ getState, dispatch }) => next => action => {
  if (action.type !== game.actionTypes.OPEN_CARD) {
    return next(action);
  }

  const everyCardOpen = game.selectors.getCards(getState()).every(card => card.isMatched);

  if (everyCardOpen) {
    dispatch(game.actions.setWin());
    dispatch(game.actions.play());
  }

  return next(action);
};
