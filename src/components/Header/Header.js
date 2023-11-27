import React, { useContext } from 'react';
import { KanbanContext } from '../../context/KanbanContext';
import './Header.css';

const Header = () => {
  const { state, dispatch } = useContext(KanbanContext);

  const handleGroupingChange = (event) => {
    dispatch({ type: 'CHANGE_GROUPING', payload: event.target.value });
  };

  const handleSortingChange = (event) => {
    dispatch({ type: 'CHANGE_SORTING', payload: event.target.value });
  };

  return (
    <header className="app-header">
      <h1>Kanban Board</h1>

      <div className="dropdown-container">
        <label>
          Group By:
          <select value={state.groupingOption} onChange={handleGroupingChange}>
            <option value="user">User</option>
            <option value="status">Status</option>
            <option value="priority">Priority</option>
          </select>
        </label>

        <label>
          Sort By:
          <select value={state.sortingOption} onChange={handleSortingChange}>
            <option value="priority">Priority</option>
            <option value="title">Title</option>
          </select>
        </label>
      </div>
    </header>
  );
};

export default Header;
