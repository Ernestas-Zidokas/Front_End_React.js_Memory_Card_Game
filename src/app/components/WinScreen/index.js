import React from 'react';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import game from '../../../game';
import { Difficulty } from './components';
import './index.scss';

function WinScreen({ isWin, play }) {
  return (
    <div className="WinScreen">
      <div className="WinScreen--container">
        {isWin && <div className="WinScreen--container--title">You Won!!!</div>}
        <button className="WinScreen--container--play" type="button" onClick={() => play()}>
          Play
        </button>
        <Difficulty />
      </div>
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
