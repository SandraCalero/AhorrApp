import { useEffect, useState } from "react";
import { useSession } from "../../../utils/session/useSession";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilterCircleXmark } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function useAllTransactions() {
  // Everything for transactionList
  // get info by session
  const { userInfo, userLogged, onSaveUserInfo } = useSession();

  const [isLoading, setIsLoading] = useState(false);
  const [reloadData, setReloadData] = useState(false);
  const [categoriesList, setCategoriesList] = useState([]);
  const [variantFilter, setVariantFilter] = useState(null);

  const cleanFilterIcon = <FontAwesomeIcon icon={faFilterCircleXmark} />;
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

  const onReloadData = () => {
    setReloadData(true);
  };
  // Handle request of the history
  const handleTransactionRequest = () => {
    setIsLoading(true);
    const url = `http://dreamteamsoutions.software:5000/user/${userId}/all-transactions`;
    axios
      .get(url)
      .then((response) => {
        const listResponse = response.data;
        setApiResponse(listResponse);
        setIsLoading(false);
        reloadData && setReloadData(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        reloadData && setReloadData(false);
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

  const onClearFilter = () => {
    setVariantFilter(null);
  };

  const handleRequestCategories = () => {
    setIsLoading(true);
    const url = `http://dreamteamsoutions.software:5000/user/${userId}/categories`;
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

  useEffect(() => {
    reloadData && handleTransactionRequest();
    reloadData && checkCategoryList();
  }, [reloadData]);
  // End here everything for transactionList

  return {
    userLogged,
    isLoading,
    transactionList,
    categoriesList,
    cleanFilterIcon,
    variantFilter,
    onClearFilter,
    updateTransactionList,
    handleIncomeButton,
    handleExpenseButton,
    onReloadData,
  };
}

export { useAllTransactions };
