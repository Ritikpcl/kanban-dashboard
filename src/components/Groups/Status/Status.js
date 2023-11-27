import React, { useContext } from 'react';
import { KanbanContext } from '../../../context/KanbanContext';
import Card from '../../Card/Card';
import Dots from '../../../assets/icons/dots-three.svg'
import Add from '../../../assets/icons/add.svg'
import Todo from '../../../assets/icons/loading.svg'
import Progress from '../../../assets/icons/progress2.png'
import Done from '../../../assets/icons/done.png'
import Cancel from '../../../assets/icons/cross.svg'
import './Status.css';

const Status = () => {
  const { state } = useContext(KanbanContext);
  const { tickets } = state;

  // Function to filter tickets based on status
  const filterTicketsByStatus = (status) => {
    return tickets.filter((ticket) => ticket.status.toLowerCase() === status.toLowerCase());
  };

  return (
    <div className="status">
      <div className="status-column">
        <div className="status-column-heading">
          <div className='status-column-heading-title'>
            <img className='todo' src={Todo} alt="todo Icon" />
            <p>Backlog<span className='numbers'>{filterTicketsByStatus('Backlog').length}</span></p>
          </div>


          <div className='status-column-heading-options'>
            <img className='addIcon' src={Add} alt="Add Icon" />
            <img className='threeDots' src={Dots} alt="Dots Icon" />
          </div>

        </div>

        {filterTicketsByStatus('Backlog').map((ticket) => (
          <Card key={ticket.id} ticket={ticket} />
        ))}
      </div>

      <div className="status-column">
        <div className="status-column-heading">
          <div className='status-column-heading-title'>
            <img className='todo' src={Todo} alt="todo Icon" />
            <p>Todo<span className='numbers'>{filterTicketsByStatus('todo').length}</span></p>
          </div>


          <div className='status-column-heading-options'>
            <img className='addIcon' src={Add} alt="Add Icon" />
            <img className='threeDots' src={Dots} alt="Dots Icon" />
          </div>

        </div>

        {filterTicketsByStatus('todo').map((ticket) => (
          <Card key={ticket.id} ticket={ticket} />
        ))}
      </div>


      <div className="status-column">
        <div className="status-column-heading">
          <div className='status-column-heading-title'>
            <img className='progress' src={Progress} alt="progress Icon" />
            <p>In Progress<span className='numbers'>{filterTicketsByStatus('In Progress').length}</span></p>
          </div>


          <div className='status-column-heading-options'>
            <img className='addIcon' src={Add} alt="Add Icon" />
            <img className='threeDots' src={Dots} alt="Dots Icon" />
          </div>

        </div>

        {filterTicketsByStatus('In Progress').map((ticket) => (
          <Card key={ticket.id} ticket={ticket} />
        ))}
      </div>

      <div className="status-column">
        <div className="status-column-heading">
          <div className='status-column-heading-title'>
            <img className='done' src={Done} alt="Done Icon" />
            <p>Done<span className='numbers'>{filterTicketsByStatus('Done').length}</span></p>
          </div>


          <div className='status-column-heading-options'>
            <img className='addIcon' src={Add} alt="Add Icon" />
            <img className='threeDots' src={Dots} alt="Dots Icon" />
          </div>

        </div>
        {filterTicketsByStatus('Done').map((ticket) => (
          <Card key={ticket.id} ticket={ticket} />
        ))}
      </div>

      <div className="status-column cancel-div">
        <div className='status-column-heading-title'>
          <img className='cancel' src={Cancel} alt="Cancel Icon" />
          <p>Cancelled<span className='numbers'>0</span></p>
        </div>
      </div>
    </div>
  );
};

export default Status;
