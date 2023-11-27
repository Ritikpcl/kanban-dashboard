import React, { useContext } from 'react';
import { KanbanContext } from '../../../context/KanbanContext';
import Card from '../../Card/Card';
import './Priority.css';
import High from '../../../assets/icons/high.svg'
import Low from '../../../assets/icons/low.svg'
import Medium from '../../../assets/icons/medium.svg'
import Dots from '../../../assets/icons/dots-three.svg'
import Add from '../../../assets/icons/add.svg'
import Alert from '../../../assets/icons/alert_orange.svg'

const Priority = () => {
  const { state } = useContext(KanbanContext);
  const { tickets } = state;

  // Function to filter tickets based on priority
  const filterTicketsByPriority = (priority) => {
    return tickets.filter((ticket) => ticket.priority === priority);
  };

  return (
    <div className="priority">
      <div className="priority-column">
        <div className="priority-column-heading">

          <div className='priority-column-heading-title'>
            <img className='threeDots' src={Dots} alt="Dots Icon" />
            <p>No Priority<span className='numbers'>{filterTicketsByPriority(0).length}</span></p>
          </div>

          <div className='priority-column-heading-options'>
            <img className='addIcon' src={Add} alt="Add Icon" />
            <img className='threeDots' src={Dots} alt="Dots Icon" />
          </div>
        </div>
        {filterTicketsByPriority(0).map((ticket) => (
          <Card key={ticket.id} ticket={ticket} />
        ))}

      </div>

      <div className="priority-column">
        <div className="priority-column-heading">

          <div className='priority-column-heading-title'>
            <img className='alert' src={Alert} alt="Alert Icon" />
            <p>Urgent<span className='numbers'>{filterTicketsByPriority(4).length}</span></p>
          </div>

          <div className='priority-column-heading-options'>
            <img className='addIcon' src={Add} alt="Add Icon" />
            <img className='threeDots' src={Dots} alt="Dots Icon" />
          </div>
        </div>
        {filterTicketsByPriority(4).map((ticket) => (
          <Card key={ticket.id} ticket={ticket} />
        ))}

      </div>

      <div className="priority-column">
        <div className="priority-column-heading">

          <div className='priority-column-heading-title'>
            <img className='high' src={High} alt="High Icon" />
            <p>High<span className='numbers'>{filterTicketsByPriority(3).length}</span></p>
          </div>

          <div className='priority-column-heading-options'>
            <img className='addIcon' src={Add} alt="Add Icon" />
            <img className='threeDots' src={Dots} alt="Dots Icon" />
          </div>
        </div>
        {filterTicketsByPriority(3).map((ticket) => (
          <Card key={ticket.id} ticket={ticket} />
        ))}

      </div>

      <div className="priority-column">
        <div className="priority-column-heading">

          <div className='priority-column-heading-title'>
            <img className='medium' src={Medium} alt="Medium Icon" />
            <p>Medium<span className='numbers'>{filterTicketsByPriority(2).length}</span></p>
          </div>

          <div className='priority-column-heading-options'>
            <img className='addIcon' src={Add} alt="Add Icon" />
            <img className='threeDots' src={Dots} alt="Dots Icon" />
          </div>
        </div>
        {filterTicketsByPriority(2).map((ticket) => (
          <Card key={ticket.id} ticket={ticket} />
        ))}

      </div>

      <div className="priority-column">
        <div className="priority-column-heading">

          <div className='priority-column-heading-title'>
            <img className='low' src={Low} alt="Low Icon" />
            <p>Low<span className='numbers'>{filterTicketsByPriority(1).length}</span></p>
          </div>

          <div className='priority-column-heading-options'>
            <img className='addIcon' src={Add} alt="Add Icon" />
            <img className='threeDots' src={Dots} alt="Dots Icon" />
          </div>
        </div>
        {filterTicketsByPriority(1).map((ticket) => (
          <Card key={ticket.id} ticket={ticket} />
        ))}

      </div>
    </div>
  );
};

export default Priority;
