import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../../atoms/Button/Button';
import './TransactionCard.css';

function TransactionCard(props) {
  const editButton = <FontAwesomeIcon icon={faEdit} />;
  const deleteButton = <FontAwesomeIcon icon={faTrash} />;
  const amountFormatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(props.amount);
  return (
    <div className={`transactionCard ${props.variant}`}>
      <span className="date">{props.date}</span>
      <div className="rowCard">
        <span className={props.variant}>{props.icon}</span>
        <div className="transactionBody">
          <div className="descriptionContainer">
            <p className="descriptionCard">
              {props.description.length > 20
                ? props.description.substring(0, 20 - 3) + '...'
                : props.description}
            </p>
            <p className="categoryCard">{props.category}</p>
          </div>
          <span className="amount">{amountFormatted}</span>
          <Button icon={editButton} variant="btnEdit" />
          <Button
            icon={deleteButton}
            variant="btnEdit"
            onClickButton={props.openConfirmationModal}
          />
        </div>
      </div>
    </div>
  );
}

export { TransactionCard };
