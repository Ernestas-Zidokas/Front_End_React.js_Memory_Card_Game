import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout, TimerProvider } from './components';
import { Cards, ScoreBoard } from './pages';
import { ROUTES } from '../constants';
import store from './state';
import game from '../game';

function App() {
  useEffect(() => {
    store.dispatch(game.actions.getCards());
  }, []);

  return (
    <TimerProvider>
      <Provider store={store}>
        <Router>
          <Layout>
            <Switch>
              <Route path={ROUTES.defaultPage} exact component={Cards} />
              <Route path={ROUTES.scoreBoard} exact component={ScoreBoard} />
            </Switch>
          </Layout>
        </Router>
      </Provider>
    </TimerProvider>
  );
}

export default App;
