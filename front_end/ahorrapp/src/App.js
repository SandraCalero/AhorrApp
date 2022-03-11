import React from "react";
import "./App.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   // faUserCircle,
//   // faBars,
//   faPlusCircle,
//   // faArrowCircleUp,
//   // faArrowCircleDown,
//   // faBalanceScale,
// } from "@fortawesome/free-solid-svg-icons";
// import { Title } from "./components/atoms/Title/Title";
// import { Footer } from "./components/molecules/Footer/Footer";
// import { DivButtons } from "./components/molecules/DivButtons/DivButtons";
// import { Box } from "./components/atoms/Box/Box";
// import { Button } from './components/atoms/Button/Button';
// import {ButtonList} from './components/molecules/ButtonList/ButtonList'
// import { LinkButton } from "./components/molecules/LinkButton/LinkButton";
// import { BarChart } from "./components/atoms/BarChart/BarChart";
import { NavBar } from "./components/molecules/NavBar/NavBar";
// import { TransactionCard } from './components/molecules/TransactionCard/TransactionCard';
// import { ConfirmationModal } from "./components/molecules/ConfirmationModal/ConfirmationModal";
// import { CategoryModal } from "./components/organisms/CategoryModal/CategoryModal";
import { Form } from "./components/organisms/Form/Form";

function App() {
  // const userIcon = <FontAwesomeIcon icon={faUserCircle} />;
  // const menuIcon = <FontAwesomeIcon icon={faBars} />;
  // const plusIcon = <FontAwesomeIcon icon={faPlusCircle} />;
  // const incomeIcon = <FontAwesomeIcon icon={faArrowCircleUp} />;
  // const expenseIcon = <FontAwesomeIcon icon={faArrowCircleDown} />;
  // const balanceIcon = <FontAwesomeIcon icon={faBalanceScale} />;
  // const categoryList = ["Rent", "Utilities", "Transport", "Restaurant"]
  return (
    <React.Fragment>
      <NavBar />
      {/* <CategoryModal /> */}
      <Form />
      {/* <ConfirmationModal /> */}
      {/* <Title text="Hi" userName=" Sebastián!" />
      <Title text="Add transaction" />
      <Title text="Update transaction" />
      <Title text="Transaction" /> */}
      {/* <DivButtons type="transaction" /> */}
      {/* <DivButtons type="confirmation" /> */}
      {/* <Button variant='inputbtn date'/>
      <Button variant='inputbtn' text='Select Category' />*/}
      {/* <Button icon={userIcon} variant='navIcon' />
      <Button icon={menuIcon} variant='navIcon' /> */}
      {/* <LinkButton variant="addTrans" text="Add Transaction" icon={plusIcon} /> */}

      {/* <div className="boxes">
        <Box
          variant="iconPosition iconIncome"
          transactionType="Incomes"
          amount="$1.800.000"
          icon={incomeIcon}
        />
        <Box
          variant="iconPosition iconExpense"
          transactionType="Expenses"
          amount="$800.000"
          icon={expenseIcon}
        />
        <Box
          variant="iconPosition iconBalance"
          transactionType="Balance"
          amount="$1.000.000"
          icon={balanceIcon}
        />
      </div> */}

      {/* <BarChart /> */}

      {/* <TransactionCard variant="IncomeCard" icon={incomeIcon} /> */}

      {/* <TransactionCard variant="ExpenseCard" icon={expenseIcon} /> */}

      {/* <Footer /> */}
    </React.Fragment>
  );
}

export default App;
