import React, { useContext, useRef } from 'react';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import TimerContext from '../../TimerContext';
import game from '../../../../game';

function Score({ setScore, cardCount }) {
  const { time } = useContext(TimerContext);
  const inputEl = useRef(null);

  const handleSubmit = (e, time) => {
    e.preventDefault();

    if (cardCount === 5) {
      setScore(inputEl.current.value, time, 'easy');
    }

    if (cardCount === 10) {
      setScore(inputEl.current.value, time, 'medium');
    }

    if (cardCount === 15) {
      setScore(inputEl.current.value, time, 'hard');
    }
  };

  return (
    <form onSubmit={e => handleSubmit(e, time)}>
      <label>Your Name:</label>
      <input type="text" name="score" ref={inputEl} />
      <button type="submit">Submit</button>
    </form>
  );
}

const enhance = compose(
  connect(
    state => ({
      cardCount: game.selectors.getCardCount(state),
    }),
    dispatch =>
      bindActionCreators(
        {
          setScore: game.actions.setScore,
        },
        dispatch,
      ),
  ),
);

export default enhance(Score);
