import { useState } from 'react';
import { useSession } from '../../../utils/session/useSession';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faWallet } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { API } from '../../../config';

function useNavBar () {
  const { userInfo } = useSession();
  // get user id
  const userId = userInfo ? userInfo.id : null;
  // icons
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
    const url = `${API}/user/${userId}/budgets`;
    axios
      .get(url)
      .then((response) => {
        const listResponse = response.data;
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
    onClickBudget
  };
}

export { useNavBar };
