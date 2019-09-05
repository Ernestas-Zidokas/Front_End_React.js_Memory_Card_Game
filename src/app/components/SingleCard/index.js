import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cardImages from '../../pages/Game/cardsImages';
import game from '../../../game';
import { cardBack } from '../../constants';
import './index.scss';

function SingleCard({ suit, num, isOpen, id, openCard, cardName, cardCount }) {
  const onClick = () => {
    if (!isOpen) {
      openCard(id);
    }
  };
  return (
    <div className="SingleCard">
      <img
        src={isOpen ? cardImages[suit + num] : cardImages[cardBack[cardCount]]}
        alt={
          isOpen ? `${cardName ? cardName : num} of ${suit}` : `Closed ${cardBack[cardCount]} card`
        }
        onClick={onClick}
      />
    </div>
  );
}

const enhance = connect(
  state => ({
    cardCount: game.selectors.getCardCount(state),
  }),
  dispatch =>
    bindActionCreators(
      {
        openCard: game.actions.openCard,
      },
      dispatch,
    ),
);

export default enhance(SingleCard);
