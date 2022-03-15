import { useState } from "react";

function useTransaction() {
  const [isOpenForm, setIsOpenForm] = useState(false);

  //category list
  const apiResponse = {
    expenses: [
      // {
      //   name: "Rent",
      //   transaction_type_id: 1,
      //   user_id: 1,
      //   id: 1,
      // },
      // {
      //   name: "Utilities",
      //   transaction_type_id: 1,
      //   user_id: 1,
      //   id: 2,
      // },
      // {
      //   name: "Transport",
      //   transaction_type_id: 1,
      //   user_id: 1,
      //   id: 3,
      // },
      // {
      //   name: "Restaurant",
      //   transaction_type_id: 1,
      //   user_id: 1,
      //   id: 4,
      // },
    ],
    incomes: [],
  };
  const categoryListExpenses = Object.values(apiResponse.expenses);
  const categoryListIncomes = Object.values(apiResponse.incomes);
  const [categoryList, setCategoryList] = useState([]);

  const [variant, setVariant] = useState("");

  const handleExpenseButton = () => {
    setCategoryList(categoryListExpenses);
    setVariant("expense");
    setIsOpenForm(true);
  };

  const handleIncomeButton = () => {
    setCategoryList(categoryListIncomes);
    setVariant("income");
    setIsOpenForm(true);
  };

  // const openForm = () => {
  //   setIsOpenForm(true);
  // };

  return {
    categoryList,
    isOpenForm,
    variant,
    handleExpenseButton,
    handleIncomeButton,
  };
}

export { useTransaction };
