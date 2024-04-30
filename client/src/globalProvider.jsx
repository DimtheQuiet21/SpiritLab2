import React, { useState, useEffect, createContext, useContext } from 'react';

const globalContext = createContext();

export const useGlobalContext = () => useContext(globalContext)
// The Global Provider is a SAVE state. When you load into the application
// the provider searches out the LOCAL MEMORY and snags what's in there.
// When you touch or update the Global State, you also update the Local Memory.
// This is to protect the user from page refreshes and navigating off site.
// Also, this acts like the ultimate UNDO button. If a user hates what they did
// Then the Global state acts like a hard reset if you summon it.

const GlobalProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState({});

  //Retrieves Global State from Local Memory on a Refresh
  useEffect(() => {
    // Retrieve state from local storage on component mount
    const storedState = localStorage.getItem('globalState');
    if (storedState) {
      try {
        // Parse stored state and update global state
        setGlobalState(JSON.parse(storedState));
      } catch (error) {
        console.error('Error parsing stored state:', error);
      }
    }
  }, []);

  //Sets Global State to Local Memory when you Change Global State
  useEffect(() => {
    // Save state to local storage whenever it changes
    localStorage.setItem('globalState', JSON.stringify(globalState));
  }, [globalState]);

  const updateIngredientCategory = (ingredients, type) => {
    console.log(type)
    console.log(`${type} Array Updated`, ingredients)
    const newObject = {...globalState}
    newObject[type] = ingredients
    setGlobalState(newObject)
  }

  const updateIngredient = (ingredient,type,index) => {
    const matrixList = {...globalState};
    const ingredientList = {...matrixList[type]}
    ingredientList[index] = ingredient;
    matrixList[type] = ingredientList;
    setGlobalState(matrixList)
  }

  return (
    <globalContext.Provider value={{ globalState, setGlobalState, updateIngredientCategory, updateIngredient}}>
      {children}
    </globalContext.Provider>
  );
};

export default GlobalProvider