import React, { useState } from "react";
import axios from "axios";
import { useSession } from "../../../utils/session/useSession";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleUp,
  faArrowCircleDown,
} from "@fortawesome/free-solid-svg-icons";

function useAllTransactions() {
  // get info by session
  const { userInfo, userLogged } = useSession();

  // get user id
  const userId = userInfo ? userInfo.id : null;

  // icons
  const incomeIcon = <FontAwesomeIcon icon={faArrowCircleUp} />;
  const expenseIcon = <FontAwesomeIcon icon={faArrowCircleDown} />;
  // state for Confirmation Modal
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // set state of Confirmation Modal to true
  const openConfirmationModal = () => {
    setIsConfirmationOpen(true);
  };
  return {
    userLogged,
    isLoading,
    incomeIcon,
    expenseIcon,
    isConfirmationOpen,
    openConfirmationModal,
  };
}

export { useAllTransactions };
