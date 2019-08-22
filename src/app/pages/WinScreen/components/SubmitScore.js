import React, { useContext, useRef } from 'react';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import Button from '../../../components/Button';
import TimerContext from '../../../components/TimerContext';
import IsScoreSubmitedContext from '../../../components/IsScoreSubmitedContext';
import game from '../../../../game';

function SubmitScore({ setScore, cardCount }) {
  const { currentTime } = useContext(TimerContext);
  const { isSubmited, setIsSubmited } = useContext(IsScoreSubmitedContext);
  const inputEl = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmited(true);

    if (cardCount === 5) {
      setScore(inputEl.current.value, currentTime, 'easy');
    }

    if (cardCount === 10) {
      setScore(inputEl.current.value, currentTime, 'medium');
    }

    if (cardCount === 15) {
      setScore(inputEl.current.value, currentTime, 'hard');
    }
  };

  return (
    <form className="WinScreen--container--form" onSubmit={e => handleSubmit(e, currentTime)}>
      {!isSubmited && (
        <React.Fragment>
          <p>Submit your Score!</p>
          <label>Name:</label>
          <input type="text" name="score" ref={inputEl} />
          <Button type="submit">Submit</Button>
        </React.Fragment>
      )}
      {isSubmited && <p>Successfully submited!</p>}
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

export default enhance(SubmitScore);
