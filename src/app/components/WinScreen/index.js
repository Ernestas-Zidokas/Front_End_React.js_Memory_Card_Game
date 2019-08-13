import React from 'react';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import game from '../../../game';
import './index.scss';

function WinScreen({ isWin, play }) {
  return (
    <div className="WinScreen">
      {isWin && <div className="WinScreen--title">You Won!!!</div>}
      <button type="button" onClick={() => play()}>
        Play
      </button>
    </div>
  );
}

const enhance = compose(
  connect(
    state => ({
      isWin: game.selectors.getWinGame(state),
    }),
    dispatch =>
      bindActionCreators(
        {
          play: game.actions.play,
        },
        dispatch,
      ),
  ),
);

export default enhance(WinScreen);
