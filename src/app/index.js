import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout, TimerProvider } from './components';
import { Cards, ScoreBoard } from './pages';
import { ROUTES } from '../constants';
import { PersistGate } from 'redux-persist/integration/react';
import stateFN from './state';
import game from '../game';

function App() {
  const store = stateFN().store;
  const persistor = stateFN().persistor;

  const [cardCount, setCardCount] = useState(game.selectors.getCardCount(store.getState()));

  const unsubscribe = store.subscribe(() => {
    setCardCount(game.selectors.getCardCount(store.getState()));
  });

  useEffect(() => {
    store.dispatch(game.actions.getCards());
    return unsubscribe;
  }, [cardCount, unsubscribe, store]);

  return (
    <TimerProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Layout>
              <Switch>
                <Route path={ROUTES.defaultPage} exact component={Cards} />
                <Route path={ROUTES.scoreBoard} exact component={ScoreBoard} />
              </Switch>
            </Layout>
          </Router>
        </PersistGate>
      </Provider>
    </TimerProvider>
  );
}

export default App;
