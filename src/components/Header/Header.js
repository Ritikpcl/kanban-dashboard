import React, { useContext, useState } from 'react';
import { KanbanContext } from '../../context/KanbanContext';
import Menu from '../../assets/icons/option.svg'
import DownArrow from '../../assets/icons/down-arrow.svg'
import UpArrow from '../../assets/icons/up-arrow.svg'
import './Header.css';

const Header = () => {
  const [show, setShow] = useState(false)
  const { state, dispatch } = useContext(KanbanContext);

  const handleGroupingChange = (event) => {
    dispatch({ type: 'CHANGE_GROUPING', payload: event.target.value });
  };

  const handleSortingChange = (event) => {
    dispatch({ type: 'CHANGE_SORTING', payload: event.target.value });
  };

  return (
    <header className="app-header">
      <div >
      <div className='display' onClick={() => setShow(!show)}>
        <img className='menu' src={Menu} alt="Menu Icon" />
        <p>Display</p>
        {
          show ? 
          <img className='up-arrow' src={UpArrow} alt="Up Icon" /> : 
          <img className='down-arrow' src={DownArrow} alt="Down Icon" />
        }
        
      </div>
      </div>

        {
          show && <div className="dropdown-container">
          <label className='label'>
            <span className='group'>Grouping</span>
            <select value={state.groupingOption} onChange={handleGroupingChange}>
              <option value="user">User</option>
              <option value="status">Status</option>
              <option value="priority">Priority</option>
            </select>
          </label>

          <label className='label'>
          <span className='group'>Ordering</span>
            <select value={state.sortingOption} onChange={handleSortingChange}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </label>
        </div> 
        }
    </header>
  );
};

export default Header;
