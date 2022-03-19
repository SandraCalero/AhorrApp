import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowCircleUp,
  faArrowCircleDown,
} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function useTransactionHistory({ updateTransactionList }) {
  // icons
  const incomeIcon = <FontAwesomeIcon icon={faArrowCircleUp} />;
  const expenseIcon = <FontAwesomeIcon icon={faArrowCircleDown} />;

  // Everything for Confirmation Modal
  // state for Confirmation Modal
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [transactionId, setTransactionId] = useState(null);
  const [transactionInfo, setTransactionInfo] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  // set state of Confirmation Modal to true
  const openConfirmationModal = (transId) => {
    setIsConfirmationOpen(true);
    setTransactionId(transId);
  };
  // set state of Confirmation Modal to false, funtion of the "No" button
  const closeConfirmationModal = () => {
    setIsConfirmationOpen(false);
  };

  // function for the "Yes" button of the Confirmation Modal
  const YesButtonConfirmationModal = () => {
    setIsLoading(true);
    // Here is the Delete request of the transaction
    // Then, close the Modal
    const deleteUrl = `/loquesea/${transactionId}`;
    console.log(deleteUrl);

    axios
      .delete('https://swapi.dev/api/films')
      .then((response) => {
        const newListResponse = [
          {
            description: 'Salary',
            date: '2022-03-18',
            amount: 2000000,
            category: 'Salary',
            id: 1,
            transactionType: 1,
          },
          {
            description: 'Birthday gift',
            date: '2022-03-18',
            amount: 350000,
            category: 'Gifts',
            id: 2,
            transactionType: 1,
          },
          {
            description: 'Car debt',
            date: '2022-03-01',
            amount: 15000000,
            category: 'Debts',
            id: 3,
            transactionType: 0,
          },
        ];
        updateTransactionList(newListResponse); //set the new transactionList
        setIsConfirmationOpen(false);
        setTransactionId(null);
        alert('Transaction successfully deleted');
        setIsLoading(false);
      })
      .catch((error) => {
        alert('The transaction could not be deleted');
        setIsLoading(false);
        setIsConfirmationOpen(false);
        setTransactionId(null);
      });
  };
  // End here the Confirmation Modal utilites

  // Everything of FormModal
  //state of the FormModal
  const [isFormModalOpen, setIsFormModalOpen] = useState();

  const closeFormModal = () => {
    setIsFormModalOpen(false);
  };
  // End FormModal

  // Everything of Edit Button
  const clickEdit = (transactionItem) => {
    setIsFormModalOpen(true);
    setTransactionInfo(transactionItem);
    console.log(transactionItem);
  };

  // End everything of Edit Button

  return {
    isLoading,
    incomeIcon,
    expenseIcon,
    transactionInfo,
    isConfirmationOpen,
    isFormModalOpen,
    closeFormModal,
    clickEdit,
    openConfirmationModal,
    closeConfirmationModal,
    YesButtonConfirmationModal,
  };
}

export { useTransactionHistory };
