import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../../atoms/Button/Button';
import './TransactionCard.css';

function TransactionCard(props) {
  const editButton = <FontAwesomeIcon icon={faEdit} />;
  const deleteButton = <FontAwesomeIcon icon={faTrash} />;
  return (
    <div className={`transactionCard ${props.variant}`}>
      <span className="date">March 21 </span>
      <div className="rowCard">
        <span className={props.variant}>{props.icon}</span>
        <div className="transactionBody">
          <div className="descriptionContainer">
            <p className="descriptionCard">Birthday Dinner</p>
            <p className="categoryCard">Restaurant</p>
          </div>
          <span className="amount">$150.000</span>
          <Button icon={editButton} variant="btnEdit" />
          <Button icon={deleteButton} variant="btnEdit" />
        </div>
      </div>
    </div>
  );
}

export { TransactionCard };
