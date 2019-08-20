import React, { useState } from 'react';
import styled from 'styled-components';
import SingleScore from '../../../components/SingleScore';
import { sortArrayBy } from '../../../../utils';

const Button = styled.button`
  background: ${({ filter, value }) => {
    if (filter === value) {
      return 'green';
    }

    return 'grey';
  }};
  border: none;
  margin: 10px;
  padding: 10px 20px;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    background: green;
  }
`;

Button.defaultProps = {
  type: 'button',
};

function OneScoreBoard({ scoreBoard, title }) {
  const [board, setBoard] = useState(scoreBoard);
  const [filteredBy, setFilteredBy] = useState('time');

  return (
    <div className="OneScoreBoard">
      <p>{title} Difficulty Scoreboard!</p>
      {scoreBoard.length > 0 && (
        <div className="ScoreBoard--filter">
          <p>Filter by: </p>
          <Button
            filter={filteredBy}
            value={'time'}
            onClick={() => {
              setBoard(sortArrayBy([...scoreBoard], 'time'));
              setFilteredBy('time');
            }}
          >
            Time
          </Button>
          <Button
            value={'moves'}
            filter={filteredBy}
            onClick={() => {
              setBoard(sortArrayBy([...scoreBoard], 'movesCount'));
              setFilteredBy('moves');
            }}
          >
            Moves
          </Button>
        </div>
      )}
      <div className="ScoreBoard--header">
        <span>Nr.</span>
        <span>Name</span>
        <span>Moves</span>
        <span>Time</span>
      </div>
      {!scoreBoard.length && <p>Be the First to set your Score!</p>}
      <div className="ScoreBoard--scores">
        {board.map((singleScore, i) => {
          return <SingleScore key={i} {...singleScore} i={i} />;
        })}
      </div>
    </div>
  );
}

export default OneScoreBoard;
