import React, { useContext } from 'react';
import './Card.css';
import { KanbanContext } from '../../context/KanbanContext';
import Alert from '../../assets/icons/alert.svg'
import Circle from '../../assets/icons/circle.svg'
import User from '../../assets/icons/user.svg'
import Progress from '../../assets/icons/progress.png'
import Todo from '../../assets/icons/todo.png'

const Card = ({ ticket }) => {

  const { state } = useContext(KanbanContext);
  const { groupingOption } = state;

  const getStatusIcon = (status) => {
    if (groupingOption === 'status') {
      return null; // No icon needed when grouping by status
    }

    switch (status.toLowerCase()) {
      case 'todo':
        return <img src={Todo} alt="Todo Icon" />;
      case 'in progress':
        return <img src={Progress} alt="Progress Icon" />;
      case 'backlog':
        return <img src={Todo} alt="Backlog Icon" />;
      default:
        return null;
    }
  };

  return (
    <div className="card">
      <div className='title'>
        <div className='titleNo'>{ticket.id}</div>
        <div className='proffilePic'>
          <img className='profileIcon' src={User} alt="User Icon" />
          <img className='circleIcon' src={Circle} alt="Circle Icon" />
        </div>
      </div>

      <div className='desc'>
        <div className='statusIcon'>
          {getStatusIcon(ticket.status)}
        </div>
        {ticket.title}
      </div>

      <div className='footer'>
        <img className='alertImg' src={Alert} alt="Alert Icon" />
        <div className='featureReq'>
          <img src={Circle} alt="Circle Icon" />
          <p>Feature Request</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
