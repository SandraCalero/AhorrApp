import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowCircleUp,
  faArrowCircleDown,
} from '@fortawesome/free-solid-svg-icons';

function useTransactionHistory() {
  // icons
  const incomeIcon = <FontAwesomeIcon icon={faArrowCircleUp} />;
  const expenseIcon = <FontAwesomeIcon icon={faArrowCircleDown} />;

  // Everything for Confirmation Modal
  // state for Confirmation Modal
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  // set state of Confirmation Modal to true
  const openConfirmationModal = () => {
    setIsConfirmationOpen(true);
  };
  // set state of Confirmation Modal to false, funtion of the "No" button
  const closeConfirmationModal = () => {
    setIsConfirmationOpen(false);
  };

  // function for the "Yes" button of the Confirmation Modal
  const YesButtonConfirmationModal = () => {
    // Here is the Delete request of the transaction
    // Then, close the Modal
    setIsConfirmationOpen(false);
  };
  // End here the Confirmation Modal utilites

  return {
    incomeIcon,
    expenseIcon,
    isConfirmationOpen,
    openConfirmationModal,
    closeConfirmationModal,
    YesButtonConfirmationModal,
  };
}

export { useTransactionHistory };
