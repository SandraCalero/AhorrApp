import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMoneyBill,
  faCalendar,
  faList,
  // faUserCircle,
  // faBars,
  faPlusCircle,
  // faArrowCircleUp,
  // faArrowCircleDown,
  // faBalanceScale,
} from '@fortawesome/free-solid-svg-icons';
// import { Title } from "./components/atoms/Title/Title";
// import { Footer } from "./components/molecules/Footer/Footer";
// import { DivButtons } from "./components/molecules/DivButtons/DivButtons";
// import { TextArea } from "./components/atoms/TextArea/TextArea";
// import { Box } from "./components/atoms/Box/Box";
import { Input } from './components/molecules/Input/Input';
// import { Button } from './components/atoms/Button/Button';
// import {ButtonList} from './components/molecules/ButtonList/ButtonList'
import { LinkButton } from './components/molecules/LinkButton/LinkButton';
// import { BarChart } from "./components/atoms/BarChart/BarChart";
import { NavBar } from './components/molecules/NavBar/NavBar';
// import { TransactionCard } from './components/molecules/TransactionCard/TransactionCard';
import { ConfirmationModal } from './components/molecules/ConfirmationModal/ConfirmationModal';

function App() {
  const amountIcon = <FontAwesomeIcon icon={faMoneyBill} />;
  const categoryIcon = <FontAwesomeIcon icon={faList} />;
  const dateIcon = <FontAwesomeIcon icon={faCalendar} />;

  // const userIcon = <FontAwesomeIcon icon={faUserCircle} />;
  // const menuIcon = <FontAwesomeIcon icon={faBars} />;
  const plusIcon = <FontAwesomeIcon icon={faPlusCircle} />;
  // const incomeIcon = <FontAwesomeIcon icon={faArrowCircleUp} />;
  // const expenseIcon = <FontAwesomeIcon icon={faArrowCircleDown} />;
  // const balanceIcon = <FontAwesomeIcon icon={faBalanceScale} />;
  // const categoryList = ["Rent", "Utilities", "Transport", "Restaurant"]
  return (
    <React.Fragment>
      <NavBar />
      <ConfirmationModal />
      {/* <Title text="Hi" userName=" Sebastián!" />
      <Title text="Add transaction" />
      <Title text="Update transaction" />
      <Title text="Categories" />
      <Title text="Transaction" /> */}
      {/* <DivButtons type="transaction" /> */}
      {/* <DivButtons type="action" /> */}
      {/* <DivButtons type="confirmation" /> */}
      {/* <Button variant='inputbtn date'/>
      <Button variant='inputbtn' text='Select Category' />*/}
      {/* <Button icon={userIcon} variant='navIcon' />
      <Button icon={menuIcon} variant='navIcon' /> */}
      {/* <LinkButton variant="addTrans" text="Add Transaction" icon={plusIcon} /> */}
      {/* 
      <Input variant="input" icon={amountIcon} text="Amount" isinput="true" />
      <Input
        variant="input"
        icon={categoryIcon}
        text="Category"
        isbutton="true"
      />
      <Input variant="input" icon={dateIcon} text="Date" isdate="true" /> */}
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

      {/* <TextArea label="Description" /> */}
      {/* <ButtonList categoryList={categoryList}/> */}

      {/* <BarChart /> */}

      {/* <TransactionCard variant="IncomeCard" icon={incomeIcon} /> */}

      {/* <TransactionCard variant="ExpenseCard" icon={expenseIcon} /> */}

      {/* <Footer /> */}
    </React.Fragment>
  );
}

export default App;
