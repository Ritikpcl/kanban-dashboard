import React, { createContext, useReducer, useEffect } from 'react';
import { kanbanReducer } from '../reducers/kanbanReducer';

const KanbanContext = createContext();

const KanbanProvider = ({ children }) => {

  const loadStateFromLocalStorage = () => {
    try {
      const data = localStorage.getItem('kanbanState');
      const storedState = JSON.parse(data);
      return storedState || { groupingOption: '', sortingOption: '' };
    } catch (error) {
      console.error('Error loading state from local storage:', error);
      return { groupingOption: '', sortingOption: '' };
    }
  };

  const initialState = loadStateFromLocalStorage();
  const [state, dispatch] = useReducer(kanbanReducer, initialState);

  // useEffect(() => {
  //   try {
  //     const jsonData = JSON.stringify(state);
  //     localStorage.setItem('kanbanState', jsonData);
  //   } catch (error) {
  //     console.error('Error saving state to local storage:', error);
  //   }
  // }, [state]);

  // Load state from local storage 
  useEffect(() => {
    const data = localStorage.getItem('kanbanState');
    const storedState = JSON.parse(data);
    if (storedState) {
      dispatch({ type: 'LOAD_STATE', payload: storedState });
    } else {
      fetchData(); // Fetch data from API if local storage is empty
    }
  }, []);
  
  // Fetch data from the API
  const fetchData = async () => {
    try {
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      const apiData = await response.json();
      localStorage.setItem('kanbanState', JSON.stringify(apiData));
      dispatch({ type: 'LOAD_STATE', payload: apiData });
      dispatch({ type: 'UPDATE_STATE', payload: apiData });
    } catch (error) {
      console.error('Error fetching data from API:', error);
    }
  };

  return (
    <KanbanContext.Provider value={{ state, dispatch }}>
      {children}
    </KanbanContext.Provider>
  );
};

export { KanbanProvider, KanbanContext };
