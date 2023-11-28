import React, { createContext, useReducer, useEffect, useState } from 'react';
import { kanbanReducer } from '../reducers/kanbanReducer';

const KanbanContext = createContext();

const KanbanProvider = ({ children }) => {

  const [loading, setLoading] = useState(true)

  const loadStateFromLocalStorage = () => {
    try {
      const data = localStorage.getItem('kanbanState');
      const storedState = JSON.parse(data);
      return storedState || { groupingOption: 'priority', sortingOption: 'title' };
    } catch (error) {
      console.error('Error loading state from local storage:', error);
      return { groupingOption: 'priority', sortingOption: 'title' };
    }
  };

  const initialState = loadStateFromLocalStorage();
  const [state, dispatch] = useReducer(kanbanReducer, initialState);

  useEffect(() => {
    try {
      const jsonData = JSON.stringify({groupingOption : state.groupingOption,sortingOption : state.sortingOption});
      localStorage.setItem('kanbanState', jsonData);
    } catch (error) {
      console.error('Error saving state to local storage:', error);
    }
  }, [state]);

  // Load state from local storage 
  useEffect(() => {
    const res =  fetchData();
  }, []);
  
  // Fetch data from the API
  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      const apiData = await response.json();
      dispatch({ type: 'LOAD_STATE', payload: apiData });
    } catch (error) {
      console.error('Error fetching data from API:', error);
    } finally{
      setLoading(false)
    }
  };

  return (
    <KanbanContext.Provider value={{ state, dispatch, loading }}>
      {children}
    </KanbanContext.Provider>
  );
};

export { KanbanProvider, KanbanContext };
