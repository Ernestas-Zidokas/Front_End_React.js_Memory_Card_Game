import React from 'react';
import { SingleCard } from '../../components';
import { connect } from 'react-redux';
import game from '../../../game';
import './index.scss';

function Cards({ cards, isWin }) {
  return (
    <div className="Cards">
      {isWin && <h1>You Won!</h1>}
      {cards.map(props => {
        return <SingleCard key={props.id} {...props} />;
      })}
    </div>
  );
}

const enhance = connect(state => ({
  cards: game.selectors.getCards(state),
  isWin: game.selectors.getWinGame(state),
}));

export default enhance(Cards);
