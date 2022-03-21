import { useEffect, useState } from "react";
import { useSession } from "../../../utils/session/useSession";
import axios from "axios";

function useAllTransactions() {
  // Everything for transactionList
  // get info by session
  const { userInfo, userLogged, onSaveUserInfo } = useSession();

  const [isLoading, setIsLoading] = useState(false);
  const [categoriesList, setCategoriesList] = useState([]);
  const [variantFilter, setVariantFilter] = useState(null);

  // get user id
  const userId = userInfo ? userInfo.id : null;

  // State of the api response for the transactions
  const [apiResponse, setApiResponse] = useState(null);

  const getTransactionList = (dataResponse) => {
    const transactionList = dataResponse ? dataResponse : [];
    return { transactionList };
  };

  const { transactionList } = getTransactionList(apiResponse);

  const updateTransactionList = (newList) => {
    setApiResponse(newList);
  };

  // Handle request of the history
  const handleTransactionRequest = () => {
    setIsLoading(true);
    const url = `http://localhost:5000/user/${userId}/all-transactions`;
    axios
      .get(url)
      .then((response) => {
        const listResponse = response.data;
        setApiResponse(listResponse);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  const checkCategoryList = () => {
    const categsList = userInfo ? userInfo.categoryList : {};
    if (categsList) {
      setCategoriesList(categsList);
    } else {
      handleRequestCategories();
    }
  };

  const handleIncomeButton = () => {
    setVariantFilter(2);
  };

  const handleExpenseButton = () => {
    setVariantFilter(1);
  };

  const handleRequestCategories = () => {
    setIsLoading(true);
    const url = `http://localhost:5000/user/${userId}/categories`;
    console.log(url);
    axios
      .get(url)
      .then((response) => {
        const listResponse = response.data;
        userInfo.categoryList = listResponse;
        setCategoriesList(listResponse);
        onSaveUserInfo(userInfo);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    userLogged && handleTransactionRequest();
    userLogged && checkCategoryList();
  }, [userLogged]);
  // End here everything for transactionList

  return {
    userLogged,
    isLoading,
    transactionList,
    categoriesList,
    updateTransactionList,
    variantFilter,
    handleIncomeButton,
    handleExpenseButton,
  };
}

export { useAllTransactions };
