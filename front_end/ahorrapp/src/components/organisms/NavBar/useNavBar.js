import { useState } from "react";
import { useSession } from "../../../utils/session/useSession";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faWallet } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function useNavBar() {
  const { userInfo } = useSession();
  // get user id
  const userId = userInfo ? userInfo.id : null;
  //icons
  const budgetIcon = <FontAwesomeIcon icon={faWallet} />;
  const userIcon = <FontAwesomeIcon icon={faUserCircle} />;

  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [budgetUser, setBudgetUser] = useState([]);

  const onClickBudget = () => {
    setIsFormModalOpen(true);
    handleRequestBudget();
  };
  const closeFormModal = () => {
    setIsFormModalOpen(false);
  };

  const handleRequestBudget = () => {
    setIsLoading(true);
    const url = `http://localhost:5000/user/${userId}/budgets`;
    console.log(url);
    axios
      .get("https://swapi.dev/api/films")
      .then((response) => {
        const listResponse = [
          {
            value: 500,
            category_id: 31,
            category_name: "Rent",
            id: 17,
            created_at: "2022-03-22T14:14:21",
            updated_at: "2022-03-22T14:14:21",
          },
          {
            value: 0,
            category_id: 32,
            category_name: "Utilities",
            id: 18,
            created_at: "2022-03-22T14:14:21",
            updated_at: "2022-03-22T14:14:21",
          },
          {
            value: 0,
            category_id: 33,
            category_name: "Grocery",
            id: 19,
            created_at: "2022-03-22T14:14:21",
            updated_at: "2022-03-22T14:14:21",
          },
          {
            value: 0,
            category_id: 34,
            category_name: "Entertainment",
            id: 20,
            created_at: "2022-03-22T14:14:22",
            updated_at: "2022-03-22T14:14:22",
          },
        ];
        setBudgetUser(listResponse);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  return {
    isLoading,
    budgetUser,
    budgetIcon,
    userIcon,
    isFormModalOpen,
    closeFormModal,
    onClickBudget,
  };
}

export { useNavBar };
