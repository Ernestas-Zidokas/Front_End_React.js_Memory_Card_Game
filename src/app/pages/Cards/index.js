import React from 'react';
import { SingleCard, WinScreen, Timer } from '../../components';
import { connect } from 'react-redux';
import game from '../../../game';
import './index.scss';

function Cards({ cards, inGame }) {
  return (
    <div className="Cards">
      {!inGame && <WinScreen />}
      <Timer />
      {cards.map(props => {
        return <SingleCard key={props.id} {...props} />;
      })}
    </div>
  );
}

const enhance = connect(state => ({
  cards: game.selectors.getCards(state),
  inGame: game.selectors.getInGame(state),
}));

export default enhance(Cards);
