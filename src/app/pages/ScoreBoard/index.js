import React from 'react';
import { connect } from 'react-redux';
import game from '../../../game';
import OneScoreboard from './components/OneScoreboard';
import './index.scss';

function ScoreBoard({ scoreBoardEasy, scoreBoardHard, scoreBoardMedium }) {
  return (
    <div className="ScoreBoard">
      <OneScoreboard title="Easy" scoreBoard={scoreBoardEasy} />
      <OneScoreboard title="Medium" scoreBoard={scoreBoardMedium} />
      <OneScoreboard title="Hard" scoreBoard={scoreBoardHard} />
    </div>
  );
}

const enhance = connect(state => ({
  scoreBoardEasy: game.selectors.getScoreBoardEasy(state),
  scoreBoardMedium: game.selectors.getScoreBoardMedium(state),
  scoreBoardHard: game.selectors.getScoreBoardHard(state),
}));

export default enhance(ScoreBoard);
