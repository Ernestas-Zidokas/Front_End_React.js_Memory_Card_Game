import React from 'react';
import { timeConverter } from '../../../utils';
import './index.scss';

function SingleScore({ name, movesCount, time, i }) {
  const { min, sec } = timeConverter(time);

  return (
    <div className="SingleScore">
      <span>{i + 1}.</span>
      <span>{name}</span>
      <span>Moves: {movesCount}</span>
      <span>
        Time: {min}m : {sec}s
      </span>
    </div>
  );
}

export default SingleScore;
