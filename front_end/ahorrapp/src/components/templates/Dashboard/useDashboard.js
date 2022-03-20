import React, { useState, useEffect } from "react";
import moment from "moment";
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
import { useCurrency } from "../../../utils/formaters/useCurrency";
import { useDate } from "../../../utils/formaters/useDate";

function useDashboard() {
  // get info by session
  const { userInfo, userLogged } = useSession();
  // get user name
  const userName = userInfo ? userInfo.first_name : null;
  // get user id
  const userId = userInfo ? userInfo.id : null;

  // call formaters
  const { formatCurrency } = useCurrency();
  const { formatDateApi, dateToString, stringToDate, currentDate } = useDate();

  // Icons
  const incomeIcon = <FontAwesomeIcon icon={faArrowCircleUp} />;
  const expenseIcon = <FontAwesomeIcon icon={faArrowCircleDown} />;
  const balanceIcon = <FontAwesomeIcon icon={faBalanceScale} />;
  const plusIcon = <FontAwesomeIcon icon={faPlusCircle} />;
  const calendarIcon = <FontAwesomeIcon icon={faCalendar} />;

  // Handle calendar
  const [isOpenCalendar, setIsOpenCalendar] = useState(false);

  const firstDay = moment().startOf("month");
  const today = currentDate();

  const [dateRange, setDateRange] = useState([firstDay, today]);

  const openCalendar = () => {
    setIsOpenCalendar(true);
  };
  const closeCalendar = () => {
    setIsOpenCalendar(false);
  };
  const onClickDate = (value) => {
    const startDate = value[0];
    const endDate = value[1];
    const newDateRange = [startDate, endDate];
    setDateRange(newDateRange);
    handleRequest(newDateRange);
    closeCalendar();
  };

  const getLabelsChart = (dataResponse) => {
    const budget = dataResponse.budget.categories;
    const expenses = dataResponse.expenses.categories;
    if (
      JSON.stringify(Object.keys(budget)) ===
      JSON.stringify(Object.keys(expenses))
    ) {
      return Object.keys(budget);
    } else {
      alert("Budget categories are diferent to Expenses categories");
      return [];
    }
  };

  const getDataApiResponse = (dataResponse) => {
    const labels = dataResponse ? getLabelsChart(dataResponse) : [];
    const dataExpenses = dataResponse
      ? Object.values(dataResponse.expenses.categories)
      : [];
    const dataBudget = dataResponse
      ? Object.values(dataResponse.budget.categories)
      : [];
    const totalIncomes = dataResponse
      ? formatCurrency(dataResponse.incomes.totalIncomes)
      : "";
    const totalExpenses = dataResponse
      ? formatCurrency(dataResponse.expenses.totalExpenses)
      : "";
    const totalBalance = dataResponse
      ? formatCurrency(dataResponse.totalBalance)
      : "";

    return {
      labels,
      dataExpenses,
      dataBudget,
      totalIncomes,
      totalExpenses,
      totalBalance,
    };
  };

  const [isLoading, setIsLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);
  const {
    labels,
    dataExpenses,
    dataBudget,
    totalIncomes,
    totalExpenses,
    totalBalance,
  } = getDataApiResponse(apiResponse);

  const handleRequest = (newDateRange) => {
    setIsLoading(true);
    const dateRangeRequest = newDateRange ? newDateRange : dateRange;
    const url = `/user/${userId}/all-transactions?i_date=${formatDateApi(
      dateRangeRequest[0]
    )}&f_date=${formatDateApi(dateRangeRequest[1])}`;
    console.log(url);

    axios
      .get("https://swapi.dev/api/films")
      .then((response) => {
        const jsonResponse = {
          expenses: {
            categories: {
              rent: "500",
              utilities: "400",
              groseries: "500",
              restaurant: "400",
            },
            totalExpenses: "1800",
          },
          incomes: {
            categories: {
              salary: "2000",
              gift: "100",
              investments: "500",
            },
            totalIncomes: "2600",
          },
          budget: {
            categories: {
              rent: "100",
              utilities: "50",
              groseries: "500",
              restaurant: "400",
            },
            totalBudget: "1800", //No lo necesitamos pintar
          },
          totalBalance: "800",
        };
        setApiResponse(jsonResponse);
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

  return {
    userName,
    userLogged,
    isLoading,
    labels,
    dataExpenses,
    dataBudget,
    totalIncomes,
    totalExpenses,
    totalBalance,
    incomeIcon,
    expenseIcon,
    balanceIcon,
    plusIcon,
    calendarIcon,
    isOpenCalendar,
    dateRange: [dateToString(dateRange[0]), dateToString(dateRange[1])],
    closeCalendar,
    onClickDate,
    openCalendar,
  };
}

export { useDashboard };
