import React from 'react';
import { timeConverter } from '../../../utils';
import './index.scss';

function SingleScore({ name, movesCount, time, i }) {
  const { min, sec } = timeConverter(time);

  return (
    <div className="SingleScore">
      Nr. {i + 1} {name} | Moves: {movesCount} | Time: {min}m : {sec}s
    </div>
  );
}

export default SingleScore;
