import React from "react";
import "./App.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
// faArrowCircleUp,
// faArrowCircleDown,
// faBalanceScale,
// } from "@fortawesome/free-solid-svg-icons";
// import { DivButtons } from "./components/molecules/DivButtons/DivButtons";
// import { Button } from './components/atoms/Button/Button';
// import {ButtonList} from './components/molecules/ButtonList/ButtonList'
// import { TransactionCard } from './components/molecules/TransactionCard/TransactionCard';
// import { ConfirmationModal } from "./components/molecules/ConfirmationModal/ConfirmationModal";
// import { CategoryModal } from "./components/organisms/CategoryModal/CategoryModal";
// import { Form } from "./components/organisms/Form/Form";
import { Dashboard } from "./components/templates/Dashboard/Dashboard";

function App() {
  // const categoryList = ["Rent", "Utilities", "Transport", "Restaurant"]
  return (
    <React.Fragment>
      <Dashboard />
      {/* <CategoryModal /> */}
      {/* <Form /> */}
      {/* <ConfirmationModal /> */}
      {/*<Title text="Add transaction" />
      <Title text="Update transaction" />
      <Title text="Transaction" /> */}
      {/* <DivButtons type="transaction" /> */}
      {/* <DivButtons type="confirmation" /> */}
      {/* <Button variant='inputbtn date'/>
      <Button variant='inputbtn' text='Select Category' />*/}

      {/* <TransactionCard variant="IncomeCard" icon={incomeIcon} /> */}

      {/* <TransactionCard variant="ExpenseCard" icon={expenseIcon} /> */}
    </React.Fragment>
  );
}

export default App;
