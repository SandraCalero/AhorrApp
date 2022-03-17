import classNames from 'classnames';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowCircleUp,
  faArrowCircleDown,
} from '@fortawesome/free-solid-svg-icons';

function useAllTransactions() {
  // icons
  const incomeIcon = <FontAwesomeIcon icon={faArrowCircleUp} />;
  const expenseIcon = <FontAwesomeIcon icon={faArrowCircleDown} />;
  // state for Confirmation Modal
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  // set state of Confirmation Modal to true
  const openConfirmationModal = () => {
    setIsConfirmationOpen(true);
  };
  return isConfirmationOpen, openConfirmationModal, incomeIcon, expenseIcon;
}

export { useAllTransactions };
