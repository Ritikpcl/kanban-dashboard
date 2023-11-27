import React, { useContext } from 'react';
import { KanbanContext } from '../../../context/KanbanContext';
import Card from '../../Card/Card';
import './Priority.css'; 

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
        <h2>No Priority</h2>
        {filterTicketsByPriority(0).map((ticket) => (
          <Card key={ticket.id} ticket={ticket} />
        ))}
      </div>

      <div className="priority-column">
        <h2>Urgent</h2>
        {filterTicketsByPriority(4).map((ticket) => (
          <Card key={ticket.id} ticket={ticket} />
        ))}
      </div>

      <div className="priority-column">
        <h2>High</h2>
        {filterTicketsByPriority(3).map((ticket) => (
          <Card key={ticket.id} ticket={ticket} />
        ))}
      </div>

      <div className="priority-column">
        <h2>Medium</h2>
        {filterTicketsByPriority(2).map((ticket) => (
          <Card key={ticket.id} ticket={ticket} />
        ))}
      </div>

      <div className="priority-column">
        <h2>Low</h2>
        {filterTicketsByPriority(1).map((ticket) => (
          <Card key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default Priority;
