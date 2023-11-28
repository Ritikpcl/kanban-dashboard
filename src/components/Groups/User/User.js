import React, { useContext } from 'react';
import { KanbanContext } from '../../../context/KanbanContext';
import Card from '../../Card/Card';
import Dots from '../../../assets/icons/dots-three.svg'
import Add from '../../../assets/icons/add.svg'
import UserPic from '../../../assets/icons/user.svg'
import './User.css';

const User = () => {
  const { state } = useContext(KanbanContext);
  const { tickets, users } = state;

  // if(!tickets) return null;

  // Function to filter tickets based on userId
  const filterTicketsByUserId = (userId) => {
    return tickets.filter((ticket) => ticket.userId === userId);
  };

  return (
    <div className="user">
      {users.map((user) => (
        <div key={user.id} className="user-column">

          <div className="user-column-heading">
            <div className='user-column-heading-title'>
              <img className='user-pic' src={UserPic} alt="UserPic Icon" />
              <p>{user.name}<span className='numbers'>{filterTicketsByUserId(user.id).length}</span></p>
            </div>
            <div className='user-column-heading-options'>
              <img className='addIcon' src={Add} alt="Add Icon" />
              <img className='threeDots' src={Dots} alt="Dots Icon" />
            </div>
          </div>

          {filterTicketsByUserId(user.id).map((ticket) => (
            <Card key={ticket.id} ticket={ticket} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default User;
