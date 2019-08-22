import React from 'react';
import SingleScore from '../../../../components/SingleScore';

function Scores({ board }) {
  return (
    <div className="OneScoreBoard--scores">
      {board.map((singleScore, i) => {
        return <SingleScore key={i} {...singleScore} i={i} />;
      })}
    </div>
  );
}

export default Scores;
