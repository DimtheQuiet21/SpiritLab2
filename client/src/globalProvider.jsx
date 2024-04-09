import React, { useState, useEffect } from 'react';
import GlobalContext from './utils/globalContext';

// The Global Provider is a SAVE state. When you load into the application
// the provider searches out the LOCAL MEMORY and snags what's in there.
// When you touch or update the Global State, you also update the Local Memory.
// This is to protect the user from page refreshes and navigating off site.
// Also, this acts like the ultimate UNDO button. If a user hates what they did
// Then the Global state acts like a hard reset if you summon it.

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