import React from 'react';
import { connect } from 'react-redux';
import game from '../../../game';
import SingleScore from '../../components/SingleScore';
import { compose, bindActionCreators } from 'redux';
import './index.scss';

function ScoreBoard({ scoreBoard, setSortBy, sortBy }) {
  return (
    <div className="ScoreBoard">
      <div className="ScoreBoard--header">
        <span>Nr.</span>
        <span>Name</span>
        <span>Moves</span>
        <span>Time</span>
      </div>
      {scoreBoard.length > 0 && (
        <div className="ScoreBoard--filter">
          <button type="button" onClick={() => setSortBy('time')}>
            Time
          </button>
          <button type="button" onClick={() => setSortBy('moves')}>
            Moves
          </button>
        </div>
      )}
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
