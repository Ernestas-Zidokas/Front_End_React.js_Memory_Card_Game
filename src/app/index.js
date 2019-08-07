import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { Layout } from './components';
import { Cards } from './pages';
import store from './state';
import game from '../game';

function App() {
  useEffect(() => {
    store.dispatch(game.actions.getCards());
  }, []);

  return (
    <Provider store={store}>
      <Layout>
        <Cards />
      </Layout>
    </Provider>
  );
}

export default App;
