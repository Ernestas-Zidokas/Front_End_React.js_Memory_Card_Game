import React from 'react';
import { TimerProvider, IsScoreSubmitedProvider } from './components';
import { Provider } from 'react-redux';
import { store, persistor } from './state';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router } from 'react-router-dom';

function MasterProvider({ children }) {
  return (
    <TimerProvider>
      <IsScoreSubmitedProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Router>{children}</Router>
          </PersistGate>
        </Provider>
      </IsScoreSubmitedProvider>
    </TimerProvider>
  );
}

export default MasterProvider;
