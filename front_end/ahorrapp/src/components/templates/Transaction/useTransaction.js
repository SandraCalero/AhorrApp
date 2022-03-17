import { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "../../../utils/session/useSession";

function useTransaction() {
  // get info by session
  const { userInfo, userLogged } = useSession();

  // get user id
  const userId = userInfo ? userInfo.id : null;

  const [isOpenForm, setIsOpenForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [categoryList, setCategoryList] = useState([]);
  const [apiResponse, setApiResponse] = useState(null);

  const handleRequest = () => {
    setIsLoading(true);
    axios
      .get("https://swapi.dev/api/films")
      .then((response) => {
        //console.log(response);
        const listResponse = {
          expenses: [
            {
              name: "Rent",
              transaction_type_id: 1,
              user_id: 1,
              id: 1,
            },
            {
              name: "Utilities",
              transaction_type_id: 1,
              user_id: 1,
              id: 2,
            },
            {
              name: "Transport",
              transaction_type_id: 1,
              user_id: 1,
              id: 3,
            },
            {
              name: "Restaurant",
              transaction_type_id: 1,
              user_id: 1,
              id: 4,
            },
          ],
          incomes: [],
        };
        setApiResponse(listResponse);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    userLogged && handleRequest();
  }, [userLogged]);

  // apiResponse && console.log(apiResponse);

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
