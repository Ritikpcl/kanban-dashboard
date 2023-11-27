import React, { createContext, useReducer, useEffect } from 'react';
import { kanbanReducer } from '../reducers/kanbanReducer';
import Data from '../Data'

const KanbanContext = createContext();

const KanbanProvider = ({ children }) => {
  const initialState = {
    groupingOption: '', 
    sortingOption: ''
  };

  const [state, dispatch] = useReducer(kanbanReducer, initialState);

  // Load state from local storag first
  useEffect(() => {
    const data = localStorage.getItem('kanbanState');
    const storedState = JSON.parse(data)
    
    if (storedState) {
      dispatch({ type: 'LOAD_STATE', payload: storedState });
    }

  }, []);

  // Save state to local storage if data change
  useEffect(() => {
    const jsonData = JSON.stringify(Data);
    localStorage.setItem('kanbanState', jsonData);
  }, [Data]);

  return (
    <KanbanContext.Provider value={{ state, dispatch }}>
      {children}
    </KanbanContext.Provider>
  );
};

export { KanbanProvider, KanbanContext };
