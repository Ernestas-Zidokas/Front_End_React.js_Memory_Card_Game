import React from 'react';
import { connect } from 'react-redux';
import game from '../../../game';
import SingleScore from '../../components/SingleScore';
import { compose, bindActionCreators } from 'redux';
import './index.scss';

function ScoreBoard({ scoreBoard, setSortBy, sortBy }) {
  return (
    <div className="ScoreBoard">
      {scoreBoard.length > 0 && (
        <div>
          <button type="button" onClick={() => setSortBy('time')}>
            Time
          </button>
          <button type="button" onClick={() => setSortBy('moves')}>
            Moves
          </button>
        </div>
      )}
      {!scoreBoard.length && <p>Be the First to set your Score!</p>}
      {scoreBoard.map((singleScore, i) => {
        return <SingleScore key={i} {...singleScore} i={i} />;
      })}
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
