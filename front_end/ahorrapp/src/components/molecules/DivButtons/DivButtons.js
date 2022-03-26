import React from 'react';
import './DivButtons.css';
import { Button } from '../../atoms/Button/Button';
import { LinkButton } from '../LinkButton/LinkButton';

function DivButtons ({
  onClickLeft,
  onClickRight,
  disabledSubmit,
  handleSubmitForm,
  onCancelClick,
  closeConfirmationModal,
  YesButtonConfirmationModal,
  type
}) {
  return (
    <div className='divButtons'>
      {type === 'transaction' && (
        <Button
          text='Income'
          variant='btn shadow Income'
          onClickButton={onClickLeft}
        />
      )}
      {type === 'transaction' && (
        <Button
          text='Expense'
          variant='btn shadow Expense'
          onClickButton={onClickRight}
        />
      )}
      {type === 'action' && (
        <Button
          text='Add'
          variant='btn Add'
          type='button'
          disabled={disabledSubmit}
          onClickButton={handleSubmitForm}
        />
      )}
      {type === 'action' && (
        <LinkButton
          route='/Dashboard'
          text='Cancel'
          variant='btn Cancel'
          type='reset'
        />
      )}
      {type === 'edit' && (
        <Button
          text='Update'
          variant='btn Add'
          type='button'
          disabled={disabledSubmit}
          onClickButton={handleSubmitForm}
        />
      )}
      {type === 'edit' && (
        <Button
          text='Cancel'
          variant='btn Cancel'
          type='reset'
          onClickButton={onCancelClick}
        />
      )}
      {type === 'confirmation' && (
        <Button
          text='No'
          variant='btn confirmation btnNo'
          onClickButton={closeConfirmationModal}
        />
      )}
      {type === 'confirmation' && (
        <Button
          text='Yes'
          variant='btn confirmation btnYes'
          onClickButton={YesButtonConfirmationModal}
        />
      )}
    </div>
  );
}

export { DivButtons };
