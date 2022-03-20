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
}) {
  // icons
  const incomeIcon = <FontAwesomeIcon icon={faArrowCircleUp} />;
  const expenseIcon = <FontAwesomeIcon icon={faArrowCircleDown} />;

  // Everything for Confirmation Modal
  // state for Confirmation Modal
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [transactionId, setTransactionId] = useState(null);
  const [transactionInfo, setTransactionInfo] = useState(null);

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
    const deleteUrl = `/loquesea/${transactionId}`;
    console.log(deleteUrl);

    axios
      .delete("https://swapi.dev/api/films")
      .then((response) => {
        const newListResponse = [
          {
            description: "Salary",
            date: "2022-03-18",
            amount: 2000000,
            category_id: 2,
            category_name: "Salary",
            id: 1,
            transactionType: 1,
          },
          {
            description: "Birthday gift",
            date: "2022-03-18",
            amount: 350000,
            category_id: 3,
            category_name: "Gifts",
            id: 2,
            transactionType: 1,
          },
          {
            description: "Car debt",
            date: "2022-03-01",
            amount: 15000000,
            category_id: 4,
            category_name: "Debts",
            id: 3,
            transactionType: 0,
          },
        ];
        updateTransactionList(newListResponse); //set the new transactionList
        setIsConfirmationOpen(false);
        setTransactionId(null);
        alert("Transaction successfully deleted");
        setIsLoading(false);
      })
      .catch((error) => {
        alert("The transaction could not be deleted");
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
    const filterValue = variantFilter === "income" ? 1 : 0;

    if (!variantFilter) return transactionList;

    return transactionList.filter(
      (item) => item.transactionType === filterValue
    );
  };

  // Everything of Edit Button
  const clickEdit = (transactionItem) => {
    const variant = transactionItem.transactionType ? "income" : "expense";
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
