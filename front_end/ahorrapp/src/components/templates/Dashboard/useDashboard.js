import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faArrowCircleUp,
  faArrowCircleDown,
  faBalanceScale,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import { useSession } from "../../../utils/session/useSession";

function useDashboard() {
  // get info by session
  const { userInfo, userLogged } = useSession();
  // get user name
  const userName = userInfo ? userInfo.first_name : null;
  // get user id
  const userId = userInfo ? userInfo.id : null;
  // Icons
  const incomeIcon = <FontAwesomeIcon icon={faArrowCircleUp} />;
  const expenseIcon = <FontAwesomeIcon icon={faArrowCircleDown} />;
  const balanceIcon = <FontAwesomeIcon icon={faBalanceScale} />;
  const plusIcon = <FontAwesomeIcon icon={faPlusCircle} />;
  const calendarIcon = <FontAwesomeIcon icon={faCalendar} />;

  const [isLoading, setIsLoading] = useState(false);

  const handleRequest = () => {
    setIsLoading(true);
    axios
      .get("https://swapi.dev/api/films")
      .then((response) => {
        //console.log(response);
        //Obtener los datos para el dashboard
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

  // Handle calendar
  const [isOpenCalendar, setIsOpenCalendar] = useState(false);
  const options = { year: "numeric", month: "short", day: "numeric" };
  const date = new Date();
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  const firstDayDateString = firstDay.toLocaleDateString("en-US", options);
  const today = date.toLocaleDateString("en-US", options);
  const [dateRange, setDateRange] = useState([firstDayDateString, today]);
  const openCalendar = () => {
    setIsOpenCalendar(true);
  };
  const closeCalendar = () => {
    setIsOpenCalendar(false);
  };
  const onClickDate = (value) => {
    const startDate = value[0].toLocaleDateString("en-US", options);
    const endDate = value[1].toLocaleDateString("en-US", options);
    setDateRange([startDate, endDate]);
    closeCalendar();
  };

  return {
    userName,
    userLogged,
    isLoading,
    incomeIcon,
    expenseIcon,
    balanceIcon,
    plusIcon,
    calendarIcon,
    isOpenCalendar,
    dateRange,
    closeCalendar,
    onClickDate,
    openCalendar,
  };
}

export { useDashboard };
