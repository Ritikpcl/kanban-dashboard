import React, { useContext, useEffect} from 'react';
import { KanbanContext } from '../../context/KanbanContext';
import Priority from '../../components/Groups/Priority/Priority' 
import Status from '../../components/Groups/Status/Status' 
import User from '../../components/Groups/User/User' 
import './Board.css';

const Board = () => {
  const { state, dispatch } = useContext(KanbanContext);

  useEffect(() => {
    dispatch({ type: 'SET_GROUPING', payload: 'user' }); 
    dispatch({ type: 'SET_SORTING', payload: 'title' }); 
  }, [dispatch]);

  const getFilteredTickets = () => {
    const { tickets, sortingOption} = state;

    let filteredTickets = tickets;
    if (sortingOption === 'title') {
      // Sort by title 
      filteredTickets = filteredTickets.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    } else if (sortingOption === 'priority') {
      // Sort by priority descending order
      filteredTickets = filteredTickets.sort((a, b) => b.priority - a.priority);
    }
    return filteredTickets;
  }

  const renderColumns = () => {
    const { groupingOption } = state;

    switch (groupingOption) {
      case 'user':
        return <User/>;
      case 'status':
        return <Status/>;
      case 'priority':
        return <Priority/>;
      default:
        return null;
    }
  };

  const filteredTickets = getFilteredTickets();

  return (
    <div className="board">
      {renderColumns()}
    </div>
  );
};

export default Board;
