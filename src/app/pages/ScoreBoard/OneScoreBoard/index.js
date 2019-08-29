import React, { useState } from 'react';
import { Filter, Header, Scores } from './components';
import './index.scss';

function OneScoreBoard({ scoreBoard, title }) {
  const [board, setBoard] = useState(scoreBoard);

  return (
    <div className="OneScoreBoard">
      <p>{title} Difficulty Scoreboard</p>
      {scoreBoard.length > 0 && <Filter scoreBoard={scoreBoard} setBoard={setBoard} />}
      <Header />
      {!scoreBoard.length && <p>Be the First to set your Score!</p>}
      <Scores board={board} />
    </div>
  );
}

export default OneScoreBoard;
