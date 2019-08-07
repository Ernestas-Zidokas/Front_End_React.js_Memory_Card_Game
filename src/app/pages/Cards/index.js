import React from 'react';
import * as cardImages from './cardsImages';
import { SingleCard } from '../../components';
import { connect } from 'react-redux';
import game from '../../../game';
import './index.scss';

function Cards({ cards }) {
  return (
    <div className="Cards">
      {cards.map(({ suit, num }, i) => {
        let cardType = suit + num;
        return <SingleCard key={i} src={cardImages[cardType]} alt={`${num} of ${suit}`} />;
      })}
    </div>
  );
}

const enhance = connect(state => ({
  cards: game.selectors.getCards(state),
}));

export default enhance(Cards);
