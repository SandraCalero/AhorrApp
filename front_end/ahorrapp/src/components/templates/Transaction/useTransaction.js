import { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "../../../utils/session/useSession";

function useTransaction() {
  // get info by session
  const { userInfo, userLogged, onSaveUserInfo } = useSession();

  // get user id
  const userId = userInfo ? userInfo.id : null;

  const [isOpenForm, setIsOpenForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [categoryList, setCategoryList] = useState([]);
  const [apiResponse, setApiResponse] = useState(null);

  const checkCategoryList = () => {
    const categsList = userInfo ? userInfo.categoryList : {};
    if (categsList) {
      setApiResponse(categsList);
    } else {
      handleRequest();
    }
  };

  const handleRequest = () => {
    setIsLoading(true);
    const url = `http://localhost:5000/user/${userId}/categories`;
    axios
      .get(url)
      .then((response) => {
        const listResponse = response.data;
        userInfo.categoryList = listResponse;
        onSaveUserInfo(userInfo);
        setApiResponse(listResponse);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    userLogged && checkCategoryList();
  }, [userLogged]);

  const [variant, setVariant] = useState("");

  const handleExpenseButton = () => {
    setCategoryList(apiResponse.expenses);
    setVariant("expense");
    setIsOpenForm(true);
  };

  const handleIncomeButton = () => {
    setCategoryList(apiResponse.incomes);
    setVariant("income");
    setIsOpenForm(true);
  };

  return {
    userLogged,
    categoryList,
    isOpenForm,
    variant,
    isLoading,
    handleExpenseButton,
    handleIncomeButton,
  };
}

export { useTransaction };
