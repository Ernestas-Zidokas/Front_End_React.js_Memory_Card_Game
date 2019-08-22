import React, { useState } from 'react';

const TimerContext = React.createContext({});

function TimerProvider({ children }) {
  const [startTime, setStartTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  return (
    <TimerContext.Provider
      value={{
        startTime,
        setStartTime,
        currentTime,
        setCurrentTime,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
}

export default TimerContext;
export { TimerProvider };
