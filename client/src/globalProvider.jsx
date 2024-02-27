import React, { useState, useEffect } from 'react';
import GlobalContext from './utils/globalContext';

const GlobalProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState({});

  useEffect(() => {
    // Retrieve state from local storage on component mount
    const storedState = localStorage.getItem('globalState');
    if (storedState) {
      // Parse stored state and update global state
      setGlobalState(JSON.parse(storedState));
    }
    console.log(storedState)
  }, []);

  useEffect(() => {
    // Save state to local storage whenever it changes
    localStorage.setItem('globalState', JSON.stringify(globalState));
  }, [globalState]);

  return (
    <GlobalContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;