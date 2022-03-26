import classNames from 'classnames';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import { useRef, useEffect, useState } from 'react';
import { API } from '../../../config';

function useBudgetModal ({
  isFormModalOpen,
  closeFormModal,
  budgetUser = [],
  onReloadData
}) {
  const wrapperClass = classNames('glass', {
    show: isFormModalOpen
  });

  const budgetIcon = <FontAwesomeIcon icon={faWallet} />;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const isReloadDataRef = useRef(false);
  const isReloadData = isReloadDataRef.current;
  const [objPost, setObjPost] = useState({});

  const onValueChange = (categoryName, id, value) => {
    const budgetValue = { id, value };
    const copyPost = { ...objPost };
    copyPost[categoryName] = budgetValue;
    setObjPost(copyPost);
  };

  useEffect(() => {
    const copyPost = { ...objPost };
    budgetUser.forEach((budgetItem) => {
      const categoryName = budgetItem.category_name;
      copyPost[categoryName] = {
        id: budgetItem.id,
        value: budgetItem.value
      };
    });
    setObjPost(copyPost);
  }, [budgetUser]);

  const handleSubmitBudget = () => {
    setIsSubmitting(true);
    axios({
      method: 'PUT',
      url: `${API}/budget-by-list`,
      data: { budget: Object.values(objPost) }
    })
      .then((response) => {
        alert('Congratulations, you have created your budget for this month');
        isReloadDataRef.current = true;
        setIsSubmitting(false);
        closeFormModal && closeFormModal();
      })
      .catch((error) => {
        console.log(error);
        alert('Failed to add budget');
        setIsSubmitting(false);
        closeFormModal && closeFormModal();
      });
  };

  useEffect(() => {
    if (isReloadData) {
      isReloadDataRef.current = false;
      onReloadData && onReloadData();
    }
  }, [isReloadData]);

  return {
    isSubmitting,
    wrapperClass,
    budgetIcon,
    onValueChange,
    objPost,
    handleSubmitBudget
  };
}

export { useBudgetModal };
