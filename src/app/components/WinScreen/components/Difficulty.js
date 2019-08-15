import React from 'react';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import game from '../../../../game';

function Difficulty({ setCardCount }) {
  return (
    <div className="WinScreen--container--difficulty">
      <h3>Difficulty:</h3>
      <button type="button" onClick={() => setCardCount(5)}>
        Easy
      </button>
      <button type="button" onClick={() => setCardCount(10)}>
        Medium
      </button>
      <button type="button" onClick={() => setCardCount(15)}>
        Hard
      </button>
    </div>
  );
}

const enhance = compose(
  connect(
    null,
    dispatch =>
      bindActionCreators(
        {
          setCardCount: game.actions.setCardCount,
        },
        dispatch,
      ),
  ),
);

export default enhance(Difficulty);
