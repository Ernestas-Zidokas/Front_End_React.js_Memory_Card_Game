import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from './components';
import { Game, ScoreBoard } from './pages';
import { ROUTES } from '../constants';
import { store } from './state';
import game from '../game';
import MasterProvider from './MasterProvider';

function App() {
  const [cardCount, setCardCount] = useState(game.selectors.getCardCount(store.getState()));

  const unsubscribe = store.subscribe(() => {
    setCardCount(game.selectors.getCardCount(store.getState()));
  });

  useEffect(() => {
    store.dispatch(game.actions.getCards());
    return unsubscribe;
  }, [cardCount, unsubscribe]);

  return (
    <MasterProvider>
      <Layout>
        <Switch>
          <Route path={ROUTES.defaultPage} exact component={Game} />
          <Route path={ROUTES.scoreBoard} exact component={ScoreBoard} />
        </Switch>
      </Layout>
    </MasterProvider>
  );
}

export default App;
