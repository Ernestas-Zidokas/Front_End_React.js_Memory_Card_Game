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
            <Router
              basename={
                process.env.NODE_ENV === 'production'
                  ? '/Front_End_React.js_Memory_Card_Game/'
                  : undefined
              }
            >
              {children}
            </Router>
          </PersistGate>
        </Provider>
      </IsScoreSubmitedProvider>
    </TimerProvider>
  );
}

export default MasterProvider;
