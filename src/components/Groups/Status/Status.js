import React, { useContext } from 'react';
import { KanbanContext } from '../../../context/KanbanContext';
import Card from '../../Card/Card';
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
        <h2>Backlog</h2>
        {filterTicketsByStatus('Backlog').map((ticket) => (
          <Card key={ticket.id} ticket={ticket} />
        ))}
      </div>

      <div className="status-column">
        <h2>To Do</h2>
        {filterTicketsByStatus('Todo').map((ticket) => (
          <Card key={ticket.id} ticket={ticket} />
        ))}
      </div>

      <div className="status-column">
        <h2>In Progress</h2>
        {filterTicketsByStatus('In Progress').map((ticket) => (
          <Card key={ticket.id} ticket={ticket} />
        ))}
      </div>

      <div className="status-column">
        <h2>Done</h2>
        {filterTicketsByStatus('Done').map((ticket) => (
          <Card key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default Status;
