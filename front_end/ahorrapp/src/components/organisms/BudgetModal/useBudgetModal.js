import classNames from "classnames";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

function useBudgetModal({
  isFormModalOpen,
  closeFormModal,
  budgetUser = [],
  onReloadData,
}) {
  const wrapperClass = classNames("glass", {
    show: isFormModalOpen,
  });

  const budgetIcon = <FontAwesomeIcon icon={faWallet} />;

  const [isSubmitting, setIsSubmitting] = useState(false);
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
        value: budgetItem.value,
      };
    });
    setObjPost(copyPost);
  }, [budgetUser]);

  const handleSubmitBudget = () => {
    setIsSubmitting(true);
    axios({
      method: "PUT",
      url: "http://dreamteamsoutions.software:5000/budget-by-list",
      data: { budget: Object.values(objPost) },
    })
      .then((response) => {
        alert("Congratulations, you have created your budget for this month");
        closeFormModal && closeFormModal();
        onReloadData && onReloadData();
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to add budget");
        setIsSubmitting(false);
        closeFormModal && closeFormModal();
      });
  };

  return {
    isSubmitting,
    wrapperClass,
    budgetIcon,
    onValueChange,
    objPost,
    handleSubmitBudget,
  };
}

export { useBudgetModal };
