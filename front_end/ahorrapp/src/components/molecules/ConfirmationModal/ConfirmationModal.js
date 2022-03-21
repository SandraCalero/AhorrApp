import React from 'react';
import './ConfirmationModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarning } from '@fortawesome/free-solid-svg-icons';
import { DivButtons } from '../../molecules/DivButtons/DivButtons';
import { useConfirmationModal } from './useConfirmationModal';

function ConfirmationModal({
  isConfirmationOpen,
  closeConfirmationModal,
  YesButtonConfirmationModal,
}) {
  const warningIcon = <FontAwesomeIcon icon={faWarning} />;
  const { wrapperClass } = useConfirmationModal({ isConfirmationOpen });
  return (
    <div className={wrapperClass}>
      <div className="confirmationModal">
        <h2 className="deleteTitle">Delete Transaction</h2>
        <div className="warningTitle">
          <span>{warningIcon}</span>
          <p>Are you sure you want to delete this transaction? </p>
        </div>

        <div>
          <DivButtons
            type="confirmation"
            closeConfirmationModal={closeConfirmationModal}
            YesButtonConfirmationModal={YesButtonConfirmationModal}
          />
        </div>
      </div>
    </div>
  );
}

export { ConfirmationModal };
