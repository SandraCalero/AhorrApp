import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleUp,
  faArrowCircleDown,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function useTransactionHistory({
  transactionList,
  variantFilter,
  updateTransactionList,
  categoriesList,
}) {
  // icons
  const incomeIcon = <FontAwesomeIcon icon={faArrowCircleUp} />;
  const expenseIcon = <FontAwesomeIcon icon={faArrowCircleDown} />;

  // Everything for Confirmation Modal
  // state for Confirmation Modal
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [transactionId, setTransactionId] = useState(null);
  const [transactionInfo, setTransactionInfo] = useState(null);
  const [categoryList, setCategoryList] = useState([]);

  // state for variant formModal
  const [variantForm, setVariantForm] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  // set state of Confirmation Modal to true
  const openConfirmationModal = (transId) => {
    setIsConfirmationOpen(true);
    setTransactionId(transId);
  };
  // set state of Confirmation Modal to false, funtion of the "No" button
  const closeConfirmationModal = () => {
    setIsConfirmationOpen(false);
  };

  // function for the "Yes" button of the Confirmation Modal
  const YesButtonConfirmationModal = () => {
    setIsLoading(true);
    // Here is the Delete request of the transaction
    // Then, close the Modal
    const deleteUrl = `http://localhost:5000/transaction/${transactionId}`;
    axios
      .delete(deleteUrl)
      .then((response) => {
        const newListResponse = response.data;
        updateTransactionList(newListResponse); //set the new transactionList
        setIsConfirmationOpen(false);
        setTransactionId(null);
        alert("Transaction successfully deleted");
        setIsLoading(false);
      })
      .catch((error) => {
        alert("The transaction could not be deleted");
        console.log(error);
        setIsLoading(false);
        setIsConfirmationOpen(false);
        setTransactionId(null);
      });
  };
  // End here the Confirmation Modal utilites

  // Everything of FormModal
  //state of the FormModal
  const [isFormModalOpen, setIsFormModalOpen] = useState();

  const closeFormModal = () => {
    setIsFormModalOpen(false);
  };
  // End FormModal

  const filterData = () => {
    if (!variantFilter) return transactionList;

    return transactionList.filter(
      (item) => item.transaction_type_id === variantFilter
    );
  };

  // Everything of Edit Button
  const clickEdit = (transactionItem) => {
    const variant =
      transactionItem.transaction_type_id === 2 ? "income" : "expense";
    setCategoryList(categoriesList[`${variant}s`]);
    setIsFormModalOpen(true);
    setVariantForm(variant);
    setTransactionInfo(transactionItem);
  };

  // End everything of Edit Button

  return {
    isLoading,
    incomeIcon,
    expenseIcon,
    transactionInfo,
    isConfirmationOpen,
    isFormModalOpen,
    categoryList,
    variantForm,
    itemList: filterData(),
    closeFormModal,
    clickEdit,
    openConfirmationModal,
    closeConfirmationModal,
    YesButtonConfirmationModal,
  };
}

export { useTransactionHistory };
