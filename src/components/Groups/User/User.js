import React, { useContext } from 'react';
import { KanbanContext } from '../../../context/KanbanContext';
import Card from '../../Card/Card';
import './User.css'; 

const User = () => {
  const { state } = useContext(KanbanContext);
  const { tickets, users } = state;

  // Function to filter tickets based on userId
  const filterTicketsByUserId = (userId) => {
    return tickets.filter((ticket) => ticket.userId === userId);
  };

  return (
    <div className="user">
      {users.map((user) => (
        <div key={user.id} className="user-column">
          <h2>{user.name}</h2>
          {filterTicketsByUserId(user.id).map((ticket) => (
            <Card key={ticket.id} ticket={ticket} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default User;
