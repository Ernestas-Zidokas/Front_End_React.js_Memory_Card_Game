import React from 'react';
import { SingleCard, Timer } from '../../components';
import { connect } from 'react-redux';
import WinScreen from '../WinScreen';
import game from '../../../game';
import './index.scss';

function Game({ cards, inGame }) {
  return (
    <div className="Game">
      {!inGame && <WinScreen />}
      <Timer />
      <div className="Cards">
        {cards.map(props => {
          return <SingleCard key={props.id} {...props} />;
        })}
      </div>
    </div>
  );
}

const enhance = connect(state => ({
  cards: game.selectors.getCards(state),
  inGame: game.selectors.getInGame(state),
}));

export default enhance(Game);
