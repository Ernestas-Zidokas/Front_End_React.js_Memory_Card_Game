import React from 'react';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import Button from '../../../components/Button';
import styled from 'styled-components';
import game from '../../../../game';

const StyleButton = styled(Button)`
  background: ${({ cardCount, children }) => {
    if (children === 'Easy' && cardCount === 5) {
      return 'green';
    }
    if (children === 'Medium' && cardCount === 10) {
      return 'green';
    }
    if (children === 'Hard' && cardCount === 15) {
      return 'green';
    }
    return 'grey';
  }};
  border: none;
  cursor: pointer;
  padding: 5px 10px;
  transition: 0.5s;
  color: #fff;
  &:hover {
    background: #99cc32;
  }
  outline: none;
`;

function Difficulty({ setCardCount, cardCount }) {
  return (
    <div className="WinScreen--container--difficulty">
      <h3>Difficulty:</h3>
      <StyleButton cardCount={cardCount} onClick={() => setCardCount(5)}>
        Easy
      </StyleButton>
      <StyleButton cardCount={cardCount} onClick={() => setCardCount(10)}>
        Medium
      </StyleButton>
      <StyleButton cardCount={cardCount} onClick={() => setCardCount(15)}>
        Hard
      </StyleButton>
    </div>
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
          setCardCount: game.actions.setCardCount,
        },
        dispatch,
      ),
  ),
);

export default enhance(Difficulty);
