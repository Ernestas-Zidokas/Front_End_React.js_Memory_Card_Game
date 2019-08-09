import React from 'react';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import * as cardImages from '../../pages/Cards/cardsImages';
import game from '../../../game';
import './index.scss';

function SingleCard({ suit, num, isOpen, id, openCard }) {
  let cardType = suit + num;
  return (
    <div className="SingleCard">
      <img
        src={isOpen ? cardImages[cardType] : cardImages.RedBack}
        alt={`${num} of ${suit}`}
        onClick={() => openCard(id)}
      />
    </div>
  );
}

const enhance = compose(
  connect(
    null,
    dispatch =>
      bindActionCreators(
        {
          openCard: game.actions.openCard,
        },
        dispatch,
      ),
  ),
);

export default enhance(SingleCard);
