import React, { useState } from 'react';
import GlobalContext from './utils/globalContext';

const GlobalProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState({});

  return (
    <GlobalContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;