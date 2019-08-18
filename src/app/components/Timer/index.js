import React, { useContext } from 'react';
import game from '../../../game';
import { connect } from 'react-redux';
import { useInterval } from '../../hooks';
import TimerContext from '../TimerContext';
import { timeConverter } from '../../../utils';
import './index.scss';

function Timer({ inGame, movesCount }) {
  const { time, setTime } = useContext(TimerContext);

  useInterval(
    () => {
      setTime(time + 1);
    },
    inGame ? 1000 : null,
  );

  const { min, sec } = timeConverter(time);

  return (
    <div className="Timer">
      <time className="Timer--time">
        Time: {min}
        <span>m</span> : {sec}
        <span>s</span>
      </time>
      <div className="Timer--moves">Moves: {movesCount}</div>
    </div>
  );
}

const enhance = connect(state => ({
  inGame: game.selectors.getInGame(state),
  movesCount: game.selectors.getMovesCount(state),
}));

export default enhance(Timer);
