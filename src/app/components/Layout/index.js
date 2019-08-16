import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';
import { connect } from 'react-redux';
import game from '../../../game';
import './index.scss';

const Main = styled.main`
  max-width: ${({ cardCount }) => {
    if (cardCount === 5) {
      return '800px';
    }
    if (cardCount === 15) {
      return '1400px';
    }
    return '1020px';
  }};
  width: 100%;
  margin: 0 auto;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

function Layout({ children, cardCount }) {
  return (
    <div className="Layout">
      <Header />
      <Main cardCount={cardCount}>{children}</Main>
      <Footer />
    </div>
  );
}

const enhance = connect(state => ({
  cardCount: game.selectors.getCardCount(state),
}));

export default enhance(Layout);
