import React, { useEffect, useState } from 'react';
import { useSession } from '../../../utils/session/useSession';
import axios from 'axios';

function useAllTransactions() {
  // Everything for transactionList
  // get info by session
  const { userInfo, userLogged } = useSession();

  const [isLoading, setIsLoading] = useState(false);

  // get user id
  const userId = userInfo ? userInfo.id : null;

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
  // End here everything for transactionList

  return {
    userLogged,
    isLoading,
    transactionList,
    setIsLoading,
  };
}

export { useAllTransactions };
