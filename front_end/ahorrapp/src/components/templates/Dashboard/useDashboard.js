import React, { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlusCircle,
  faArrowCircleUp,
  faArrowCircleDown,
  faPiggyBank,
  faCalendar
} from '@fortawesome/free-solid-svg-icons';
import { useSession } from '../../../utils/session/useSession';
import { useCurrency } from '../../../utils/formaters/useCurrency';
import { useDate } from '../../../utils/formaters/useDate';
import { API } from '../../../config';

function useDashboard () {
  // get info by session
  const { userInfo, userLogged } = useSession();
  // get user name
  const userName = userInfo ? userInfo.first_name : null;
  // get user id
  const userId = userInfo ? userInfo.id : null;

  // call formaters
  const { formatCurrency } = useCurrency();
  const { formatDateApi, dateToString, currentDate } = useDate();

  // Icons
  const incomeIcon = <FontAwesomeIcon icon={faArrowCircleUp} />;
  const expenseIcon = <FontAwesomeIcon icon={faArrowCircleDown} />;
  const balanceIcon = <FontAwesomeIcon icon={faPiggyBank} />;
  const plusIcon = <FontAwesomeIcon icon={faPlusCircle} />;
  const calendarIcon = <FontAwesomeIcon icon={faCalendar} />;

  // Handle calendar
  const [isOpenCalendar, setIsOpenCalendar] = useState(false);

  const firstDay = moment().startOf('month');
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

  const validateKeys = (budgetKeys, expensesKeys) => {
    let areEquals = true;

    if (budgetKeys.lenght === expensesKeys.lenght) {
      budgetKeys.forEach((key) => {
        if (!expensesKeys.includes(key)) {
          areEquals = false;
        }
      });
    }

    return areEquals;
  };

  const getLabelsChart = (dataResponse) => {
    const budget = dataResponse.budget.categories;
    const expenses = dataResponse.expenses.categories;
    const budgetKeys = Object.keys(budget);
    const expensesKeys = Object.keys(expenses);
    if (validateKeys(budgetKeys, expensesKeys)) {
      return Object.keys(budget);
    } else {
      console.log('Budget categories are diferent to Expenses categories');
      return [];
    }
  };

  const getValues = (labels, data) => {
    return labels.map((key) => {
      return data[key];
    });
  };

  const getDataApiResponse = (dataResponse) => {
    const labels = dataResponse ? getLabelsChart(dataResponse) : [];
    const dataExpenses = dataResponse
      ? getValues(labels, dataResponse.expenses.categories)
      : [];
    const dataBudget = dataResponse
      ? getValues(labels, dataResponse.budget.categories)
      : [];
    const totalIncomes = dataResponse
      ? formatCurrency(dataResponse.incomes.totalIncomes)
      : '';
    const totalExpenses = dataResponse
      ? formatCurrency(dataResponse.expenses.totalExpenses)
      : '';
    const totalBalance = dataResponse
      ? formatCurrency(dataResponse.totalBalance)
      : '';

    return {
      labels,
      dataExpenses,
      dataBudget,
      totalIncomes,
      totalExpenses,
      totalBalance
    };
  };

  const [isLoading, setIsLoading] = useState(false);
  const [reloadData, setReloadData] = useState(false);

  const [apiResponse, setApiResponse] = useState(null);
  const {
    labels,
    dataExpenses,
    dataBudget,
    totalIncomes,
    totalExpenses,
    totalBalance
  } = getDataApiResponse(apiResponse);

  const onReloadData = () => {
    setReloadData(true);
  };

  const handleRequest = (newDateRange) => {
    setIsLoading(true);
    const dateRangeRequest = newDateRange || dateRange;
    const url = `${API}/user/${userId}/transactions?i_date=${formatDateApi(
      dateRangeRequest[0]
    )}&f_date=${formatDateApi(dateRangeRequest[1])}`;
    axios
      .get(url)
      .then((response) => {
        const jsonResponse = response.data;
        setApiResponse(jsonResponse);
        setIsLoading(false);
        reloadData && setReloadData(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        reloadData && setReloadData(false);
      });
  };

  useEffect(() => {
    userLogged && handleRequest();
  }, [userLogged]);

  useEffect(() => {
    reloadData && handleRequest();
  }, [reloadData]);

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
    onReloadData
  };
}

export { useDashboard };
