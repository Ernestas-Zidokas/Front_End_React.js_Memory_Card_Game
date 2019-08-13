import React from 'react';
import { SingleCard, WinScreen } from '../../components';
import { connect } from 'react-redux';
import game from '../../../game';
import './index.scss';

function Cards({ cards, isWin, inGame }) {
  return (
    <div className="Cards">
      {!inGame && <WinScreen />}
      {cards.map(props => {
        return <SingleCard key={props.id} {...props} />;
      })}
    </div>
  );
}

const enhance = connect(state => ({
  cards: game.selectors.getCards(state),
  isWin: game.selectors.getWinGame(state),
  inGame: game.selectors.getInGame(state),
}));

export default enhance(Cards);
