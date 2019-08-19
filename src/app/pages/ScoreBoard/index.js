import React from 'react';
import { connect } from 'react-redux';
import game from '../../../game';
import SingleScore from '../../components/SingleScore';
import { compose, bindActionCreators } from 'redux';
import styled from 'styled-components';
import './index.scss';

const Button = styled.button`
  background: ${({ sortBy, time, moves }) => {
    if (sortBy === time || sortBy === moves) {
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

function ScoreBoard({ scoreBoard, setSortBy, sortBy }) {
  return (
    <div className="ScoreBoard">
      {scoreBoard.length > 0 && (
        <div className="ScoreBoard--filter">
          <p>Filter by: </p>
          <Button sortBy={sortBy} time={'time'} onClick={() => setSortBy('time')}>
            Time
          </Button>
          <Button sortBy={sortBy} moves={'moves'} onClick={() => setSortBy('moves')}>
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
        {scoreBoard.map((singleScore, i) => {
          return <SingleScore key={i} {...singleScore} i={i} />;
        })}
      </div>
    </div>
  );
}

const enhance = compose(
  connect(
    state => ({
      scoreBoard: game.selectors.getScoreBoard(state),
      sortBy: game.selectors.getSortBy(state),
    }),
    dispatch =>
      bindActionCreators(
        {
          setSortBy: game.actions.setSortBy,
        },
        dispatch,
      ),
  ),
);

export default enhance(ScoreBoard);
