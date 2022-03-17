import React from 'react';
import './ConfirmationModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarning } from '@fortawesome/free-solid-svg-icons';
import { DivButtons } from '../../molecules/DivButtons/DivButtons';
import { useConfirmationModal } from './useConfirmationModal';

function ConfirmationModal({ isConfirmationOpen }) {
  const warningIcon = <FontAwesomeIcon icon={faWarning} />;
  const { wrapperClass } = useConfirmationModal({ isConfirmationOpen });
  return (
    <div className={wrapperClass}>
      <div className="confirmationModal">
        <div className="warningTitle">
          <span>{warningIcon}</span>Delete this transaction?
        </div>
        <div>
          <DivButtons type="confirmation" />
        </div>
      </div>
    </div>
  );
}

export { ConfirmationModal };
