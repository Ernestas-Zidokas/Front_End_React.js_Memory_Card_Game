import game from '../../../game';

export default ({ getState, dispatch }) => next => action => {
  next(action);

  if (action.type === game.actionTypes.OPEN_SUCCESS) {
    const everyCardMatched = game.selectors.getCards(getState()).every(card => card.isMatched);

    if (everyCardMatched) {
      dispatch(game.actions.setWin());
      dispatch(game.actions.togglePlay());
    }
  }
};
