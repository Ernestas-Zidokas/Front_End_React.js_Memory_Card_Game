import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
import game from '../../../game';
import { ROUTES } from '../../../constants';

import './index.scss';

const sharedMainCss = css`
  width: 100%;
  margin-top: 20px;
  flex-grow: 1;
  display: flex;
  margin: 0 auto;
  text-align: center;
`;

const Main = styled.main`
  ${sharedMainCss}
  max-width: ${({ cardCount }) => {
    if (cardCount === 5) {
      return '800px';
    }
    if (cardCount === 15) {
      return '1400px';
    }
    return '1020px';
  }};
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const MainScoreBoard = styled.main`
  ${sharedMainCss}
  max-width: 1020px;
  margin-top: 20px;
`;

function Layout({ children, cardCount }) {
  return (
    <div className="Layout">
      <Header />
      <Switch>
        <Route
          path={ROUTES.scoreBoard}
          exact
          render={() => <MainScoreBoard>{children}</MainScoreBoard>}
        />
        <Route render={() => <Main cardCount={cardCount}>{children}</Main>} />
      </Switch>
      <Footer />
    </div>
  );
}

const enhance = connect(state => ({
  cardCount: game.selectors.getCardCount(state),
}));

export default enhance(Layout);
