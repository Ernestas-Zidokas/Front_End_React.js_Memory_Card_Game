import React from 'react';
import game from '../../../game';
import { connect } from 'react-redux';
import { useInterval } from '../../hooks';
import './index.scss';

function Header({ inGame, movesCount }) {
  const [time, setTime] = React.useState(0);

  useInterval(
    () => {
      setTime(time + 1);
    },
    inGame ? 1000 : null,
  );

  return (
    <header className="Header">
      <time className="Header--time">Time: {time} sec.</time>
      <div className="Header--moves">Moves: {movesCount}</div>
    </header>
  );
}

const enhance = connect(state => ({
  inGame: game.selectors.getInGame(state),
  movesCount: game.selectors.getMovesCount(state),
}));

export default enhance(Header);
