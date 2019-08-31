import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import game from '../../../game';
import { Difficulty, SubmitScore } from './components';
import Button from '../../components/Button';
import TimerContext from '../../components/TimerContext';
import IsScoreSubmitedContext from '../../components/IsScoreSubmitedContext';
import './index.scss';

function WinScreen({ isWin, togglePlay, playAgain }) {
  const { setStartTime } = useContext(TimerContext);
  const { setIsSubmited } = useContext(IsScoreSubmitedContext);

  const play = () => {
    setStartTime(Date.now());
    togglePlay();
  };

  const playAgainClick = () => {
    setStartTime(Date.now());
    playAgain();
    setIsSubmited(false);
  };

  return (
    <div className="WinScreen">
      <div className="WinScreen--container">
        {isWin && <div className="WinScreen--container--title">You Won!!!</div>}
        {isWin && <SubmitScore />}
        <div className="WinScreen--container--buttons">
          {!isWin && (
            <Button onClick={play} className={'WinScreen--container--play'}>
              Play
            </Button>
          )}
          {isWin && (
            <Button onClick={playAgainClick} className={'WinScreen--container--playAgain'}>
              Play Again
            </Button>
          )}
        </div>
        <Difficulty />
      </div>
    </div>
  );
}

const enhance = connect(
  state => ({
    isWin: game.selectors.getWinGame(state),
  }),
  dispatch =>
    bindActionCreators(
      {
        togglePlay: game.actions.togglePlay,
        playAgain: game.actions.playAgain,
      },
      dispatch,
    ),
);

export default enhance(WinScreen);
