import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBill,
  faCalendar,
  faList,
  // faArrowCircleUp,
  // faArrowCircleDown,
  // faBalanceScale,
} from "@fortawesome/free-solid-svg-icons";
// import { Title } from "./components/atoms/Title/Title";
// import { Footer } from "./components/molecules/Footer/Footer";
// import { DivButtons } from "./components/molecules/DivButtons/DivButtons";
// import { TextArea } from "./components/atoms/TextArea/TextArea";
// import { Box } from "./components/atoms/Box/Box";
import { Input } from "./components/molecules/Input/Input";
import { Button } from "./components/atoms/Button/Button";

function App() {
  const amountIcon = <FontAwesomeIcon icon={faMoneyBill} />;
  const categoryIcon = <FontAwesomeIcon icon={faList} />;
  const dateIcon = <FontAwesomeIcon icon={faCalendar} />;
  // const incomeIcon = <FontAwesomeIcon icon={faArrowCircleUp} />;
  // const expenseIcon = <FontAwesomeIcon icon={faArrowCircleDown} />;
  // const balanceIcon = <FontAwesomeIcon icon={faBalanceScale} />;
  return (
    <React.Fragment>
      {/* <Title text="Hi" userName=" Sebastián!" />
      <Title text="Add transaction" />
      <Title text="Update transaction" />
      <Title text="Categories" />
      <Title text="Transaction" /> */}
      {/* <DivButtons transactionType="true" /> */}
      <Input variant="input" icon={amountIcon} text="Amount" isinput="true" />
      <Input
        variant="input"
        icon={categoryIcon}
        text="Category"
        isbutton="true"
      />
      <Input variant="input" icon={dateIcon} text="Date" isdate="true" />
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
      <Button text="No" variant="btn btnNo" />
      <Button text="Yes" variant="btn btnYes" />

      {/* <TextArea label="Description" /> */}
      {/* <DivButtons action="true" /> */}
      {/* <Footer /> */}
    </React.Fragment>
  );
}

export default App;
