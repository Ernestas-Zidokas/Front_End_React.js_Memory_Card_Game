import React, { useState, useContext } from 'react';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import TimerContext from '../../TimerContext';
import game from '../../../../game';

function Score({ setScore }) {
  const [name, setName] = useState('');
  const { time } = useContext(TimerContext);

  const handleChange = e => {
    setName(e.target.value);
  };

  return (
    <form onSubmit={e => setScore(e, name, time)}>
      <label>Your Name:</label>
      <input type="text" name="score" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

const enhance = compose(
  connect(
    null,
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
