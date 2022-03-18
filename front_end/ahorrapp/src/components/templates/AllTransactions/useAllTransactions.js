import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSession } from '../../../utils/session/useSession';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowCircleUp,
  faArrowCircleDown,
} from '@fortawesome/free-solid-svg-icons';

function useAllTransactions() {
  // get info by session
  const { userInfo, userLogged } = useSession();

  // get user id
  const userId = userInfo ? userInfo.id : null;

  // state for Confirmation Modal
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // icons
  const incomeIcon = <FontAwesomeIcon icon={faArrowCircleUp} />;
  const expenseIcon = <FontAwesomeIcon icon={faArrowCircleDown} />;

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

  // State of the api response for the transactions
  const [apiResponse, setApiResponse] = useState(null);

  const getTransactionList = (dataResponse) => {
    const transactionList = dataResponse ? dataResponse : [];
    return { transactionList };
  };

  const { transactionList } = getTransactionList(apiResponse);

  // Handle request of the history
  const handleTransactionRequest = () => {
    setIsLoading(true);
    const url = `/loquesea/${userId}`;
    console.log(url);
    axios
      .get('https://swapi.dev/api/films')
      .then((response) => {
        console.log('ejecutó petición');
        const listResponse = [
          {
            description: 'Date with Daniela',
            date: '2022-03-18',
            amount: 200000,
            category: 'Restaurant',
            id: 0,
            transactionType: 0,
          },
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
        setApiResponse(listResponse);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    userLogged && handleTransactionRequest();
  }, [userLogged]);

  return {
    userLogged,
    isLoading,
    incomeIcon,
    expenseIcon,
    isConfirmationOpen,
    transactionList,
    handleTransactionRequest,
    setIsLoading,
    openConfirmationModal,
    closeConfirmationModal,
    YesButtonConfirmationModal,
  };
}

export { useAllTransactions };
