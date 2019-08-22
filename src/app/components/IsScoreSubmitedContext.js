import React, { useState } from 'react';

const IsScoreSubmitedContext = React.createContext(null);

function IsScoreSubmitedProvider({ children }) {
  const [isSubmited, setIsSubmited] = useState(false);

  return (
    <IsScoreSubmitedContext.Provider
      value={{
        isSubmited,
        setIsSubmited,
      }}
    >
      {children}
    </IsScoreSubmitedContext.Provider>
  );
}

export default IsScoreSubmitedContext;
export { IsScoreSubmitedProvider };
