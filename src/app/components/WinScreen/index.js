import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import game from '../../../game';
import { Difficulty, Score } from './components';
import TimerContext from '../TimerContext';
import './index.scss';

function WinScreen({ isWin, play, playAgain }) {
  const { setTime } = useContext(TimerContext);

  return (
    <div className="WinScreen">
      <div className="WinScreen--container">
        {isWin && <div className="WinScreen--container--title">You Won!!!</div>}
        {isWin && <Score />}
        {!isWin && (
          <button className="WinScreen--container--play" type="button" onClick={() => play()}>
            Play
          </button>
        )}
        {isWin && (
          <button
            className="WinScreen--container--playAgain"
            type="button"
            onClick={() => {
              setTime(0);
              playAgain();
            }}
          >
            Play Again
          </button>
        )}
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
          playAgain: game.actions.playAgain,
        },
        dispatch,
      ),
  ),
);

export default enhance(WinScreen);
