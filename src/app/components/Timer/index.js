import React, { useContext } from 'react';
import game from '../../../game';
import { connect } from 'react-redux';
import { useInterval } from '../../hooks';
import TimerContext from '../TimerContext';
import { timeConverter, countTimePassed } from '../../../utils';
import './index.scss';

function Timer({ inGame, movesCount }) {
  const { startTime, currentTime, setCurrentTime } = useContext(TimerContext);

  useInterval(
    () => {
      setCurrentTime(countTimePassed(Date.now(), startTime));
    },
    inGame ? 1000 : null,
  );

  const { min, sec } = timeConverter(currentTime);

  return (
    <div className="Timer">
      <time className="Timer--time">
        Time: {min}
        <span>m</span> : {sec}
        <span>s</span>
        <div className="Timer--moves">Moves: {movesCount}</div>
      </time>
    </div>
  );
}

const enhance = connect(state => ({
  inGame: game.selectors.getInGame(state),
  movesCount: game.selectors.getMovesCount(state),
}));

export default enhance(Timer);
