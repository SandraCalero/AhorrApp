import React from 'react';
import { Button } from '../../atoms/Button/Button';
import { useTransactionCard } from './useTransactionCard';
import './TransactionCard.css';

function TransactionCard ({
  variant,
  icon,
  amount,
  category,
  date,
  description,
  clickEdit,
  openConfirmationModal
}) {
  const { editButton, deleteButton, amountFormatted, dateToShow } =
    useTransactionCard({ amount, date });

  return (
    <div className={`transactionCard ${variant}`}>
      <span className='date'>{dateToShow}</span>
      <div className='rowCard'>
        <span className={variant}>{icon}</span>
        <div className='transactionBody'>
          <div className='descriptionContainer'>
            <p className='descriptionCard'>
              {description.length > 20
                ? description.substring(0, 20 - 3) + '...'
                : description}
            </p>
            <p className='categoryCard'>{category}</p>
          </div>
          <span className='amount'>{amountFormatted}</span>
          <Button
            icon={editButton}
            variant='btnEdit'
            onClickButton={clickEdit}
          />
          <Button
            icon={deleteButton}
            variant='btnEdit'
            onClickButton={openConfirmationModal}
          />
        </div>
      </div>
    </div>
  );
}

export { TransactionCard };
