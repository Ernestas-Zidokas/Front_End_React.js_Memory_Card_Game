import React, { useState } from 'react';

const TimerContext = React.createContext({});

function TimerProvider({ children }) {
  const [time, setTime] = useState(0);

  return (
    <TimerContext.Provider
      value={{
        time,
        setTime,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
}

export default TimerContext;
export { TimerProvider };
